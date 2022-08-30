module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // corePlugins: {
  //   preflight: false, // 禁用Preflight
  // },
  theme: {
    extend: {},
    fontFamily: {
      body: [
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'PingFang SC',
        'Microsoft YaHei',
        'Tahoma',
      ],
      inherit: ['inherit'],
      typography: [
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'PingFang SC',
        'Microsoft YaHei',
        'Tahoma',
      ],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#EA4C60',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#EA4C60',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#EA4C60',
    }),
  },
  // variants: {
  //   extend: {
  //     margin: ['first'],
  //   },
  // },
  plugins: [],
}
