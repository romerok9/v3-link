import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { FaCloud, FaCode, FaGraduationCap, FaUsers, FaRocket, FaAward, FaHeadset, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Inicio | Soluciones Informáticas Integrales',
  description: 'Link IT Solutions: su partner estratégico en transformación digital. Servicios cloud, desarrollo de software a medida y capacitaciones tecnológicas de alto nivel.',
}

const services = [
  {
    icon: FaCloud,
    title: 'Cloud Computing',
    description: 'Optimice su infraestructura con los líderes del mercado: AWS, Azure y GCP. Escalabilidad, seguridad y ahorro garantizados.',
    link: '/cloud',
    image: '/images/cloud-computing.png'
  },
  {
    icon: FaCode,
    title: 'Software a Medida',
    description: 'Desarrollamos soluciones tecnológicas personalizadas con los más altos estándares de calidad y metodologías ágiles.',
    link: '/software',
    image: '/images/software-a-medida.png'
  },
  {
    icon: FaGraduationCap,
    title: 'Capacitaciones',
    description: 'Fortalezca las competencias de su equipo con programas de formación impartidos por expertos certificados.',
    link: '/capacitacion',
    image: '/images/capacitacion.png'
  },
  {
    icon: FaUsers,
    title: '¡Únete a Nuestro Equipo!',
    description: 'Buscamos talento apasionado por la tecnología. Forma parte de proyectos innovadores con impacto internacional.',
    link: '/contacto',
    image: '/images/sumate.png'
  },
]

const benefits = [
  {
    icon: FaRocket,
    title: 'Innovación Constante',
    description: 'Utilizamos las últimas tecnologías del mercado'
  },
  {
    icon: FaAward,
    title: 'Calidad Garantizada',
    description: 'Estándares internacionales en cada proyecto'
  },
  {
    icon: FaHeadset,
    title: 'Soporte 24/7',
    description: 'Acompañamiento continuo para su tranquilidad'
  },
  {
    icon: FaChartLine,
    title: 'Crecimiento Medible',
    description: 'ROI demostrable en cada implementación'
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Soluciones Informáticas
              <span className="block text-secondary mt-2">A Medida</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Transformamos su visión en realidad tecnológica. Partner estratégico en cloud, desarrollo y capacitación IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contacto" className="btn-secondary">
                Solicitar Consultoría Gratuita
              </Link>
              <Link href="/empresa" className="btn-outline bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary border-white text-white">
                Conocer Más
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">
              Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de su organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary-accent/10 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary group-hover:text-primary-light transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors group-hover:translate-x-2 transform duration-300"
                    >
                      Más información
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="section-subtitle">
              Más que un proveedor, somos su aliado estratégico en transformación digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar su Negocio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Hablemos sobre cómo nuestras soluciones pueden impulsar el crecimiento de su organización
          </p>
          <Link href="/contacto" className="btn-secondary inline-block">
            Agendar Reunión
          </Link>
        </div>
      </section>
    </>
  )
}

