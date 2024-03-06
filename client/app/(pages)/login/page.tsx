'use client'

import React, { useState } from 'react'

import './login.scss'

export default function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(login, password)
  }

  function LoginScreen() {
    return (
      <div className='login-wrapper'>
        Login
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Login' value={login} onChange={(e) => setLogin(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }

  return (
    <LoginScreen />
  )
}