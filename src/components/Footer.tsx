'use client'

import Link from 'next/link'
import { FaLinkedin, FaTelegram, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/romerok9/', label: 'LinkedIn' },
  { icon: FaTelegram, href: 'https://t.me/Romerok9', label: 'Telegram' },
  { icon: FaFacebook, href: 'https://fb.me/Link.ITBA', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/kevs.romero/', label: 'Instagram' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-light to-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-3 text-gray-100">
              Reciba las últimas novedades sobre Link IT y el mercado tecnológico.
            </p>
            <p className="mb-4 text-sm text-gray-200">
              Ingrese su email para mantenerse informado:
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Su email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-secondary hover:bg-secondary-hover text-gray-900 font-semibold rounded-lg transition-colors duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-100">
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="flex-shrink-0" />
                <span>Juan Domingo Perón 2239, Quilmes - Argentina</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhone className="flex-shrink-0" />
                <a href="tel:+541127792465" className="hover:text-secondary transition-colors">
                  (+54) 11 2779-2465
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope className="flex-shrink-0" />
                <a 
                  href="mailto:romerok9@gmail.com?subject=Consulta desde sitio web"
                  className="hover:text-secondary transition-colors"
                >
                  romerok9@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">¡Síguenos!</h3>
            <p className="mb-4 text-gray-100">Conéctate con nosotros en redes sociales</p>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-secondary hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-100">
            &copy; {currentYear} <strong>Link IT Solutions</strong> | Todos los derechos reservados
          </p>
          <p className="mt-2 text-sm text-gray-200">
            Innovando desde 2021 | Soluciones tecnológicas de clase mundial
          </p>
        </div>
      </div>
    </footer>
  )
}

