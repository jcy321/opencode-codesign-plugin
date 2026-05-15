function App() {
  const tokens = {
    colors: {
      primary: '#dc2626',
      primaryDark: '#b91c1c',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textMuted: '#94a3b8',
      border: '#334155',
      accent: '#f59e0b',
    },
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
      '4xl': '6rem',
    },
    radius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
    },
    shadows: {
      glow: '0 0 40px rgb(220 38 38 / 0.3)',
      lg: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
    },
  };

  const styles = {
    container: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: `0 ${tokens.spacing.xl}`,
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${tokens.spacing.xl} 0`,
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: tokens.colors.text,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    navCta: {
      padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
      backgroundColor: tokens.colors.primary,
      color: tokens.colors.text,
      border: 'none',
      borderRadius: tokens.radius.lg,
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: tokens.shadows.glow,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    hero: {
      padding: `${tokens.spacing['4xl']} 0`,
      textAlign: 'center',
      position: 'relative',
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: '900',
      color: tokens.colors.text,
      lineHeight: '1',
      letterSpacing: '-0.03em',
      marginBottom: tokens.spacing.xl,
      textTransform: 'uppercase',
    },
    heroAccent: {
      color: tokens.colors.primary,
      display: 'block',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      color: tokens.colors.textMuted,
      maxWidth: '56rem',
      margin: `0 auto ${tokens.spacing['3xl']}`,
      lineHeight: '1.5',
      fontWeight: '500',
    },
    ctaGroup: {
      display: 'flex',
      gap: tokens.spacing.lg,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    primaryCta: {
      padding: `${tokens.spacing.lg} ${tokens.spacing['2xl']}`,
      backgroundColor: tokens.colors.primary,
      color: tokens.colors.text,
      border: 'none',
      borderRadius: tokens.radius.xl,
      fontSize: '1.25rem',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: tokens.shadows.glow,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    secondaryCta: {
      padding: `${tokens.spacing.lg} ${tokens.spacing['2xl']}`,
      backgroundColor: 'transparent',
      color: tokens.colors.text,
      border: `2px solid ${tokens.colors.border}`,
      borderRadius: tokens.radius.xl,
      fontSize: '1.25rem',
      fontWeight: '700',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    heroVisual: {
      marginTop: tokens.spacing['4xl'],
      padding: tokens.spacing['2xl'],
      backgroundColor: tokens.colors.surface,
      borderRadius: tokens.radius['2xl'],
      border: `2px solid ${tokens.colors.border}`,
      boxShadow: tokens.shadows.lg,
      minHeight: '32rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    visualGlow: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: `radial-gradient(circle, ${tokens.colors.primary}22 0%, transparent 70%)`,
      pointerEvents: 'none',
    },
    visualPlaceholder: {
      color: tokens.colors.textMuted,
      fontSize: '1rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      zIndex: 1,
    },
    stats: {
      padding: `${tokens.spacing['3xl']} 0`,
      borderTop: `1px solid ${tokens.colors.border}`,
      borderBottom: `1px solid ${tokens.colors.border}`,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: tokens.spacing['2xl'],
    },
    statItem: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '900',
      color: tokens.colors.primary,
      lineHeight: '1',
      marginBottom: tokens.spacing.sm,
    },
    statLabel: {
      fontSize: '1rem',
      color: tokens.colors.textMuted,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: '600',
    },
    footer: {
      padding: `${tokens.spacing['3xl']} 0`,
      textAlign: 'center',
    },
    footerText: {
      color: tokens.colors.textMuted,
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  };

  return (
    <div style={{
      fontFamily: tokens.fonts.sans,
      backgroundColor: tokens.colors.background,
      minHeight: '100vh',
    }}>
      {/* Navigation */}
      <header>
        <div style={styles.container}>
          <nav style={styles.nav}>
            <div style={styles.logo}>Brand</div>
            <button style={styles.navCta}>Launch</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.heroTitle}>
              Make an
              <span style={styles.heroAccent}> Impact</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Bold, high-impact campaign page designed to capture attention and drive action.
              Built with the Open CoDesign methodology for maximum visual impact.
            </p>
            <div style={styles.ctaGroup}>
              <button style={styles.primaryCta}>Get Started</button>
              <button style={styles.secondaryCta}>Learn More</button>
            </div>
            <div style={styles.heroVisual}>
              <div style={styles.visualGlow}></div>
              <div style={styles.visualPlaceholder}>
                Your Bold Visual Here
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={styles.stats}>
          <div style={styles.container}>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>10K+</div>
                <div style={styles.statLabel}>Users</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>99%</div>
                <div style={styles.statLabel}>Satisfaction</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>24/7</div>
                <div style={styles.statLabel}>Support</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Countries</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>
            © 2026 Brand. Built with Open CoDesign.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
