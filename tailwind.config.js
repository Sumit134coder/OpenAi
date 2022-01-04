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
        light: '#f5f5f4',
      },
      transitionProperty: {
        width: 'width',
        padding: 'padding',
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
