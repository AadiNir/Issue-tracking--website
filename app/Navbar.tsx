import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex space-x-6 border-b mb-5 h-16 items-center justify-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            <li><Link className='text-zinc-500 hover:text-zinc-800' href='/'>DashBoard</Link></li>
            <li><Link href='/issues'>Is sues</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar