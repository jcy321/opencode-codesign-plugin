# OpenCode CoDesign Skill - Installation Complete! 🎉

## ✅ Installation Status

The `opencode-codesign` skill has been successfully installed to OpenCode!

**Location**: `~/.config/opencode/skills/opencode-codesign/`

**Files**:
- ✅ SKILL.md (Complete skill definition with Open CoDesign methodology)
- ✅ LICENSE.txt (MIT License)
- ✅ README.md (Usage documentation)

## 🚀 Quick Test

To test the skill in OpenCode, run:

```bash
opencode run "design a minimal landing page for a SaaS product using opencode-codesign"
```

Or start OpenCode interactively:

```bash
opencode
```

Then type:
```
design a dashboard with metrics using opencode-codesign
```

## 📋 What This Skill Does

Based on Open CoDesign v0.2 methodology, this skill:

1. **Understands** your design requirements
2. **Chooses** a visual direction (Minimal/Bold/Dense)
3. **Creates** App.jsx with design tokens
4. **Implements** the complete design
5. **Documents** the design system in DESIGN.md
6. **Self-checks** for completeness

## 📁 Expected Output

```
your-project/
├── App.jsx           # JSX with ReactDOM.createRoot
├── DESIGN.md         # Design system documentation
└── assets/           # Local assets (if needed)
```

## 🎨 Key Features

✅ **Complete Design Systems** - Not just UI, but documented tokens  
✅ **Three Visual Directions** - Minimal/Editorial, Bold/Campaign, Dense/Professional  
✅ **Production Quality** - Real content, accessible, responsive  
✅ **Self-Contained** - No external dependencies  
✅ **Documented** - Clear design rationale in DESIGN.md  
✅ **No AI Slop** - Avoids generic aesthetics  

## 🔧 Skill Capabilities

### From Open CoDesign Core

- **Identity**: "You are an autonomous design partner..."
- **Workflow**: 7-step design process (Understand → Plan → First Pass → Polish → Document → Self-Check → Finish)
- **Design Methodology**: Start from context, choose direction, use strong tokens
- **Output Rules**: Semantic HTML, real content, accessible, responsive

### Enhanced for OpenCode

- Integrated with OpenCode's skill system
- Compatible with other OpenCode skills (web-artifacts-builder, frontend-design)
- Follows OpenCode conventions

## 📖 Usage Examples

### Example 1: SaaS Landing Page
```
design a minimal landing page for a project management tool using opencode-codesign
```

### Example 2: Analytics Dashboard
```
create a dashboard with charts and metrics using opencode-codesign
```

### Example 3: Marketing Page
```
design a bold landing page for a product launch using opencode-codesign
```

## 🔄 Combining with Other Skills

Works well with:
- **web-artifacts-builder** - Bundle App.jsx into single HTML artifact
- **frontend-design** - For more experimental designs
- **theme-factory** - For reusable theme systems

## 🐛 Troubleshooting

### Skill not recognized?

```bash
# Verify installation
ls -la ~/.config/opencode/skills/opencode-codesign/

# Check SKILL.md
cat ~/.config/opencode/skills/opencode-codesign/SKILL.md | head -10

# Restart OpenCode
```

### Wrong output?

Make sure to mention the skill name:
```
design a landing page using opencode-codesign
```

## 📚 Documentation

- **Full Skill Definition**: `~/.config/opencode/skills/opencode-codesign/SKILL.md`
- **Usage Guide**: `~/.config/opencode/skills/opencode-codesign/README.md`
- **Source Project**: `/data/open-codesign-web/`

## 🎯 Next Steps

1. **Test the skill** with a simple design request
2. **Verify output** - Check that App.jsx and DESIGN.md are created
3. **Iterate** - Try different visual directions (minimal/bold/dense)
4. **Combine** - Use with web-artifacts-builder to create bundled artifacts

## 📊 Comparison with Existing Skills

| Feature | opencode-codesign | frontend-design | web-artifacts-builder |
|---------|-------------------|-----------------|----------------------|
| Design System Docs | ✅ DESIGN.md | ❌ | ❌ |
| Design Tokens | ✅ Documented | ⚠️ Inline | ⚠️ Inline |
| Visual Directions | ✅ 3 modes | ✅ Many modes | ❌ |
| Bundling | ❌ | ❌ | ✅ Single HTML |
| Methodology | ✅ Open CoDesign | ✅ Creative | ✅ Technical |

**Use opencode-codesign when**:
- You need a complete design system with documentation
- You want clear design rationale
- You need to iterate on designs with documented tokens
- You want production-ready, self-contained designs

**Use frontend-design when**:
- You want experimental/artistic designs
- You need maximum creative freedom
- Design documentation is not required

**Use web-artifacts-builder when**:
- You need a single HTML file artifact
- You're using shadcn/ui components
- You need complex state management

## 🎉 Ready to Use!

The skill is now installed and ready. Try it out:

```bash
opencode run "design a minimal landing page for a SaaS product using opencode-codesign"
```

Enjoy creating production-quality designs with documented design systems! 🚀
