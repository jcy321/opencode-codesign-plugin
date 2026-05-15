# OpenCode CoDesign Skill

An autonomous design partner skill for OpenCode that creates production-quality web artifacts with complete design systems. Based on [Open CoDesign](https://github.com/badlogic/open-codesign) methodology.

## Features

✅ **Complete Design Systems** - Generates App.jsx + DESIGN.md with documented design tokens  
✅ **Production Quality** - Real hierarchy, considered color, meaningful space  
✅ **Design Methodology** - Three visual directions: Minimal/Editorial, Bold/Campaign, Dense/Professional  
✅ **Self-Contained** - No external dependencies, inline assets, real content  
✅ **Accessible** - Semantic HTML, focus states, responsive behavior  
✅ **Documented** - Clear design rationale and token documentation  

## Installation

### Method 1: Install from Local Directory

```bash
# From the opencode-codesign-skill directory
cd /data/open-codesign-web/opencode-codesign-skill

# Create symlink in OpenCode skills directory
mkdir -p ~/.config/opencode/skills
ln -s "$(pwd)" ~/.config/opencode/skills/opencode-codesign

# Verify installation
ls -la ~/.config/opencode/skills/opencode-codesign
```

### Method 2: Copy Files

```bash
# Create directory
mkdir -p ~/.config/opencode/skills/opencode-codesign

# Copy skill files
cp /data/open-codesign-web/opencode-codesign-skill/SKILL.md ~/.config/opencode/skills/opencode-codesign/
cp /data/open-codesign-web/opencode-codesign-skill/LICENSE.txt ~/.config/opencode/skills/opencode-codesign/

# Verify
cat ~/.config/opencode/skills/opencode-codesign/SKILL.md
```

## Usage

In OpenCode, invoke the skill with a design request:

```
design a minimal landing page for a SaaS product using opencode-codesign
```

Or:

```
create a dashboard with metrics and charts using opencode-codesign
```

The skill will:
1. Understand your requirements
2. Choose a visual direction (Minimal/Bold/Dense)
3. Create `App.jsx` with design tokens
4. Implement the complete design
5. Document the design system in `DESIGN.md`
6. Self-check for completeness

## Output Structure

```
your-project/
├── App.jsx           # Main design source (JSX with ReactDOM.createRoot)
├── DESIGN.md         # Design system documentation
└── assets/           # Local assets (if needed)
    ├── icon.svg
    └── pattern.svg
```

### App.jsx Example

```jsx
function App() {
  const tokens = {
    colors: {
      background: '#ffffff',
      surface: '#f8f9fa',
      text: '#1a1a1a',
      primary: '#0066cc',
    },
    fonts: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    spacing: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
    },
    radius: {
      md: '0.5rem',
    },
  };

  return (
    <div style={{
      fontFamily: tokens.fonts.sans,
      color: tokens.colors.text,
      backgroundColor: tokens.colors.background,
      minHeight: '100vh',
    }}>
      {/* Your design here */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

### DESIGN.md Example

```markdown
# Design System

## Visual Direction
Minimal/editorial — Clean, calm, focused on content

## Color Palette
- **Background**: `#ffffff` — Main background
- **Surface**: `#f8f9fa` — Card backgrounds
- **Text**: `#1a1a1a` — Primary text
- **Primary**: `#0066cc` — Primary actions

## Typography
- **Headings**: System font stack, bold
- **Body**: 1rem (16px), regular

## Spacing Scale
- Base unit: 0.25rem (4px)
- Common: 1rem, 1.5rem, 2rem, 3rem

## Design Rationale
Chose minimal direction to emphasize content clarity...
```

## Design Methodology

### Visual Directions

The skill chooses ONE direction based on context:

| Direction | Use When | Characteristics |
|-----------|----------|-----------------|
| **Minimal/Editorial** | Consumer, portfolio, calm product pages | Clean, generous whitespace, refined typography |
| **Bold/Campaign** | Launches, marketing, visual impact | Strong colors, dramatic typography, high contrast |
| **Dense/Professional** | B2B SaaS, dashboards, tools | Information-rich, efficient layouts, clear hierarchy |

### Design Principles

1. **Start from context** - Not from blank templates
2. **Commit to a direction** - No blending styles
3. **Use fewer, stronger tokens** - Consistent design language
4. **Real content only** - No lorem ipsum or placeholders
5. **Self-contained** - No external dependencies
6. **Accessible by default** - Semantic HTML, focus states
7. **Document decisions** - Clear design rationale

## What Makes This Different

Compared to generic AI design tools:

✅ **Complete design systems** - Not just UI, but documented tokens and rationale  
✅ **Contextual direction** - Chooses appropriate aesthetic based on use case  
✅ **Production-ready** - Self-contained, accessible, responsive  
✅ **No AI slop** - Avoids generic aesthetics (Inter font, purple gradients, centered layouts)  
✅ **Real content** - Domain-specific, no placeholders  
✅ **Documented** - DESIGN.md explains the "why" behind choices  

## Examples

### Example 1: SaaS Landing Page

```
design a minimal landing page for a project management SaaS using opencode-codesign
```

Output:
- Clean, editorial aesthetic
- Hero section with clear value proposition
- Feature cards with icons
- Pricing section
- Footer with links
- DESIGN.md with minimal color palette

### Example 2: Analytics Dashboard

```
create a dashboard for analytics with charts and metrics using opencode-codesign
```

Output:
- Dense/professional aesthetic
- Metric cards with numbers
- Chart placeholders (or inline SVG charts)
- Data table
- Sidebar navigation
- DESIGN.md with functional color system

### Example 3: Marketing Campaign

```
design a bold landing page for a product launch using opencode-codesign
```

Output:
- Bold/campaign aesthetic
- Dramatic hero with large typography
- High contrast colors
- Strong call-to-action
- Visual impact elements
- DESIGN.md with bold color palette

## Limitations

This skill creates **design source files** (App.jsx + DESIGN.md), not:
- ❌ Bundled HTML artifacts (use `web-artifacts-builder` for that)
- ❌ React component libraries (use for single artifacts)
- ❌ Backend code or APIs
- ❌ Image generation (uses inline SVG/CSS instead)

## Combining with Other Skills

This skill works well with:
- **web-artifacts-builder** - Bundle the App.jsx into a single HTML artifact
- **frontend-design** - For more experimental/artistic designs
- **theme-factory** - For creating reusable theme systems

## Troubleshooting

### Skill not found

```bash
# Verify installation
ls -la ~/.config/opencode/skills/opencode-codesign/

# Check SKILL.md exists
cat ~/.config/opencode/skills/opencode-codesign/SKILL.md
```

### Skill not loading

```bash
# Restart OpenCode
# The skill should be auto-detected on next launch
```

### Wrong output format

Make sure to mention the skill name in your request:
```
design a landing page using opencode-codesign
```

## Development

Based on Open CoDesign v0.2 methodology:
- Prompt system from `packages/core/src/prompts/sections/`
- Design workflow from `workflow.md`
- Design methodology from `design-methodology.md`
- Output rules from `output-rules.md`

## License

MIT License - see LICENSE.txt

## Credits

Based on [Open CoDesign](https://github.com/badlogic/open-codesign) by Mario Zechner and contributors.

Adapted for OpenCode by the Open CoDesign community.

## Contributing

To improve this skill:
1. Edit `SKILL.md`
2. Test in OpenCode
3. Submit improvements back to the Open CoDesign project

## Links

- Open CoDesign: https://github.com/badlogic/open-codesign
- OpenCode: https://www.npmjs.com/package/opencode-ai
- Documentation: See SKILL.md for complete usage guide
