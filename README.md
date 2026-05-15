# OpenCode CoDesign Plugin

**Complete design generation system for OpenCode**

[![npm version](https://img.shields.io/npm/v/@opencode-ai/codesign.svg)](https://www.npmjs.com/package/@opencode-ai/codesign)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive OpenCode plugin that brings the [Open CoDesign](https://github.com/badlogic/open-codesign) methodology to OpenCode, providing design generation tools, templates, and skills.

---

## 🎯 Features

### ✅ OpenCode Plugin (Official Format)

- **🔧 5 Design Tools** - scaffold, preview, check, tokens, list-templates
- **🎨 Skill Integration** - Design generation with Open CoDesign methodology
- **📚 4 Templates** - Production-ready design templates
- **📖 Complete Documentation** - Design system docs for every template

### ✅ Design Methodology

- **Clear visual directions** (Minimal, Bold, Dense)
- **Design tokens system** (colors, fonts, spacing, radius, shadows)
- **DESIGN.md documentation** for every design
- **Accessibility-first** (WCAG AA compliant)
- **No AI slop** (real content, no lorem ipsum)

### ✅ Production Ready

- Semantic HTML
- Responsive design
- Design system documentation
- Quality checking tools
- Preview generation

---

## 📦 Installation

### Using OpenCode CLI

```bash
# Install the plugin
opencode plugin @opencode-ai/codesign

# Or install globally first
npm install -g @opencode-ai/codesign
opencode plugin @opencode-ai/codesign
```

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/opencode-ai/codesign-plugin.git
cd codesign-plugin

# Install dependencies
npm install

# Link to OpenCode
cd ~/.config/opencode
npm install /path/to/codesign-plugin
```

Then add to your `~/.config/opencode/opencode.json`:

```json
{
  "plugin": [
    "@opencode-ai/codesign"
  ]
}
```

---

## 🚀 Quick Start

### Using Design Tools

Once installed, the tools are available in OpenCode conversations:

```bash
# Start OpenCode
opencode

# Use the tools in conversation:
> scaffold a minimal landing page called "Product Launch"
> check the design quality of App.jsx
> show me the design tokens for bold direction
> list all available design templates
```

### Using the Skill

```bash
opencode run "design a landing page for a SaaS product using opencode-codesign"
```

**Output:**
- `App.jsx` - Complete React component with design tokens
- `DESIGN.md` - Full design system documentation

---

## 🔧 Tools

### scaffold
Scaffold a new design from a template.

**Arguments:**
- `template` (required): Template name (minimal-landing, bold-campaign, dense-dashboard, marketing-saas)
- `name` (required): Project name
- `outputDir` (optional): Output directory (default: current directory)

**Example:**
```
scaffold a minimal landing page called "My Product"
```

### preview
Generate preview instructions for a design.

**Arguments:**
- `file` (required): Path to App.jsx file

**Example:**
```
preview the design in App.jsx
```

### check
Check design quality and accessibility.

**Arguments:**
- `file` (required): Path to App.jsx file

**Checks:**
- ✅ Design tokens
- ✅ Semantic HTML
- ✅ Accessibility
- ✅ Responsive design
- ✅ Real content (no lorem ipsum)

**Example:**
```
check the design quality of App.jsx
```

### tokens
Get design tokens for a visual direction.

**Arguments:**
- `direction` (required): Visual direction (minimal, bold, dense)

**Example:**
```
show me the design tokens for bold direction
```

### list-templates
List all available design templates.

**Example:**
```
list all available design templates
```

---

## 📚 Templates

### 1. Minimal Landing Page
- **Direction**: Minimal / Professional
- **Use case**: SaaS products, professional services
- **Features**: Hero, features grid, footer
- **Colors**: Blue primary, white background

### 2. Bold Campaign Page
- **Direction**: Bold / High-Impact
- **Use case**: Product launches, campaigns
- **Features**: Hero with glow effects, stats section
- **Colors**: Red primary, dark background

### 3. Dense Dashboard
- **Direction**: Dense / Professional
- **Use case**: Admin panels, data dashboards
- **Features**: Sidebar, metrics grid, data tables
- **Colors**: Green primary, light background

### 4. Marketing SaaS
- **Direction**: Minimal / Marketing
- **Use case**: Full marketing pages
- **Features**: Hero, features, pricing, testimonials, CTA
- **Colors**: Purple primary, white background

---

## 🎨 Design Methodology

Based on [Open CoDesign](https://github.com/badlogic/open-codesign) by Mario Zechner.

### Core Principles

1. **Choose a clear visual direction** (Minimal, Bold, Dense)
2. **Use strong design tokens** (documented and consistent)
3. **Write real content** (no lorem ipsum)
4. **Build self-contained** (no external dependencies)
5. **Make it accessible** (WCAG AA compliant)
6. **Document decisions** (DESIGN.md with rationale)

### Workflow

1. **Understand** - Analyze requirements
2. **Plan** - Choose visual direction
3. **First Pass** - Create structure with tokens
4. **Polish** - Refine components
5. **Document** - Generate DESIGN.md
6. **Check** - Validate quality
7. **Deliver** - App.jsx + DESIGN.md

---

## 📖 Usage Examples

### Example 1: Create a Landing Page

```bash
opencode run "design a minimal landing page for an AI startup using opencode-codesign"
```

**Result:**
```
your-project/
├── App.jsx (340 lines)
└── DESIGN.md (146 lines)
```

### Example 2: Scaffold from Template

```bash
# In OpenCode conversation:
scaffold a bold campaign page called "Product Launch 2026"
```

### Example 3: Check Quality

```bash
# In OpenCode conversation:
check the design quality of App.jsx
```

**Output:**
```
🔍 Design Quality Check

Score: 5/5 (100%)

✅ Design tokens
✅ Semantic HTML
✅ Accessibility
✅ Responsive design
✅ Real content

🎉 Excellent! Your design meets production quality standards.
```

---

## 🆚 Comparison

### vs. Other OpenCode Plugins

| Feature | opencode-codesign | frontend-design | web-artifacts-builder |
|---------|-------------------|-----------------|----------------------|
| Design system docs | ✅ 146 lines | ❌ | ❌ |
| Design tokens | ✅ Documented | ⚠️ Inline | ⚠️ Inline |
| Design rationale | ✅ Full | ❌ | ❌ |
| Visual directions | ✅ 3 types | ✅ Multiple | ❌ |
| Tools | ✅ 5 tools | ❌ | ❌ |
| Templates | ✅ 4 templates | ❌ | ❌ |
| Quality check | ✅ Built-in | ❌ | ❌ |

**Unique Value**: Only OpenCode plugin providing complete design system documentation with rationale.

---

## 📁 Plugin Structure

```
@opencode-ai/codesign/
├── index.mjs              # Plugin entry point (OpenCode format)
├── package.json           # NPM package config
├── README.md              # This file
├── LICENSE                # MIT License
├── skill/                 # OpenCode skill
│   ├── SKILL.md          # Skill definition
│   ├── README.md         # Skill documentation
│   └── INSTALLATION.md   # Installation guide
└── templates/            # Design templates
    ├── minimal-landing/
    │   ├── App.jsx
    │   ├── DESIGN.md
    │   └── template.json
    ├── bold-campaign/
    │   ├── App.jsx
    │   └── DESIGN.md
    ├── dense-dashboard/
    └── marketing-saas/
```

---

## 🔌 Plugin API

This plugin follows the official OpenCode plugin format:

```javascript
export const id = 'codesign';

export async function server(input, options) {
  return {
    tool: {
      scaffold: tool({ ... }),
      preview: tool({ ... }),
      check: tool({ ... }),
      tokens: tool({ ... }),
      'list-templates': tool({ ... }),
    },
    event: async ({ event }) => { ... },
  };
}
```

---

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

### Development

```bash
git clone https://github.com/opencode-ai/codesign-plugin.git
cd codesign-plugin
npm install
npm test
```

### Adding Templates

1. Create template directory in `templates/`
2. Add `App.jsx`, `DESIGN.md`, `template.json`
3. Update `index.mjs` TEMPLATES registry
4. Test with scaffold tool

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **Open CoDesign** - Original methodology by [Mario Zechner](https://github.com/badlogic)
- **OpenCode** - Plugin system by OpenCode team
- **Claude (Opus 4.7)** - Plugin development

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/opencode-ai/codesign-plugin/issues)
- **Discussions**: [GitHub Discussions](https://github.com/opencode-ai/codesign-plugin/discussions)
- **Documentation**: [Wiki](https://github.com/opencode-ai/codesign-plugin/wiki)

---

## 🗺️ Roadmap

### v1.1
- [ ] More templates (blog, portfolio, e-commerce)
- [ ] Image generation integration
- [ ] Component library
- [ ] Figma export

### v1.2
- [ ] Theme system
- [ ] Dark mode support
- [ ] Animation presets
- [ ] A/B testing variants

### v2.0
- [ ] Visual editor
- [ ] Real-time preview
- [ ] Collaboration features
- [ ] Design version control

---

**Status**: ✅ **Production Ready v1.0.0**

🎨 Start creating beautiful, documented designs with OpenCode CoDesign!
