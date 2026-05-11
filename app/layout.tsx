import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ayan | Frontend Developer & React Engineer',
  description: 'Diploma Computer Science student passionate about building scalable, interactive, high-performance modern web applications with React and JavaScript.',
  keywords: ['Frontend Developer', 'React Developer', 'JavaScript', 'UI/UX', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Ayan' }],
  creator: 'Ayan',
  openGraph: {
    type: 'website',
    title: 'Ayan | Frontend Developer & React Engineer',
    description: 'Building scalable, interactive, high-performance modern web applications',
    siteName: 'Ayan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayan | Frontend Developer & React Engineer',
    description: 'Building scalable, interactive, high-performance modern web applications',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a0a2e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
