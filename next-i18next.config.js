const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },
  localePath: path.resolve('public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}
