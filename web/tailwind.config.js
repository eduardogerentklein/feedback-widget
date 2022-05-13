module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: '#18181B',
          secondary: '#27272A'
        },
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
}
