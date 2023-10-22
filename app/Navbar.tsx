"use client";
import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathroute = usePathname();
  return (

    <nav className='flex space-x-6 border-b mb-5 h-16 items-center justify-center border-black'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            <li><Link className={`${'/'===pathroute ? 'text-black':'text-zinc-500'}  hover:text-zinc-800`} href='/'>DashBoard</Link></li>
            <li><Link  className={`${'/issues'===pathroute?' text-black' : 'text-zinc-500'} text-zinc-500 hover:text-zinc-800`} href='/issues'>Issues</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar