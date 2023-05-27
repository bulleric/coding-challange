import '@styles/globals.css';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hostshare',
  description: 'Affordable adventures at your fingertips - Handle the cleaning fee and let your journey unfold',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <h1> Hostshare </h1>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
