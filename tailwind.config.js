/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',      // dark slate
        accent: '#38BDF8',       // sky blue
        textLight: '#F8FAFC',    // light white
        textMuted: '#94A3B8',    // muted grey
        highlight: '#22D3EE',    // cyan
      },
      fontFamily: {
        heading: ['Poppins', 'Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 10s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 211, 238, 0.3)',
        'card': '0 8px 32px rgba(15, 23, 42, 0.2)',
        'card-hover': '0 16px 48px rgba(15, 23, 42, 0.4)',
      },
    },
  },
  plugins: [],
}
