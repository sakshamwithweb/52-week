import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <header className='h-[10vh] border border-b'>
        <nav className='flex justify-between items-center h-[100%] px-12'>
            <h2 className='text-2xl italic font-serif font-bold'>52 week - 52 stuff</h2>
            <ul>
                <li><ModeToggle/></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar