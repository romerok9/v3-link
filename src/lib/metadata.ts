/**
 * Centralized metadata and SEO configurations
 */

export const siteConfig = {
  name: 'Link IT Solutions',
  description: 'Empresa líder en servicios cloud computing (AWS, Azure, GCP), desarrollo de software a medida y capacitaciones tecnológicas.',
  url: 'https://linkit.ar',
  ogImage: 'https://linkit.ar/og-image.png',
  links: {
    linkedin: 'https://www.linkedin.com/in/romerok9/',
    telegram: 'https://t.me/Romerok9',
    facebook: 'https://fb.me/Link.ITBA',
    instagram: 'https://www.instagram.com/kevs.romero/',
  },
  contact: {
    email: 'romerok9@gmail.com',
    phone: '+54 11 2779-2465',
    address: 'Juan Domingo Perón 2239, Quilmes - Argentina',
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Link IT Solutions',
  url: 'https://linkit.ar',
  logo: 'https://linkit.ar/images/logo-linkit.png',
  description: 'Soluciones informáticas integrales: Cloud Computing, Software a Medida y Capacitaciones Tecnológicas',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Juan Domingo Perón 2239',
    addressLocality: 'Quilmes',
    addressRegion: 'Buenos Aires',
    postalCode: '1878',
    addressCountry: 'AR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+54-11-2779-2465',
    contactType: 'customer service',
    email: 'romerok9@gmail.com',
    availableLanguage: ['Spanish', 'English']
  },
  sameAs: [
    'https://www.linkedin.com/in/romerok9/',
    'https://t.me/Romerok9',
    'https://fb.me/Link.ITBA',
    'https://www.instagram.com/kevs.romero/'
  ]
}

