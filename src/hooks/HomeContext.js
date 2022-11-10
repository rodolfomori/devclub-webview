import React, { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const HomeContext = createContext({})

export const HomeProvider = ({ children }) => {
  const [iFrame, setIframe] = useState(0)
  const [iFrameKey, setIFrameKey] = useState(0)
  const [loading, setLoading] = useState(true)

  function changeIframe(iframe) {
    if (iframe !== iFrame) {
      setIframe(iframe)
    }
    setIFrameKey(iFrameKey + 1)
    if (iframe === 1 || iframe === 2) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }

  return (
    <HomeContext.Provider
      value={{
        setIframe,
        iFrame,
        loading,
        setLoading,
        changeIframe,
        iFrameKey,
      }}
    >
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
  children: PropTypes.node,
}
