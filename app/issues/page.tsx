"use client";
import { usePathname } from 'next/navigation'
import React from 'react'

const IssuesPage = () => {
    const pathroute = usePathname();
    console.log(pathroute);
  return (
    <div>
        
    </div>
  )
}

export default IssuesPage