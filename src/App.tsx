import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginScreen from './view/login'
import { useAuth } from 'context/auth-context'
import { Authenticated } from 'authenticated'
import { Unauthenticated } from 'unauthenticated'

function App() {
  const { user } = useAuth()
  return <div className="App">{user ? <Authenticated /> : <Unauthenticated />}</div>
}

export default App
