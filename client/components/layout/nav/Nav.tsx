'use client'

import React from 'react'
import Link from 'next/link'

import './nav.scss'

export default function Nav() {
  return (
    <div className='nav-wrapper'>
      <Link href='/'>Fit4Me</Link>
      <Link href='/profile'>Profile</Link>
    </div>
  )
}