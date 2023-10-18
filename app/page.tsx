"use-client";
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href='/users'>route to use</Link>
      <h1>{new Date().toLocaleString()}</h1>
    </main>
  )
}
