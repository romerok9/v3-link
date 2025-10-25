'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTelegram, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Dirección',
    content: 'Juan Domingo Perón 2239, Quilmes - Argentina',
    link: 'https://maps.google.com/?q=Juan+Domingo+Perón+2239,+Quilmes'
  },
  {
    icon: FaPhone,
    title: 'Teléfono',
    content: '(+54) 11 2779-2465',
    link: 'tel:+541127792465'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'romerok9@gmail.com',
    link: 'mailto:romerok9@gmail.com'
  }
]

const services = [
  'Cloud Computing (AWS, Azure, GCP)',
  'Software a Medida',
  'Capacitación Tecnológica',
  'Consultoría IT',
  'DevOps y CI/CD',
  'Otro'
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Conversemos
              <span className="block text-secondary mt-2">Sobre Su Proyecto</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Estamos listos para transformar sus desafíos en soluciones tecnológicas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Información de Contacto
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nuestro equipo está disponible para atender sus consultas. Complete el formulario o contáctenos directamente a través de los siguientes medios.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social Media */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Síguenos en Redes Sociales
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/romerok9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://t.me/Romerok9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-primary/10 to-primary-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-gray-600">
                    Quilmes, Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Solicitar Consultoría
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-gray-600">
                      Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="juan@empresa.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+54 11 1234-5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Nombre de su empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Servicio de Interés *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Seleccione un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Cuéntenos sobre su proyecto o necesidad..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Enviar Mensaje
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      * Campos obligatorios
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Prefiere una Llamada?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende una videollamada con nuestro equipo para discutir su proyecto en detalle
          </p>
          <a 
            href="tel:+541127792465"
            className="btn-secondary inline-flex items-center gap-3"
          >
            <FaPhone />
            Llamar Ahora
          </a>
        </div>
      </section>
    </>
  )
}

