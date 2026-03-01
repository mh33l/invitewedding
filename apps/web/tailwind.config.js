/**
 * Tailwind CSS Configuration File
 */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "wedding-pink": "#FFB6C1",
        "wedding-blue": "#A4C8E1",
        "wedding-gold": "#FFD700",
        "wedding-lavender": "#E6E6FA",
      },
      animation: {
        'bounce-3d': 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};