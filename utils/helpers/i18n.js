/**
 * Return the direction of the layout based on the active locale
 *
 * @param {String} locale - Active locale
 * @return {String} Layout direction
 */
export const getLocaleDirection = (locale) => {
  return ['ar', 'az', 'dv', 'he', 'ku', 'fa', 'ur'].includes(locale)
    ? 'rtl'
    : 'ltr'
}
