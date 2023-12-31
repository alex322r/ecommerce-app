import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import HeaderPage from './components/HeaderPage'


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


      </body>

    </html>
  )
}
