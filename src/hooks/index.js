import React from 'react'

import PropTypes from 'prop-types'

import { HomeProvider } from './HomeContext'

const AppProvider = ({ children }) => <HomeProvider>{children}</HomeProvider>

AppProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProvider
