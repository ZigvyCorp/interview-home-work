import { createSelector } from 'reselect'

import { defaultLocale } from '../../i18n'
import createReducer from '../../utils/createReducer'

const scope = 'test/language'

const Types = {
  CHANGE_LOCALE: `${scope}/CHANGE_LOCALE`,
}

export const LanguageTypes = Types

export const LanguageActions = {
  changeLocale: locale => ({ type: Types.CHANGE_LOCALE, locale }),
}

const initialState = {
  locale: defaultLocale,
}

export const LanguageReducer = createReducer(initialState, {
  [Types.CHANGE_LOCALE]: (draft, { locale }) => {
    draft.locale = locale
  },
})

export const LanguageSelectors = {
  selectLanguage: state => state.language || initialState,
  makeSelectLocal() {
    return createSelector(this.selectLanguage, languageState => languageState.locale || defaultLocale)
  },
}
