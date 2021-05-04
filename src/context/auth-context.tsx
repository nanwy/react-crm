import React, { ReactNode, useState } from 'react'
import * as auth from 'auth-provider'

interface AuthForm {
  username: string
  password: string
}

const AuthContext = React.createContext<
  | {
      user: auth.User | null
      register: (form: AuthForm) => Promise<void>
      login: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
  | undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<auth.User | null>(null)

  const login = (form: AuthForm) => auth.login(form).then((user) => setUser(user))
  const register = (form: AuthForm) => auth.register(form).then((user) => setUser(user))
  const logout = () => auth.logout().then(() => setUser(null))

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('userAut必须在context中使用')
  }
  return context
}
