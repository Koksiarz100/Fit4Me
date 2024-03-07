'use client'

import React, { useState } from 'react'

import './profile.scss'

export default function Profile() {
  const [user, setUser] = useState({ login: 'test', password: 'test'})
  const [user_data, setUser_data] = useState({first_name: 'test', last_name: 'test', email: 'test@gmail.com'})

  return (
    <div className='profile-wrapper'>
      <div className='profile-info'>
        <span className='profile-title'>Profile:</span>
        <div className='profile-data'>
          <div className='profile-data-left'>
            <p>First name: {user_data.first_name}</p>
            <p>Last name: {user_data.last_name}</p>
            <p>Email: {user_data.email}</p>
          </div>
          <div className='profile-data-right'>
            <button>Change</button>
            <button>Change</button>
            <button>Change</button>
          </div>
        </div>
        <div className='profile-data'>
          <div className='profile-data-left'>
            <p>Login: {user.login}</p>
            <p>Password: {user.password}</p>
          </div>
          <div className='profile-data-right'>
            <button>Change</button>
            <button>Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}