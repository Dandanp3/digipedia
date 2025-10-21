
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { DigimonProvider } from '../contexts/DigimonContext'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Digidex',
  description: 'Enciclopédia de Digimons criada por Daniel',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className="font-sans antialiased">
        <ThemeProvider>
        <DigimonProvider> 
          {children}
          <Analytics />
        </DigimonProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
