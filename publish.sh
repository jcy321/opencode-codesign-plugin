#!/bin/bash

# OpenCode CoDesign Plugin - 发布脚本
# 自动化发布流程

set -e

echo "🎨 OpenCode CoDesign Plugin - 发布脚本"
echo ""

# 检查当前目录
if [ ! -f "package.json" ]; then
  echo "❌ 错误: 请在插件根目录运行此脚本"
  exit 1
fi

# 检查 npm 登录状态
echo "📋 检查 npm 登录状态..."
if ! npm whoami > /dev/null 2>&1; then
  echo "❌ 未登录 npm"
  echo ""
  echo "请先运行: npm login"
  exit 1
fi

NPM_USER=$(npm whoami)
echo "✅ 已登录为: $NPM_USER"
echo ""

# 显示包信息
echo "📦 包信息:"
PACKAGE_NAME=$(cat package.json | grep '"name"' | head -1 | cut -d'"' -f4)
PACKAGE_VERSION=$(cat package.json | grep '"version"' | head -1 | cut -d'"' -f4)
echo "   名称: $PACKAGE_NAME"
echo "   版本: $PACKAGE_VERSION"
echo ""

# 检查包名是否可用
echo "🔍 检查包名..."
if npm view "$PACKAGE_NAME" > /dev/null 2>&1; then
  echo "⚠️  警告: 包名 '$PACKAGE_NAME' 已存在"
  echo ""
  echo "选项:"
  echo "  1. 如果你是所有者，可以继续发布新版本"
  echo "  2. 如果不是，请修改 package.json 中的 name 字段"
  echo ""
  read -p "继续发布? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 取消发布"
    exit 1
  fi
else
  echo "✅ 包名可用"
fi
echo ""

# 预览包内容
echo "📋 预览包内容..."
npm pack --dry-run
echo ""

# 确认发布
read -p "确认发布到 npm? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ 取消发布"
  exit 1
fi

# 发布
echo ""
echo "🚀 发布中..."
if npm publish --access public; then
  echo ""
  echo "🎉 发布成功!"
  echo ""
  echo "📦 包信息:"
  echo "   https://www.npmjs.com/package/$PACKAGE_NAME"
  echo ""
  echo "📥 安装命令:"
  echo "   npm install -g $PACKAGE_NAME"
  echo "   opencode plugin $PACKAGE_NAME"
  echo ""
  echo "🔍 查看包:"
  echo "   npm view $PACKAGE_NAME"
  echo ""
else
  echo ""
  echo "❌ 发布失败"
  echo ""
  echo "常见问题:"
  echo "  1. 需要 2FA: npm publish --otp=123456 --access public"
  echo "  2. 没有权限: 更改包名或联系组织管理员"
  echo "  3. 版本已存在: 增加 package.json 中的版本号"
  echo ""
  exit 1
fi
