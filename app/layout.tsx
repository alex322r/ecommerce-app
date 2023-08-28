import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import HeaderPage from './components/HeaderPage'
import Footer from './components/Footer'
import useLoginModal from './hooks/useLoginModal'
import LoginModalOverlay from './components/LoginModalOverlay'
const lato = Lato({ subsets: ["latin"], style: 'normal', weight: ['100', '300', '400', '700', '900'] })

export const metadata: Metadata = {
  title: 'Ecommerce.com',
  description: 'My ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {





  return (
    <html lang="en">
      <body className={lato.className}>
        <HeaderPage />
        {children}
        <Footer />

      </body>

    </html>
  )
}
