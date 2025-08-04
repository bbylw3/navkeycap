/**
 * WebNav Hub - Enhanced Main Script
 * Optimized for performance, accessibility, and maintainability
 */

(function() {
  'use strict';

  // Constants
  const THEME_KEY = "webnav.theme";
  const THEMES = { LIGHT: "light", DARK: "dark" };
  const STORAGE_AVAILABLE = (() => {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  })();

  // State
  let isInitialized = false;
  const state = {
    currentTheme: null,
    activeNavLink: null,
    navLinks: [],
    observer: null
  };

  // Utility functions
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Theme management
  class ThemeManager {
    constructor() {
      this.rootEl = document.documentElement;
      this.init();
    }

    init() {
      const savedTheme = STORAGE_AVAILABLE ? localStorage.getItem(THEME_KEY) : null;
      if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
        this.setTheme(savedTheme);
      }
    }

    setTheme(theme) {
      if (!Object.values(THEMES).includes(theme)) return;
      
      this.rootEl.setAttribute("data-theme", theme);
      state.currentTheme = theme;
      
      if (STORAGE_AVAILABLE) {
        try {
          localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
          console.warn('Failed to save theme preference:', e);
        }
      }
    }

    toggle() {
      const currentTheme = this.rootEl.getAttribute("data-theme");
      const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      this.setTheme(newTheme);
      return newTheme;
    }

    createToggleButton() {
      const navUl = document.querySelector("nav ul");
      if (!navUl) return null;

      const li = document.createElement("li");
      const btn = document.createElement("button");
      
      btn.type = "button";
      btn.setAttribute("aria-label", "Toggle light/dark theme");
      btn.textContent = "Theme";
      btn.className = "theme-toggle";
      
      // Apply styles programmatically for better maintainability
      Object.assign(btn.style, {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        font: "inherit"
      });

      btn.addEventListener("click", () => {
        const newTheme = this.toggle();
        // Update aria-label to reflect current state
        btn.setAttribute("aria-label", `Switch to ${newTheme === THEMES.LIGHT ? 'dark' : 'light'} theme`);
      });

      li.appendChild(btn);
      navUl.appendChild(li);
      return btn;
    }
  }

  // Navigation management
  class NavigationManager {
    constructor() {
      this.navLinks = Array.from(document.querySelectorAll("nav a"));
      this.sections = [];
      this.init();
    }

    init() {
      this.setupIntersectionObserver();
      this.bindEvents();
      this.initializeActiveState();
    }

    setupIntersectionObserver() {
      // Create intersection observer for better scroll performance
      const options = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      };

      state.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const correspondingLink = this.navLinks.find(link => 
              link.getAttribute('href') === `#${id}`
            );
            if (correspondingLink) {
              this.setActive(correspondingLink);
            }
          }
        });
      }, options);

      // Observe all sections
      this.navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          const targetElement = document.getElementById(href.slice(1));
          if (targetElement) {
            this.sections.push(targetElement);
            state.observer.observe(targetElement);
          }
        }
      });
    }

    bindEvents() {
      this.navLinks.forEach(link => {
        link.addEventListener("click", this.handleNavClick.bind(this));
      });

      // Handle browser back/forward
      window.addEventListener("hashchange", throttle(this.handleHashChange.bind(this), 100));
      window.addEventListener("popstate", this.handleHashChange.bind(this));
    }

    handleNavClick(e) {
      const href = e.currentTarget.getAttribute("href") || "";
      
      // Only handle internal links
      if (!href.startsWith("#")) return;

      e.preventDefault();
      
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        this.smoothScrollTo(targetElement);
        this.updateURL(href);
        this.setActive(e.currentTarget);
      }
    }

    handleHashChange() {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          const activeLink = this.navLinks.find(link => 
            link.getAttribute('href') === hash
          );
          if (activeLink) {
            this.setActive(activeLink);
          }
        }
      }
    }

    smoothScrollTo(element) {
      // Enhanced smooth scrolling with better performance
      const headerOffset = 80; // Account for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    updateURL(hash) {
      const newUrl = `${window.location.origin}${window.location.pathname}${hash}`;
      try {
        window.history.pushState({ hash }, "", newUrl);
      } catch (e) {
        console.warn('Failed to update URL:', e);
      }
    }

    setActive(linkEl) {
      if (!linkEl || linkEl === state.activeNavLink) return;

      // Remove active state from all links
      this.navLinks.forEach(link => {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      });

      // Set active state
      linkEl.classList.add("active");
      linkEl.setAttribute("aria-current", "page");
      state.activeNavLink = linkEl;
    }

    initializeActiveState() {
      if (window.location.hash) {
        this.handleHashChange();
      } else if (this.navLinks[0]) {
        this.setActive(this.navLinks[0]);
      }
    }
  }

  // Security enhancements
  class SecurityManager {
    static enhanceExternalLinks() {
      document.querySelectorAll('a[target="_blank"]').forEach(link => {
        const rel = link.getAttribute("rel") || "";
        const relValues = rel.split(/\s+/).filter(Boolean);
        
        if (!relValues.includes("noopener")) relValues.push("noopener");
        if (!relValues.includes("noreferrer")) relValues.push("noreferrer");
        
        link.setAttribute("rel", relValues.join(" "));
      });
    }
  }

  // Performance monitoring
  class PerformanceMonitor {
    static logInitTime() {
      if (typeof performance !== 'undefined' && performance.mark) {
        performance.mark('app-init-end');
        performance.measure('app-init', 'app-init-start', 'app-init-end');
        
        const measure = performance.getEntriesByName('app-init')[0];
        if (measure && measure.duration > 100) {
          console.warn(`App initialization took ${measure.duration.toFixed(2)}ms`);
        }
      }
    }
  }

  // Main application initialization
  function initializeApp() {
    if (isInitialized) return;

    try {
      // Mark performance start
      if (typeof performance !== 'undefined' && performance.mark) {
        performance.mark('app-init-start');
      }

      // Initialize managers
      const themeManager = new ThemeManager();
      const navigationManager = new NavigationManager();

      // Create theme toggle button
      themeManager.createToggleButton();

      // Enhance security
      SecurityManager.enhanceExternalLinks();

      // Mark as initialized
      isInitialized = true;

      // Log performance
      PerformanceMonitor.logInitTime();

    } catch (error) {
      console.error('Failed to initialize app:', error);
    }
  }

  // Enhanced DOM ready check
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  // Cleanup function for page unload
  function cleanup() {
    if (state.observer) {
      state.observer.disconnect();
    }
  }

  // Initialize when DOM is ready
  ready(initializeApp);
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', cleanup);

})();