import { Inter } from 'next/font/google'

import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/global.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const interFontFamily = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className='container'>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
