import React, { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const HomeContext = createContext({})

export const HomeProvider = ({ children }) => {
  const [iFrame, setIframe] = useState(0)
  const [loading, setLoading] = useState(true)

  return (
    <HomeContext.Provider value={{ setIframe, iFrame, loading, setLoading}}>
      {children}
    </HomeContext.Provider>
  )
}

export const useHome = () => {
  const context = useContext(HomeContext)

  if (!context) {
    throw new Error('useHome must be used with HomeContext')
  }

  return context
}

HomeProvider.propTypes = {
  children: PropTypes.node
}
