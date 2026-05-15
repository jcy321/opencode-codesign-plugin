function App() {
  const tokens = {
    colors: {
      primary: '#2563eb',
      primaryDark: '#1d4ed8',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#0f172a',
      textMuted: '#64748b',
      border: '#e2e8f0',
    },
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    radius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
  };

  const styles = {
    container: {
      maxWidth: '72rem',
      margin: '0 auto',
      padding: `0 ${tokens.spacing.xl}`,
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${tokens.spacing.lg} 0`,
      borderBottom: `1px solid ${tokens.colors.border}`,
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: tokens.colors.text,
    },
    navLinks: {
      display: 'flex',
      gap: tokens.spacing.xl,
      alignItems: 'center',
    },
    navLink: {
      color: tokens.colors.textMuted,
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    hero: {
      padding: `${tokens.spacing['3xl']} 0`,
      textAlign: 'center',
    },
    badge: {
      display: 'inline-block',
      padding: `${tokens.spacing.xs} ${tokens.spacing.md}`,
      backgroundColor: tokens.colors.surface,
      color: tokens.colors.primary,
      fontSize: '0.875rem',
      fontWeight: '600',
      borderRadius: tokens.radius.full,
      marginBottom: tokens.spacing.lg,
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      color: tokens.colors.text,
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
      marginBottom: tokens.spacing.lg,
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: tokens.colors.textMuted,
      maxWidth: '48rem',
      margin: `0 auto ${tokens.spacing['2xl']}`,
      lineHeight: '1.6',
    },
    ctaGroup: {
      display: 'flex',
      gap: tokens.spacing.md,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    primaryButton: {
      padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
      backgroundColor: tokens.colors.primary,
      color: '#ffffff',
      border: 'none',
      borderRadius: tokens.radius.lg,
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: tokens.shadows.md,
      transition: 'all 0.2s',
    },
    secondaryButton: {
      padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
      backgroundColor: 'transparent',
      color: tokens.colors.text,
      border: `1px solid ${tokens.colors.border}`,
      borderRadius: tokens.radius.lg,
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    heroVisual: {
      marginTop: tokens.spacing['3xl'],
      padding: tokens.spacing.xl,
      backgroundColor: tokens.colors.surface,
      borderRadius: tokens.radius.xl,
      border: `1px solid ${tokens.colors.border}`,
      boxShadow: tokens.shadows.lg,
      minHeight: '24rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    visualPlaceholder: {
      color: tokens.colors.textMuted,
      fontSize: '0.875rem',
    },
    features: {
      padding: `${tokens.spacing['3xl']} 0`,
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: tokens.spacing.xl,
      marginTop: tokens.spacing['2xl'],
    },
    featureCard: {
      padding: tokens.spacing.xl,
      backgroundColor: tokens.colors.surface,
      border: `1px solid ${tokens.colors.border}`,
      borderRadius: tokens.radius.lg,
    },
    featureTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: tokens.colors.text,
      marginBottom: tokens.spacing.sm,
    },
    featureDescription: {
      color: tokens.colors.textMuted,
      lineHeight: '1.6',
    },
    footer: {
      padding: `${tokens.spacing['2xl']} 0`,
      borderTop: `1px solid ${tokens.colors.border}`,
      textAlign: 'center',
    },
    footerText: {
      color: tokens.colors.textMuted,
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={{ fontFamily: tokens.fonts.sans, backgroundColor: tokens.colors.background }}>
      {/* Navigation */}
      <header>
        <div style={styles.container}>
          <nav style={styles.nav}>
            <div style={styles.logo}>YourBrand</div>
            <div style={styles.navLinks}>
              <a href="#features" style={styles.navLink}>Features</a>
              <a href="#pricing" style={styles.navLink}>Pricing</a>
              <a href="#about" style={styles.navLink}>About</a>
              <button style={styles.primaryButton}>Get Started</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section style={styles.hero}>
          <div style={styles.container}>
            <span style={styles.badge}>✨ New Release</span>
            <h1 style={styles.heroTitle}>
              Build beautiful products faster
            </h1>
            <p style={styles.heroSubtitle}>
              A minimal, professional landing page template designed with the Open CoDesign methodology.
              Clean, accessible, and production-ready.
            </p>
            <div style={styles.ctaGroup}>
              <button style={styles.primaryButton}>Start Building</button>
              <button style={styles.secondaryButton}>View Demo</button>
            </div>
            <div style={styles.heroVisual}>
              <div style={styles.visualPlaceholder}>
                [Your product screenshot or visual goes here]
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={styles.features}>
          <div style={styles.container}>
            <h2 style={{ ...styles.heroTitle, fontSize: '2rem', marginBottom: 0 }}>
              Everything you need
            </h2>
            <div style={styles.featuresGrid}>
              <div style={styles.featureCard}>
                <h3 style={styles.featureTitle}>Design Tokens</h3>
                <p style={styles.featureDescription}>
                  Consistent design system with documented tokens for colors, typography, spacing, and more.
                </p>
              </div>
              <div style={styles.featureCard}>
                <h3 style={styles.featureTitle}>Responsive</h3>
                <p style={styles.featureDescription}>
                  Fluid typography and flexible layouts that work beautifully on all screen sizes.
                </p>
              </div>
              <div style={styles.featureCard}>
                <h3 style={styles.featureTitle}>Accessible</h3>
                <p style={styles.featureDescription}>
                  Semantic HTML, proper contrast ratios, and keyboard navigation built in from the start.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>
            © 2026 YourBrand. Built with Open CoDesign.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
