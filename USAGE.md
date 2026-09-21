# OpenCode CoDesign Plugin - 使用指南

## 🎯 问题说明

当你说"帮我设计XX前端UI"时，OpenCode 可能会调用内置的 `frontend-design` skill，而不是这个插件。

**解决方案**：使用明确的调用方式来确保使用 OpenCode CoDesign 插件。

---

## ✅ 推荐的调用方式

### 🌟 方式 1: 斜杠命令（最直接、最推荐）

这是**最推荐**的方式，直接输入斜杠命令：

```
/codesign 创建一个 SaaS 产品的落地页
```

```
/codesign create a landing page for my AI startup
```

```
/codesign 设计一个数据仪表板，要信息密集型
```

**为什么最推荐**：
- ✅ 最直接，输入 `/codesign` 就能调用
- ✅ 100% 可靠，不会被其他 skill 拦截
- ✅ 触发完整的 Open CoDesign 工作流
- ✅ 自动生成 App.jsx + DESIGN.md
- ✅ 不需要记住复杂的关键词

**注意**：需要先安装 skill 到 `~/.config/opencode/skills/codesign`，详见 [INSTALL.md](./INSTALL.md)

---

### 方式 2: 使用 design 工具（次推荐）

这是最可靠的方式，直接调用插件的主工具：

```
使用 design 工具创建一个 SaaS 产品的落地页
```

```
用 design 工具设计一个电商网站的首页
```

```
use the design tool to create a dashboard for analytics
```

**为什么推荐**：
- ✅ 直接调用插件工具，不会被其他 skill 拦截
- ✅ 触发完整的 Open CoDesign 工作流
- ✅ 自动生成 App.jsx + DESIGN.md

---

### 方式 3: 明确提到插件名称

```
用 opencode-codesign skill 设计一个落地页
```

```
使用 Open CoDesign 插件设计一个仪表板
```

```
用 codesign 插件创建一个营销页面
```

**为什么有效**：
- ✅ 明确指定使用哪个 skill
- ✅ 避免与内置 skill 冲突

---

### 方式 3: 提到关键特性

```
创建一个带有设计令牌和 DESIGN.md 的落地页
```

```
设计一个包含完整设计系统文档的仪表板
```

```
用 Open CoDesign 方法设计一个网站
```

**关键词**：
- "设计令牌" / "design tokens"
- "DESIGN.md"
- "设计系统文档" / "design system documentation"
- "Open CoDesign"

---

## 🔧 所有可用工具

### 1. design（主工具）

**用途**：完整的设计工作流，生成 App.jsx + DESIGN.md

**调用方式**：
```
使用 design 工具创建一个 [描述]
```

**示例**：
```
使用 design 工具创建一个 SaaS 产品的落地页，要简约风格
用 design 工具设计一个数据仪表板，要信息密集型
use the design tool to create a bold campaign page
```

---

### 2. scaffold

**用途**：从模板快速创建设计

**调用方式**：
```
使用 scaffold 工具创建一个 [模板名] 模板的设计，名字叫 [项目名]
```

**可用模板**：
- `minimal-landing` - 简约落地页
- `bold-campaign` - 大胆营销页
- `dense-dashboard` - 密集仪表板
- `marketing-saas` - SaaS 营销页

**示例**：
```
使用 scaffold 工具创建一个 minimal-landing 模板的设计，名字叫"我的产品"
scaffold a bold-campaign template called "Product Launch 2026"
```

---

### 3. check

**用途**：检查设计质量和可访问性

**调用方式**：
```
用 check 工具检查 [文件路径]
```

**示例**：
```
用 check 工具检查 App.jsx
check the design quality of ./my-project/App.jsx
```

---

### 4. tokens

**用途**：获取设计令牌

**调用方式**：
```
用 tokens 工具获取 [方向] 风格的设计令牌
```

**可用方向**：
- `minimal` - 简约风格
- `bold` - 大胆风格
- `dense` - 密集风格

