import './App.css'
import { useAuth } from 'context/auth-context'
import { Authenticated } from 'authenticated'
import { Unauthenticated } from 'unauthenticated'
import { ErrorBoundary } from 'components/errorBoundary'
import { FullPageErrorFallback } from 'components/lib'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}></ErrorBoundary>
      {user ? <Authenticated /> : <Unauthenticated />}{' '}
    </div>
  )
}

export default App
