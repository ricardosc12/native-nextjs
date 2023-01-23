"use client"

import './styles/globals.css'
import Link from 'next/link'
import { useState } from 'react'

export default function RootLayout({ children }) {

  	const [text, setText] = useState('')

	return (
		<html lang="en">
		<head />
		<body>
			<nav>
			<ul>
				<li>
				<Link href="/">Home</Link>
				</li>
				<li>
				<Link href="/about">Dashboard</Link>
				</li>
			</ul>
			</nav>
			<input value={text} onInput={(e)=>setText(e.target.value)} />
			{children}
		</body>
		</html>
	)
}
