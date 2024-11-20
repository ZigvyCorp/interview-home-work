import { createContext, ReactNode, useState, Dispatch } from 'react'

import { User } from '~/types/users.type'
import { getProfileFromLS, getAccessTokenFromLS } from '~/utils/storage'

interface AppContextProps {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: Dispatch<React.SetStateAction<User | null>>
  resetAuth: () => void
}

const initialContext: AppContextProps = {
  isAuthenticated: !!getAccessTokenFromLS(),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  resetAuth: () => null
}

export const AppContext = createContext<AppContextProps>(initialContext)

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialContext.profile)

  const resetAuth = () => {
    setIsAuthenticated(false)
    setProfile(null)
  }

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        resetAuth
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
