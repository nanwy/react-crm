import { useState } from 'react'
import LoginScreen from './login'
import RegisterScreen from './register'

export const Unauthenticated = () => {
  const [isRegister, setIsRegister] = useState(false)
  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>{isRegister ? '登录' : '注册'}</button>
    </div>
  )
}
