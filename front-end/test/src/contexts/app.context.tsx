import { createContext, useState } from 'react'

interface AppContextInterface {
  reset: () => void
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  reset: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const reset = () => {}

  return (
    <AppContext.Provider
      value={{
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
