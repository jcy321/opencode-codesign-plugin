#!/bin/bash

set -e

echo "🎨 OpenCode CoDesign Plugin - Installation Script"
echo "=================================================="
echo ""

# 检查是否在插件目录中
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "Please run this script from the plugin directory"
    exit 1
fi

# 检查 OpenCode 配置目录
OPENCODE_DIR="$HOME/.config/opencode"
if [ ! -d "$OPENCODE_DIR" ]; then
    echo "❌ Error: OpenCode config directory not found at $OPENCODE_DIR"
    echo "Please install OpenCode first"
    exit 1
fi

echo "📦 Step 1: Installing plugin..."
echo "--------------------------------"

# 安装依赖
if [ -f "package-lock.json" ]; then
    npm install
else
    npm install
fi

# 链接插件
npm link

# 添加到 OpenCode 配置
echo ""
echo "📝 Step 2: Adding plugin to OpenCode config..."
echo "-----------------------------------------------"

# 检查是否已经在配置中
if grep -q "@opencode-ai/codesign" "$OPENCODE_DIR/opencode.json"; then
    echo "✓ Plugin already in config"
else
    echo "Adding plugin to config..."
    # 这里需要手动添加，因为 JSON 编辑比较复杂
    echo "⚠️  Please manually add '@opencode-ai/codesign' to your opencode.json plugin list"
    echo "   Or run: opencode plugin @opencode-ai/codesign"
fi

echo ""
echo "🎯 Step 3: Installing skill (for /codesign command)..."
echo "-------------------------------------------------------"

# 创建 skills 目录
SKILLS_DIR="$OPENCODE_DIR/skills"
mkdir -p "$SKILLS_DIR"

# 安装 skill
SKILL_TARGET="$SKILLS_DIR/codesign"
if [ -d "$SKILL_TARGET" ]; then
    echo "⚠️  Skill directory already exists, removing..."
    rm -rf "$SKILL_TARGET"
fi

echo "Copying skill files..."
cp -r ./skill "$SKILL_TARGET"

echo ""
echo "✅ Installation Complete!"
echo "========================="
echo ""
echo "🚀 Usage:"
echo "  1. Slash command (recommended):"
echo "     /codesign 创建一个 SaaS 产品的落地页"
echo ""
echo "  2. Design tool:"
echo "     使用 design 工具创建一个落地页"
echo ""
echo "  3. Other tools:"
echo "     用 scaffold 工具创建一个模板"
echo "     用 check 工具检查 App.jsx"
echo "     用 tokens 工具获取设计令牌"
echo ""
echo "📖 Documentation:"
echo "  - USAGE.md - Complete usage guide"
echo "  - INSTALL.md - Installation guide"
echo "  - README.md - Plugin overview"
echo ""
echo "🎉 Happy designing with OpenCode CoDesign!"
