module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'bg-pattern': "url('./src/images/bg-pattern-desktop.svg')",
      'arrow': "url('./src/images/icon-arrow.svg')",
      'arrow-error': "url('./src/images/icon-error.svg')",
      'logo': "url('./src/images/logo.svg')",
      'avatar-mobile': "url('./src/images/avatar-mobile.svg')",
    },
  },
  plugins: [],
}
