import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { IntlProvider } from 'react-intl'

import { LanguageSelectors } from '../../store/redux/language'

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

const mapStateToProps = createStructuredSelector({
  locale: LanguageSelectors.makeSelectLocal(),
})

export default connect(mapStateToProps)(LanguageProvider)
