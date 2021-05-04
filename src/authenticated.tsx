import { useAuth } from 'context/auth-context'

export const Authenticated = () => {
  const { logout } = useAuth()
  return (
    <div>
      <button onClick={logout}>登出</button>
      列表
    </div>
  )
}
