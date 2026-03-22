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
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sujan Shrestha | Full-Stack Developer & Creative Technologist',
  description: 'Award-winning developer portfolio showcasing immersive digital experiences, interactive web applications, and cutting-edge 3D visualizations.',
  keywords: ['developer', 'portfolio', 'full-stack', 'React', 'Next.js', 'Three.js', 'creative technologist'],
  authors: [{ name: 'Sujan Shrestha' }],
  creator: 'Sujan Shrestha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sujan Shrestha | Full-Stack Developer & Creative Technologist',
    description: 'Award-winning developer portfolio showcasing immersive digital experiences.',
    siteName: 'Sujan Shrestha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sujan Shrestha | Full-Stack Developer & Creative Technologist',
    description: 'Award-winning developer portfolio showcasing immersive digital experiences.',
    creator: '@sujanshrestha',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
