import { Metadata } from 'next'
import Link from 'next/link'
import { FaCode, FaMobile, FaDesktop, FaDatabase, FaShieldAlt, FaRocket, FaCogs, FaServer, FaUsers } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Software a Medida | Desarrollo Personalizado',
  description: 'Desarrollo de software a medida con metodologías ágiles. Aplicaciones web, móviles y de escritorio diseñadas para sus necesidades específicas con los más altos estándares de calidad.',
}

const services = [
  {
    icon: FaDesktop,
    title: 'Aplicaciones Web',
    description: 'Plataformas web robustas, escalables y responsive. Desde landing pages hasta sistemas empresariales complejos.'
  },
  {
    icon: FaMobile,
    title: 'Apps Móviles',
    description: 'Desarrollo nativo e híbrido para iOS y Android. Experiencias de usuario excepcionales en dispositivos móviles.'
  },
  {
    icon: FaDatabase,
    title: 'Sistemas Empresariales',
    description: 'ERP, CRM y soluciones integradas que optimizan procesos y centralizan información crítica del negocio.'
  },
  {
    icon: FaServer,
    title: 'APIs y Microservicios',
    description: 'Arquitecturas modernas, escalables y mantenibles. Integración perfecta con sistemas existentes.'
  }
]

const methodology = [
  {
    step: '01',
    title: 'Análisis y Descubrimiento',
    description: 'Reuniones de inmersión profunda para entender sus desafíos, procesos y objetivos de negocio.'
  },
  {
    step: '02',
    title: 'Diseño y Arquitectura',
    description: 'Creación de wireframes, prototipos y definición de arquitectura técnica óptima.'
  },
  {
    step: '03',
    title: 'Desarrollo Ágil',
    description: 'Sprints de desarrollo con entregas incrementales, revisiones constantes y feedback continuo.'
  },
  {
    step: '04',
    title: 'Testing y QA',
    description: 'Pruebas exhaustivas automatizadas y manuales para garantizar calidad excepcional.'
  },
  {
    step: '05',
    title: 'Despliegue y CI/CD',
    description: 'Implementación en producción con pipelines automatizados para entregas continuas.'
  },
  {
    step: '06',
    title: 'Soporte y Evolución',
    description: 'Mantenimiento proactivo, monitoreo 24/7 y evolución continua del producto.'
  }
]

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Angular',
  'Node.js', 'Python', 'Java', '.NET',
  'React Native', 'Flutter', 'Swift', 'Kotlin',
  'PostgreSQL', 'MongoDB', 'Redis', 'MySQL',
  'AWS', 'Azure', 'GCP', 'Docker',
  'Kubernetes', 'CI/CD', 'Git', 'Agile'
]

const differentiators = [
  {
    icon: FaShieldAlt,
    title: 'Calidad sin Compromisos',
    description: 'Código limpio, documentado y con cobertura de tests superiores al 80%'
  },
  {
    icon: FaRocket,
    title: 'Time-to-Market Acelerado',
    description: 'Metodologías ágiles que reducen tiempos de desarrollo hasta en 40%'
  },
  {
    icon: FaCogs,
    title: 'Tecnología de Vanguardia',
    description: 'Stack moderno garantizando mantenibilidad y escalabilidad a largo plazo'
  },
  {
    icon: FaUsers,
    title: 'Equipo Senior',
    description: 'Desarrolladores con promedio de 8+ años de experiencia en proyectos complejos'
  }
]

export default function SoftwarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FaCode className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Software a Medida
              <span className="block text-secondary mt-2">Para Su Negocio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Soluciones tecnológicas personalizadas con los más altos estándares de calidad
            </p>
            <Link href="/contacto" className="btn-secondary">
              Iniciar Proyecto
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Servicios de Desarrollo</h2>
            <p className="section-subtitle">
              Creamos software que impulsa el crecimiento y optimiza operaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestra Metodología</h2>
            <p className="section-subtitle">
              Proceso probado que garantiza éxito en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Tecnologías que Dominamos</h2>
            <p className="section-subtitle">
              Stack moderno y probado en producción
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-accent/10 rounded-full text-primary font-semibold hover:from-primary hover:to-primary-light hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="section-subtitle">
              Diferenciadores que nos convierten en su mejor opción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <div className="text-xl">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-xl">Satisfacción de Clientes</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-xl">Soporte Técnico</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-secondary mb-2">8+</div>
              <div className="text-xl">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Tiene un Proyecto en Mente?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Conversemos sobre cómo podemos transformar su idea en realidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-secondary">
              Solicitar Cotización
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