**示例**：
```
用 tokens 工具获取 minimal 风格的设计令牌
get design tokens for bold direction using the tokens tool
```

---

### 5. list-templates

**用途**：列出所有可用模板

**调用方式**：
```
用 list-templates 工具列出所有模板
```

**示例**：
```
用 list-templates 工具列出所有 Open CoDesign 模板
list all available templates using list-templates tool
```

---

### 6. preview

**用途**：生成预览说明

**调用方式**：
```
用 preview 工具查看如何预览 [文件路径]
```

**示例**：
```
用 preview 工具查看如何预览 App.jsx
generate preview instructions for App.jsx using preview tool
```

---

## 📋 完整工作流示例

### 示例 1: 从零开始设计

```
使用 design 工具创建一个 AI 初创公司的落地页，要简约专业的风格
```

**预期输出**：
- `App.jsx` - 完整的 React 组件，包含设计令牌
- `DESIGN.md` - 完整的设计系统文档

---

### 示例 2: 从模板开始

```
1. 用 list-templates 工具列出所有模板
2. 使用 scaffold 工具创建一个 minimal-landing 模板的设计，名字叫"我的产品"
3. 用 check 工具检查 我的产品/App.jsx
```

---

### 示例 3: 获取设计令牌

```
1. 用 tokens 工具获取 bold 风格的设计令牌
2. 使用 design 工具创建一个产品发布页，使用大胆的视觉风格
```

---

## ❌ 不推荐的说法

这些说法可能会调用其他 skill 而不是 OpenCode CoDesign：

```
❌ 帮我设计一个前端UI
❌ 创建一个落地页
❌ 设计一个网站
❌ 做一个仪表板
```

**为什么不推荐**：
- 太通用，OpenCode 可能调用内置的 `frontend-design` skill
- 没有明确指定使用哪个插件

---

## ✅ 推荐的说法

```
✅ 使用 design 工具创建一个落地页
✅ 用 opencode-codesign skill 设计一个网站
✅ 创建一个带有设计令牌和 DESIGN.md 的仪表板
✅ 用 Open CoDesign 方法设计一个前端UI
```

---

## 🎯 快速参考

| 需求 | 推荐命令 |
|------|---------|
| 完整设计工作流 | `使用 design 工具创建一个 [描述]` |
| 从模板快速开始 | `使用 scaffold 工具创建一个 [模板] 模板` |
| 检查设计质量 | `用 check 工具检查 [文件]` |
| 获取设计令牌 | `用 tokens 工具获取 [方向] 风格的设计令牌` |
| 列出所有模板 | `用 list-templates 工具列出所有模板` |

---

## 💡 核心原则

1. **明确性优于隐式**：明确说"使用 XXX 工具"比依赖关键词更可靠
2. **工具优先**：直接调用工具（如 `design`）比调用 skill 更直接
3. **避免通用词**：不要只说"设计"、"创建"，要说"使用 design 工具"

---

## 🔍 故障排查

### 问题：OpenCode 调用了 frontend-design 而不是 opencode-codesign

**解决方案**：
```
使用 design 工具创建一个 [你的需求]
```

或者：
```
用 opencode-codesign skill 设计一个 [你的需求]
```

---

### 问题：只调用了 skill 但没有生成 DESIGN.md

**解决方案**：
确保在请求中提到关键特性：
```
创建一个带有设计令牌和 DESIGN.md 文档的 [你的需求]
```

---

### 问题：不确定有哪些模板可用

**解决方案**：
```
用 list-templates 工具列出所有 Open CoDesign 模板
```

---

## 📞 需要帮助？

如果遇到问题，请：
1. 确保插件已正确安装
2. 使用明确的工具调用方式（`使用 design 工具...`）
3. 查看 [GitHub Issues](https://github.com/opencode-ai/codesign-plugin/issues)

---

**记住**：最可靠的方式是直接说"使用 design 工具"！
