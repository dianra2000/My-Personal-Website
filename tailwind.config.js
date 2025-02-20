module.exports = {
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        typing: 'typing 5s steps(10) infinite',
      },
    },
  },
  plugins: [],
};
