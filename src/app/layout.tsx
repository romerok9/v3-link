import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://linkit.ar'),
  title: {
    default: 'Link IT Solutions | Soluciones Informáticas Empresariales',
    template: '%s | Link IT Solutions'
  },
  description: 'Empresa líder en servicios cloud computing (AWS, Azure, GCP), desarrollo de software a medida y capacitaciones tecnológicas. Transformamos su negocio con soluciones IT de alto impacto.',
  keywords: ['Cloud Computing', 'AWS', 'Azure', 'GCP', 'Software a Medida', 'Desarrollo Web', 'Capacitaciones IT', 'Infraestructura Cloud', 'DevOps', 'Consultoría Tecnológica'],
  authors: [{ name: 'Link IT Solutions' }],
  creator: 'Link IT Solutions',
  publisher: 'Link IT Solutions',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://linkit.ar',
    siteName: 'Link IT Solutions',
    title: 'Link IT Solutions | Expertos en Soluciones Empresariales',
    description: 'Líder en servicios cloud, desarrollo de software y capacitaciones tecnológicas.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Link IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link IT Solutions | Soluciones Informáticas Empresariales',
    description: 'Expertos en cloud computing, software a medida y capacitaciones IT.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

