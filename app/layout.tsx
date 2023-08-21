import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './Provider';
import AuthStatus from '@/components/AuthStatus';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthStatus>
            {children}
          </AuthStatus>
        </Providers>
      </body>
    </html>
  )
}
