module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        secondary: {
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
        },
        'extra-light': '#f6f6f6',
        light: '#f5f5f9',
        dark: '#4338ca',
      },
      transitionProperty: {
        width: 'width',
        padding: 'padding',
      },
      dropShadow: {
        card: '0px 6px 14px rgba(0, 0, 0, 0.06)',
      },
      fontSize: {
        sm: ['14px', '20px'],
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
