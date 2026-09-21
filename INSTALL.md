# OpenCode CoDesign Plugin - 安装指南

## 🎯 完整安装（推荐）

要让斜杠命令 `/codesign` 工作，需要完成以下步骤：

### 步骤 1: 安装插件

```bash
# 方式 1: 从 npm 安装
npm install -g @opencode-ai/codesign
opencode plugin @opencode-ai/codesign

# 方式 2: 本地安装
cd /path/to/opencode-codesign-plugin
npm install
npm link
opencode plugin @opencode-ai/codesign
```

### 步骤 2: 安装 Skill（启用斜杠命令）

```bash
# 复制 skill 到 OpenCode 的 skills 目录
cp -r /path/to/opencode-codesign-plugin/skill ~/.config/opencode/skills/codesign

# 或者创建符号链接
ln -s /path/to/opencode-codesign-plugin/skill ~/.config/opencode/skills/codesign
```

### 步骤 3: 验证安装

```bash
# 启动 OpenCode
opencode

# 测试斜杠命令
> /codesign 创建一个 SaaS 产品的落地页

# 或者使用工具
> 使用 design 工具创建一个落地页
```

---

## 📋 安装后的调用方式

### 🌟 方式 1: 斜杠命令（最直接）

```
/codesign 创建一个 AI 初创公司的落地页，要简约专业的风格
```

**优点**：
- ✅ 最直接，输入 `/codesign` 就能调用
- ✅ 不会被其他 skill 拦截
- ✅ 触发完整的 Open CoDesign 工作流

### 方式 2: 使用 design 工具

```
使用 design 工具创建一个 SaaS 产品的落地页
```

### 方式 3: 明确提到 skill

```
用 opencode-codesign skill 设计一个落地页
```

---

## 🔧 目录结构

安装完成后，你的目录结构应该是：

```
~/.config/opencode/
├── opencode.json           # 插件配置
├── node_modules/
│   └── @opencode-ai/
│       └── codesign/       # 插件（工具）
└── skills/
    └── codesign/           # Skill（斜杠命令）
        ├── SKILL.md
        ├── README.md
        └── LICENSE.txt
```

---

## 🎯 验证安装

### 检查插件是否安装

```bash
cat ~/.config/opencode/opencode.json | grep codesign
```

应该看到：
```json
"plugin": [
  "@opencode-ai/codesign"
]
```

### 检查 skill 是否安装

```bash
ls ~/.config/opencode/skills/ | grep codesign
```

应该看到：
```
codesign
```

### 测试工具

```bash
opencode
> 使用 design 工具创建一个测试页面
```

### 测试斜杠命令

```bash
opencode
> /codesign 创建一个测试页面
```

---

## 🔍 故障排查

### 问题 1: 斜杠命令不工作

**原因**: Skill 没有安装到 skills 目录

**解决方案**:
```bash
# 检查 skill 是否存在
ls ~/.config/opencode/skills/codesign

# 如果不存在，复制 skill
cp -r ./skill ~/.config/opencode/skills/codesign
```

### 问题 2: 工具不工作

**原因**: 插件没有安装

**解决方案**:
```bash
# 检查插件是否安装
cat ~/.config/opencode/opencode.json | grep codesign

# 如果没有，安装插件
opencode plugin @opencode-ai/codesign
```

### 问题 3: 调用了其他 skill

**原因**: 没有明确指定使用哪个 skill

**解决方案**:
```bash
# 使用斜杠命令
> /codesign 创建一个落地页

# 或者明确说明
> 使用 design 工具创建一个落地页
```

---

## 📦 自动安装脚本

创建一个安装脚本 `install.sh`：

```bash
#!/bin/bash

echo "🎨 Installing OpenCode CoDesign Plugin..."

# 安装插件
echo "📦 Installing plugin..."
npm install -g @opencode-ai/codesign
opencode plugin @opencode-ai/codesign

# 安装 skill
echo "🎯 Installing skill..."
SKILL_DIR="$HOME/.config/opencode/skills/codesign"
mkdir -p "$SKILL_DIR"
cp -r ./skill/* "$SKILL_DIR/"

echo "✅ Installation complete!"
echo ""
echo "🚀 Usage:"
echo "  /codesign 创建一个落地页"
echo "  使用 design 工具创建一个落地页"
echo ""
echo "📖 See USAGE.md for more details"
```

使用方法：
```bash
chmod +x install.sh
./install.sh
```

---

## 🎉 完成！

现在你可以使用以下方式调用插件：

1. **斜杠命令**: `/codesign 创建一个落地页`
2. **design 工具**: `使用 design 工具创建一个落地页`
3. **其他工具**: `用 scaffold 工具创建一个模板`

查看 [USAGE.md](./USAGE.md) 了解更多使用方法。
