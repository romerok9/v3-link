import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaAws, FaMicrosoft, FaGoogle, FaShieldAlt, FaDollarSign, FaClock, FaChartLine, FaCloud } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Cloud Computing | Servicios IaaS',
  description: 'Servicios profesionales de infraestructura cloud con AWS, Azure y GCP. Optimice costos, garantice disponibilidad 24/7 y escale su negocio con nuestras soluciones cloud.',
}

const cloudProviders = [
  {
    name: 'Amazon Web Services',
    icon: FaAws,
    color: 'text-orange-500',
    description: 'Líder mundial en servicios cloud'
  },
  {
    name: 'Microsoft Azure',
    icon: FaMicrosoft,
    color: 'text-blue-500',
    description: 'Integración perfecta con ecosistema Microsoft'
  },
  {
    name: 'Google Cloud Platform',
    icon: FaGoogle,
    color: 'text-red-500',
    description: 'Potencia de la infraestructura de Google'
  }
]

const benefits = [
  {
    icon: FaDollarSign,
    title: 'Ahorro de Costos',
    description: 'Modelo pay-as-you-go elimina inversiones en hardware. Pague solo por los recursos que consume, reduciendo CapEx significativamente.'
  },
  {
    icon: FaClock,
    title: 'Disponibilidad 24/7',
    description: 'Acceso ininterrumpido a aplicaciones y datos desde cualquier lugar con conexión a Internet. Ideal para equipos remotos y continuidad del negocio.'
  },
  {
    icon: FaChartLine,
    title: 'Escalabilidad Elástica',
    description: 'Ajuste recursos automáticamente según demanda. Crezca o reduzca capacidad sin interrupciones ni inversiones adicionales.'
  },
  {
    icon: FaShieldAlt,
    title: 'Seguridad Empresarial',
    description: 'Infraestructura con certificaciones internacionales, backups automáticos y protección contra amenazas avanzadas.'
  }
]

const cloudAdvantages = [
  'Reducción de costos de infraestructura hasta 70%',
  'Economía de espacio físico en oficinas',
  'Centralización de información empresarial',
  'Elasticidad y escalamiento automático',
  'Trabajo remoto habilitado globalmente',
  'Actualizaciones automáticas sin downtime',
  'Recuperación ante desastres garantizada',
  'Acceso desde cualquier dispositivo'
]

export default function CloudPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FaCloud className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Infraestructura como Servicio
              <span className="block text-secondary mt-2">IaaS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Potencie su negocio con los líderes mundiales en cloud computing
            </p>
            <Link href="/contacto" className="btn-secondary">
              Solicitar Consultoría Cloud
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Descubra el Poder del Cloud Computing
              </h2>
              <p className="text-xl text-gray-600">
                Transforme su infraestructura IT con soluciones cloud empresariales
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
              <video 
                controls 
                preload="metadata"
                className="w-full"
                poster="/images/cloud-computing.png"
              >
                <source src="/images/video-link.mp4" type="video/mp4" />
                <source src="/images/video-link.webm" type="video/webm" />
                Su navegador no soporta reproducción de video HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Partners Cloud</h2>
            <p className="section-subtitle">
              Trabajamos con los proveedores más confiables del mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => {
              const Icon = provider.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <Icon className={`w-24 h-24 ${provider.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {provider.name}
                  </h3>
                  <p className="text-gray-600">
                    {provider.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IaaS Definition */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">
              ¿Qué es IaaS?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                La <strong>Infraestructura como Servicio (IaaS)</strong> es un modelo de entrega de computación, almacenamiento, redes y otras capacidades tecnológicas a través de Internet.
              </p>
              <p className="text-lg leading-relaxed">
                IaaS permite a las organizaciones utilizar sistemas operativos, aplicaciones y almacenamiento basados en la nube <strong>sin necesidad de comprar, administrar o mantener</strong> la infraestructura física subyacente. Los ejemplos más prominentes incluyen <strong>Amazon Web Services (AWS)</strong>, <strong>Microsoft Azure</strong> y <strong>Google Cloud Platform (GCP)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Por Qué Utilizar IaaS?</h2>
            <p className="section-subtitle">
              Beneficios tangibles para su organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cloud Computing Advantages */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">
              Ventajas del Cloud Computing
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              La computación en la nube democratiza el acceso a tecnología empresarial de clase mundial
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cloudAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Migrar a la Nube?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Nuestros expertos certificados lo guiarán en cada paso de su transformación cloud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-secondary">
              Agendar Consultoría
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

