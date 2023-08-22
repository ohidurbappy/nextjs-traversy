import Header from './components/Header'
import './globals.css'
import { Inter,Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ["400", "700"],
  subsets:['latin']
})

export const metadata = {
  title: 'Bappy Tech Tips',
  description: 'web development tips and tricks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='container'>
          <Header />
          {children}
        </main>
        </body>
    </html>
  )
}
