'use client'

import React, { useState } from 'react';

import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import Main from './components/main/Main';

import './styles/globals.scss';
import './styles/page.scss';

export default function Home() {
  const [screen, setScreen] = useState('main');

  return (
    <main className='app-wrapper'>
      <h1>Fit4Me</h1>
      <div className='app-nav'>
        <button onClick={() => setScreen('main')}>Strona główna</button>
        <button onClick={() => setScreen('login')}>Logowanie</button>
        <button onClick={() => setScreen('register')}>Rejestracja</button>
      </div>
      <div className='app-screen'>
        {screen === 'login' ? <Login /> : screen === 'register' ? <Register /> : <Main />}
      </div>
    </main>
  );
}