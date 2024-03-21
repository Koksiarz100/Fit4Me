'use client'

import React, { useState } from 'react'

import './login.scss'

function loginForm() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (login === 'admin' || password === 'admin'){
      sessionStorage.setItem('token', JSON.stringify('token'))
      console.log('Logged in!')
    }
    else {
      console.log('Wrong credentials!')
    }
  }

  return (
    <>
      Login
      <form onSubmit={handleSubmit}>
        <input type='text' value={login} onChange={e => setLogin(e.target.value)} />
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default function Login() {

  function LoginScreen() {
    return (
      <div className='login-wrapper'>
        {loginForm()}
      </div>
    )
  }

  return (
    <LoginScreen />
  )
}