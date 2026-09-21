# OpenCode CoDesign Plugin - 完整解决方案

## 🎯 问题回顾

用户反馈的问题：
1. 说"帮我设计XX前端UI"时，只会使用内置的 `frontend-design` skill
2. 说"请使用 OpenCode CoDesign 插件"时，只会使用 skill 而不是整个插件
3. 关键词列表不太可能每次命中，需要一个明确的调用方式

## ✅ 完整解决方案

### 🌟 方案 1: 斜杠命令 `/codesign`（最推荐）

**原理**：
- 在 OpenCode 中，斜杠命令就是 skill
- 当用户输入 `/codesign` 时，OpenCode 会调用 `codesign` skill
- Skill 文件已经存在于 `skill/SKILL.md`

**安装方法**：
```bash
# 复制 skill 到 OpenCode 的 skills 目录
cp -r ./skill ~/.config/opencode/skills/codesign

# 或者使用安装脚本
./install.sh
```

**使用方法**：
```
/codesign 创建一个 SaaS 产品的落地页
/codesign create a landing page for my AI startup
/codesign 设计一个数据仪表板，要信息密集型
```

**优点**：
- ✅ 最直接，输入 `/codesign` 就能调用
- ✅ 100% 可靠，不会被其他 skill 拦截
- ✅ 触发完整的 Open CoDesign 工作流
- ✅ 不需要记住复杂的关键词

---

### 方案 2: design 工具（备选方案）

**原理**：
- 在 `index.mjs` 中添加了 `design` 工具
- 用户可以直接调用这个工具

**使用方法**：
```
使用 design 工具创建一个 SaaS 产品的落地页
use the design tool to create a landing page
```

**优点**：
- ✅ 直接调用插件工具，不依赖关键词匹配
- ✅ 触发完整的 Open CoDesign 工作流

---

## 📦 完整安装步骤

### 自动安装（推荐）

```bash
# 运行安装脚本
./install.sh
```

这会自动完成：
1. 安装插件（工具）
2. 安装 skill（斜杠命令）
3. 配置 OpenCode

### 手动安装

**步骤 1: 安装插件**
```bash
npm install -g @opencode-ai/codesign
opencode plugin @opencode-ai/codesign
```

**步骤 2: 安装 skill（启用 `/codesign` 命令）**
```bash
cp -r ./skill ~/.config/opencode/skills/codesign
```

**步骤 3: 验证安装**
```bash
# 检查插件
cat ~/.config/opencode/opencode.json | grep codesign

# 检查 skill
ls ~/.config/opencode/skills/ | grep codesign
```

---

## 🚀 使用方法

### 推荐顺序

1. **首选：斜杠命令**
   ```
   /codesign 创建一个落地页
   ```

2. **备选：design 工具**
   ```
   使用 design 工具创建一个落地页
   ```

3. **其他工具**
   ```
   用 scaffold 工具创建一个模板
   用 check 工具检查 App.jsx
   ```

---

## 📁 文件结构

安装完成后的目录结构：

```
~/.config/opencode/
├── opencode.json                    # 插件配置
├── node_modules/
│   └── @opencode-ai/
│       └── codesign/                # 插件（提供工具）
│           ├── index.mjs
│           ├── skill/
│           ├── templates/
│           └── package.json
└── skills/
    └── codesign/                    # Skill（提供斜杠命令）
        ├── SKILL.md
        ├── README.md
        └── LICENSE.txt
```

**关键点**：
- `node_modules/@opencode-ai/codesign/` - 插件，提供工具（design, scaffold, check, tokens, list-templates）
- `skills/codesign/` - Skill，提供斜杠命令 `/codesign`

---

## 🔧 工具列表

安装后可用的所有工具：

1. **斜杠命令**: `/codesign` - 完整设计工作流
2. **design** - 主工具，完整设计工作流
3. **scaffold** - 从模板快速创建
4. **check** - 检查设计质量
5. **tokens** - 获取设计令牌
6. **list-templates** - 列出所有模板
7. **preview** - 生成预览说明

---

## 📖 文档

- **INSTALL.md** - 详细安装指南
- **USAGE.md** - 完整使用指南
- **CHANGES.md** - 更新说明
- **README.md** - 插件介绍
- **CORRECT_USAGE_GUIDE.md** - 快速参考

---

## 🎯 快速参考

| 需求 | 推荐命令 |
|------|---------|
| 完整设计工作流 | `/codesign 创建一个 [描述]` |
| 使用工具 | `使用 design 工具创建一个 [描述]` |
| 从模板快速开始 | `使用 scaffold 工具创建一个 [模板]` |
| 检查设计质量 | `用 check 工具检查 [文件]` |
| 获取设计令牌 | `用 tokens 工具获取 [方向] 风格` |
| 列出所有模板 | `用 list-templates 工具列出所有模板` |

---

## 💡 核心改进

1. **斜杠命令** - 最直接的调用方式，输入 `/codesign` 就能调用
2. **design 工具** - 不依赖关键词匹配的工具调用
3. **完整文档** - INSTALL.md, USAGE.md, CHANGES.md
4. **安装脚本** - 一键安装插件和 skill
5. **更好的用户体验** - 用户不需要记住复杂的关键词

---

## 🎉 总结

现在用户有两种最可靠的方式调用插件：

### 方式 1: 斜杠命令（最推荐）
```
/codesign 创建一个 [你的需求]
```

### 方式 2: design 工具
```
使用 design 工具创建一个 [你的需求]
```

两种方式都能可靠地调用 OpenCode CoDesign 插件的完整工作流！

---

## 🔍 技术细节

### OpenCode 插件系统

OpenCode 插件系统包含两个部分：

1. **Plugin（插件）**
   - 通过 `index.mjs` 的 `server()` 函数导出
   - 提供 `tool` 对象，包含各种工具
   - 安装到 `~/.config/opencode/node_modules/`

2. **Skill（技能）**
   - 通过 `SKILL.md` 文件定义
   - 提供斜杠命令（如 `/codesign`）
   - 安装到 `~/.config/opencode/skills/`

### 为什么需要两者？

- **Plugin** 提供实际的功能（工具）
- **Skill** 提供调用入口（斜杠命令）
- 两者配合使用，提供完整的用户体验

---

**问题解决！** 🎉
