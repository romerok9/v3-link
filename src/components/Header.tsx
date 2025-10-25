'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Empresa', href: '/empresa' },
  { name: 'Cloud', href: '/cloud' },
  { name: 'Software', href: '/software' },
  { name: 'Capacitaciones', href: '/capacitacion' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-primary'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <Image
              src="/images/logo-linkit.png"
              alt="Link IT Solutions"
              width={160}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                      : isActive
                        ? 'text-secondary bg-white/20'
                        : 'text-white hover:text-secondary hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-50 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-lg font-medium text-lg transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

