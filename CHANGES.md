# OpenCode CoDesign Plugin - 更新说明

## 🎯 问题

用户反馈：
1. 说"帮我设计XX前端UI"时，只会使用内置的 Skill "frontend-design"
2. 说"请使用 OpenCode CoDesign 插件"时，只会使用 Skill "opencode-codesign" 而不是整个插件
3. 关键词列表不太可能每次命中，需要一个明确的调用方式

## ✅ 解决方案

### 🌟 1. 斜杠命令 `/codesign`（最佳方案）

**实现方式**：
- Skill 文件已经存在于 `skill/SKILL.md`
- 用户需要将 skill 目录复制到 `~/.config/opencode/skills/codesign`
- 然后就可以使用 `/codesign` 命令

**使用方式**：
```
/codesign 创建一个 SaaS 产品的落地页
```

**优点**：
- ✅ 最直接，输入 `/codesign` 就能调用
- ✅ 100% 可靠，不会被其他 skill 拦截
- ✅ 触发完整的 Open CoDesign 工作流
- ✅ 不需要记住复杂的关键词

### 2. 添加了 `design` 工具

在 `index.mjs` 中添加了新的 `design` 工具，作为完整设计工作流的主入口：

```javascript
design: tool({
  description: 'Generate a complete design using Open CoDesign methodology...',
  args: {
    request: tool.schema.string().describe('Design request'),
    direction: tool.schema.enum(['minimal', 'bold', 'dense']).optional(),
    outputDir: tool.schema.string().optional(),
  },
  async execute(args, context) {
    // 触发完整的设计工作流
  },
})
```

**特点**：
- ✅ 直接调用插件工具，不依赖关键词匹配
- ✅ 触发完整的 Open CoDesign 工作流
- ✅ 提示用户使用 opencode-codesign skill

### 2. 更新了 Skill 描述

在 `skill/SKILL.md` 中添加了：
- 🎯 明确的调用方式说明
- 📋 可用工具列表
- 🔑 关键词触发器

### 3. 创建了详细的使用指南

创建了 `USAGE.md`，包含：
- ✅ 推荐的调用方式（design 工具优先）
- 📋 所有工具的详细说明
- 💡 完整工作流示例
- ❌ 不推荐的说法
- 🔍 故障排查

### 4. 更新了 README.md

添加了：
- 🌟 Method 1: Using the Design Tool (Recommended)
- 📖 指向 USAGE.md 的链接
- 💡 为什么有多种调用方式

### 5. 更新了 package.json

在工具列表中添加了 `design` 工具：
```json
"tools": [
  "design",      // 新增
  "scaffold",
  "preview",
  "check",
  "tokens",
  "list-templates"
]
```

## 📋 现在的工具列表

1. **design** - 🌟 主工具，完整设计工作流（新增）
2. **scaffold** - 从模板快速创建
3. **check** - 检查设计质量
4. **tokens** - 获取设计令牌
5. **list-templates** - 列出所有模板
6. **preview** - 生成预览说明

## 🎯 推荐的调用方式

### 🌟 最可靠的方式（推荐）

**方式 1: 斜杠命令**
```
/codesign 创建一个 SaaS 产品的落地页
```

**方式 2: design 工具**
```
使用 design 工具创建一个 SaaS 产品的落地页
```

**为什么推荐**：
- ✅ 斜杠命令最直接，输入 `/codesign` 就能调用
- ✅ design 工具直接调用插件，不依赖关键词匹配
- ✅ 都能触发完整的 Open CoDesign 工作流
- ✅ 都能自动生成 App.jsx + DESIGN.md

### 其他方式

1. **明确提到插件名称**：
   ```
   用 opencode-codesign skill 设计一个落地页
   ```

2. **提到关键特性**：
   ```
   创建一个带有设计令牌和 DESIGN.md 的落地页
   ```

3. **使用其他工具**：
   ```
   使用 scaffold 工具创建一个 minimal-landing 模板
   用 check 工具检查 App.jsx
   ```

## 📁 新增文件

- `USAGE.md` - 详细使用指南
- `CHANGES.md` - 本文件，更新说明

## 📝 修改的文件

- `index.mjs` - 添加 design 工具
- `skill/SKILL.md` - 添加调用说明和工具列表
- `README.md` - 添加推荐调用方式和链接
- `package.json` - 更新工具列表
- `CORRECT_USAGE_GUIDE.md` - 添加 design 工具说明

## 🚀 如何使用

### 快速开始

```bash
# 安装插件
opencode plugin @opencode-ai/codesign

# 使用 design 工具（最推荐）
opencode
> 使用 design 工具创建一个 AI 初创公司的落地页
```

### 查看详细文档

- [USAGE.md](./USAGE.md) - 完整使用指南
- [README.md](./README.md) - 插件介绍
- [CORRECT_USAGE_GUIDE.md](../CORRECT_USAGE_GUIDE.md) - 正确使用指南

## 💡 核心改进

1. **不再依赖关键词匹配** - 用户可以直接说"使用 design 工具"
2. **明确的主入口** - design 工具作为完整工作流的入口
3. **详细的文档** - USAGE.md 提供了所有场景的使用说明
4. **更好的用户体验** - 用户不需要记住复杂的关键词

## 🎉 总结

现在用户有两种最可靠的方式调用插件：

**方式 1: 斜杠命令（最推荐）**
```
/codesign 创建一个 [你的需求]
```

**方式 2: design 工具**
```
使用 design 工具创建一个 [你的需求]
```

两种方式都能可靠地调用 OpenCode CoDesign 插件的完整工作流！

**安装说明**：
- 插件工具：`opencode plugin @opencode-ai/codesign`
- 斜杠命令：`cp -r ./skill ~/.config/opencode/skills/codesign`
- 详见 [INSTALL.md](./INSTALL.md)
