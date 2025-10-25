import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaRocket, FaShieldAlt, FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Empresa | Sobre Nosotros',
  description: 'Conozca Link IT Solutions: empresa líder en transformación digital con enfoque en innovación, calidad y resultados medibles. Descubra nuestra misión, visión y valores.',
}

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovación',
    description: 'Implementamos las tecnologías más avanzadas del mercado para mantener a nuestros clientes a la vanguardia.'
  },
  {
    icon: FaShieldAlt,
    title: 'Calidad',
    description: 'Cumplimos con los más altos estándares internacionales en cada proyecto que ejecutamos.'
  },
  {
    icon: FaHandshake,
    title: 'Compromiso',
    description: 'Nos dedicamos al éxito de nuestros clientes como si fuera el nuestro propio.'
  },
  {
    icon: FaChartLine,
    title: 'Resultados',
    description: 'Generamos valor tangible y retorno de inversión demostrable en cada implementación.'
  }
]

const pillars = [
  {
    title: 'Infraestructura Cloud',
    description: 'Nuestro expertise en tecnologías cloud (AWS, Azure, GCP) garantiza la escalabilidad óptima de los sistemas, asegurando integración rápida y continua.',
    icon: '☁️'
  },
  {
    title: 'Soluciones Llave en Mano',
    description: 'Entregamos productos de alta calidad con desarrollo ágil, desde la concepción hasta la implementación completa.',
    icon: '🔑'
  },
  {
    title: 'Transferencia de Conocimiento',
    description: 'Nuestros profesionales certificados están siempre disponibles para capacitar y empoderar a sus equipos.',
    icon: '🎓'
  }
]

export default function EmpresaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Una Empresa Para Resolver
              <span className="block text-secondary mt-2">Sus Desafíos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Partner estratégico en transformación digital para PyMEs y empresas en crecimiento
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/icono-linkit.png"
                alt="Link IT Solutions"
                fill
                className="object-contain p-8"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary mb-6">Nuestra Historia</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Link IT Solutions nace como respuesta a la necesidad de <strong>innovación tecnológica accesible</strong> para PyMEs que buscan destacarse y crecer exponencialmente en el mercado digital.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nos especializamos en el <strong>desarrollo e implementación de soluciones informáticas integrales</strong>, orientadas a ofrecer respaldo tecnológico sólido, calidad en el servicio, respuestas inmediatas y precios competitivos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro equipo está compuesto por <strong>profesionales de amplia trayectoria</strong>, con años de experiencia en empresas de alto perfil de diversos sectores, todos vinculados a las áreas de tecnología de la información.
              </p>

              <div className="pt-6">
                <Link href="/contacto" className="btn-primary">
                  Solicitar Reunión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Valores</h2>
            <p className="section-subtitle">
              Principios que guían cada decisión y acción en nuestra organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Pilares</h2>
            <p className="section-subtitle">
              Compromisos tangibles que garantizamos a cada uno de nuestros clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-primary-accent/5 p-8 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Comenzar su Transformación Digital?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Conversemos sobre cómo podemos impulsar el crecimiento de su organización
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-secondary">
              Contactar Ahora
            </Link>
            <Link href="/empresa" className="btn-outline bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary border-white text-white">
              Conocer Más
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

