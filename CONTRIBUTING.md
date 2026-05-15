# Contributing to OpenCode CoDesign Plugin

Thank you for your interest in contributing to OpenCode CoDesign Plugin!

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/jcy321/opencode-codesign-plugin.git
cd opencode-codesign-plugin

# Install dependencies
npm install

# Test locally
npm pack
npm install -g opencode-ai-codesign-1.0.0.tgz
```

## 📝 Development Guidelines

### Code Style

- Use ES Module format (`.mjs`)
- Follow OpenCode plugin conventions
- Use `tool.schema` for parameter validation
- Write clear, concise comments

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new template
fix: correct token validation
docs: update README
chore: update dependencies
```

### Adding Templates

1. Create template directory in `templates/`
2. Add `App.jsx`, `DESIGN.md`, `template.json`
3. Update `index.mjs` TEMPLATES registry
4. Test with scaffold tool

## 🧪 Testing

```bash
# Test the plugin
opencode plugin ./

# Test tools
opencode
> list all available design templates
> scaffold a minimal landing page called "Test"
```

## 📦 Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
