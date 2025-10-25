import { Metadata } from 'next'
import Link from 'next/link'
import { FaGraduationCap, FaAws, FaDocker, FaReact, FaPython, FaChalkboardTeacher, FaCertificate, FaUsers, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Capacitaciones | Formación Tecnológica Empresarial',
  description: 'Capacitaciones tecnológicas in-company y online. Cursos de AWS, DevOps, desarrollo web y más. Fortalezca las competencias de su equipo con instructores certificados.',
}

const courses = [
  {
    icon: FaAws,
    title: 'AWS Cloud Practitioner',
    description: 'Fundamentos de AWS para profesionales IT. Preparación para certificación oficial.',
    duration: '40 horas',
    level: 'Básico-Intermedio'
  },
  {
    icon: FaDocker,
    title: 'DevOps y Containerización',
    description: 'Docker, Kubernetes, CI/CD y prácticas DevOps modernas para equipos de desarrollo.',
    duration: '60 horas',
    level: 'Intermedio-Avanzado'
  },
  {
    icon: FaReact,
    title: 'Desarrollo Web Full Stack',
    description: 'React, Node.js, bases de datos y arquitecturas modernas de aplicaciones web.',
    duration: '80 horas',
    level: 'Intermedio'
  },
  {
    icon: FaPython,
    title: 'Python para Data Science',
    description: 'Análisis de datos, machine learning y visualización con Python y sus librerías.',
    duration: '50 horas',
    level: 'Básico-Intermedio'
  }
]

const benefits = [
  {
    icon: FaChalkboardTeacher,
    title: 'Instructores Certificados',
    description: 'Profesionales con certificaciones internacionales y experiencia real en proyectos empresariales'
  },
  {
    icon: FaCertificate,
    title: 'Certificación Incluida',
    description: 'Certificado de finalización con validez profesional y seguimiento post-capacitación'
  },
  {
    icon: FaUsers,
    title: 'Grupos Reducidos',
    description: 'Máximo 15 participantes para garantizar atención personalizada y aprendizaje efectivo'
  },
  {
    icon: FaClock,
    title: 'Modalidad Flexible',
    description: 'Presencial, online en vivo o híbrido. Adaptamos horarios a las necesidades de su empresa'
  }
]

const modalidades = [
  {
    title: 'In-Company',
    description: 'Capacitación en sus instalaciones, personalizada según necesidades específicas de su organización.',
    features: ['Contenido a medida', 'Flexibilidad horaria', 'Material incluido', 'Coffee breaks']
  },
  {
    title: 'Online en Vivo',
    description: 'Clases virtuales interactivas con instructor en tiempo real, acceso a grabaciones y materiales digitales.',
    features: ['Plataforma propia', 'Sesiones grabadas', 'Soporte 24/7', 'Acceso permanente']
  },
  {
    title: 'Bootcamp Intensivo',
    description: 'Programas acelerados de 2-4 semanas full-time para transformación rápida de competencias.',
    features: ['Inmersión total', 'Proyectos reales', 'Mentoría individual', 'Job placement']
  }
]

export default function CapacitacionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FaGraduationCap className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Capacitaciones
              <span className="block text-secondary mt-2">Tecnológicas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Fortalezca las competencias de su equipo con programas impartidos por expertos certificados
            </p>
            <Link href="/contacto" className="btn-secondary">
              Solicitar Plan de Capacitación
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Invierta en el Activo Más Importante: Su Talento
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              En un mercado tecnológico en constante evolución, <strong>mantenerse actualizado</strong> es fundamental para la competitividad empresarial. Nuestros programas de capacitación están diseñados para cerrar brechas de conocimiento y potenciar la productividad de sus equipos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ofrecemos formación práctica, orientada a resultados, con <strong>instructores que trabajan activamente</strong> en proyectos reales y conocen los desafíos del día a día empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Programas Destacados</h2>
            <p className="section-subtitle">
              Cursos diseñados para las tecnologías más demandadas del mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {course.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {course.duration}
                        </span>
                        <span className="px-3 py-1 bg-secondary/20 text-gray-700 rounded-full font-medium">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              ¿No encuentra el curso que busca? Diseñamos programas personalizados según sus necesidades.
            </p>
            <Link href="/contacto" className="btn-primary">
              Consultar por Curso Personalizado
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Por Qué Capacitar con Nosotros?</h2>
            <p className="section-subtitle">
              Diferenciales que garantizan el éxito del programa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Modalidades de Capacitación</h2>
            <p className="section-subtitle">
              Adaptamos el formato a las necesidades de su organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modalidades.map((modalidad, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {modalidad.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {modalidad.description}
                </p>
                <ul className="space-y-3">
                  {modalidad.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 opacity-50">"</div>
            <p className="text-2xl mb-8 leading-relaxed">
              Las capacitaciones de Link IT transformaron las competencias de nuestro equipo. Instructores expertos, contenido actualizado y aplicabilidad inmediata en proyectos reales.
            </p>
            <div className="font-bold text-xl text-secondary">
              — CTO, Empresa de Tecnología
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Potenciar su Equipo?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Diseñemos juntos un plan de capacitación que impulse el crecimiento de su organización
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-secondary">
              Solicitar Propuesta
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

