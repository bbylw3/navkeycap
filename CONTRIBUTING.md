# 贡献指南

感谢您考虑为 WebNav Hub 做出贡献！🎉

## 🤝 如何贡献

### 报告问题
- 使用 [Issues](https://github.com/your-username/webnav-hub/issues) 报告Bug
- 详细描述问题和复现步骤
- 包含浏览器版本、设备信息
- 添加相关截图或错误日志

### 提出功能建议
- 在Issues中使用功能请求模板
- 清楚说明功能的用途和价值
- 提供具体的使用场景

### 代码贡献
1. Fork项目
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 创建Pull Request

## 📝 代码规范

### 提交消息规范
使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
type(scope): description

[optional body]

[optional footer]
```

类型包括：
- `feat`: 新功能
- `fix`: 修复Bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具更改

### 代码风格
- **JavaScript**: 使用ES6+语法，2空格缩进
- **CSS**: 使用BEM命名约定，CSS变量优先
- **HTML**: 语义化标签，无障碍支持

### 示例
```javascript
// 良好的代码示例
class ThemeManager {
  constructor() {
    this.theme = 'light';
  }
  
  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
```

## 🧪 测试

### 本地测试
1. 打开项目文件
2. 测试所有导航功能
3. 检查响应式布局
4. 验证可访问性

### 性能测试
- 使用Chrome DevTools Lighthouse
- 确保性能得分 > 90
- 检查控制台无错误

## 📋 Pull Request清单

提交PR前请确认：

- [ ] 代码遵循项目风格指南
- [ ] 添加了必要的测试
- [ ] 文档已更新
- [ ] 所有测试通过
- [ ] 无控制台错误
- [ ] 响应式设计正常
- [ ] 可访问性测试通过

## 🏷️ 标签说明

- `good first issue`: 适合新手的问题
- `help wanted`: 需要帮助的问题
- `bug`: Bug报告
- `enhancement`: 功能增强
- `documentation`: 文档相关

## 📞 联系方式

如有疑问，请通过以下方式联系：
- GitHub Issues
- Email: your-email@example.com
- Discord: 项目频道

## 🙏 致谢

感谢所有为 WebNav Hub 做出贡献的开发者！

您的贡献将帮助更多人找到有用的工具和资源。