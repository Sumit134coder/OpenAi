module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#a78bfa', // light (input focus borders)
          500: '#8b5cf6', // normal
          600: '#7c3aed', // dark
        },
        secondary: {
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
        },
        danger: {
          500: '#ef4444',
        },
        light: {
          400: '#f3f4f6', // hover color of items
          500: '#f8f8f8', // all pages background
        },
        error: {
          500: '#ef4444',
        },
      },
      dropShadow: {
        card: '0px 6px 14px rgba(0, 0, 0, 0.06)',
        tab: '8px 4px 9px rgba(163, 171, 185, 0.24)',
      },
      transitionProperty: {
        width: 'width',
        padding: 'padding',
      },
      fontSize: {
        sm: ['12.8px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
