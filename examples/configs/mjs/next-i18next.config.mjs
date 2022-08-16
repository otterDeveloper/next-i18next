const i18n = {
  // https://www.i18next.com/overview/configuration-options#logging
  // eslint-disable-next-line no-undef
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  // eslint-disable-next-line no-undef
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
export default i18n
