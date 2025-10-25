# Link IT Solutions 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()

> **Sitio web corporativo profesional para Link IT Solutions** - Empresa líder en servicios cloud computing (AWS, Azure, GCP), desarrollo de software a medida y capacitaciones tecnológicas.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Descripción

**Link IT Solutions** es un sitio web empresarial moderno, desarrollado con las últimas tecnologías web, diseñado para proyectar profesionalismo y convertir visitantes en clientes.

### ¿Qué Ofrecemos?

- **☁️ Cloud Computing**: Servicios profesionales de infraestructura cloud con AWS, Azure y GCP
- **💻 Software a Medida**: Desarrollo de aplicaciones web, móviles y sistemas empresariales
- **🎓 Capacitaciones**: Formación tecnológica in-company con instructores certificados
- **🤝 Consultoría IT**: Asesoramiento estratégico en transformación digital

---

## ✨ Características

### Técnicas

- ⚡ **Rendimiento Excepcional**: Optimizado con Next.js 14 App Router y Server Components
- 📱 **100% Responsivo**: Diseño Mobile-First que funciona perfectamente en todos los dispositivos
- 🔍 **SEO Optimizado**: Metadata completa, Open Graph, Schema.org, y sitemap automático
- ♿ **Accesible**: Cumple con estándares WCAG 2.1
- 🎨 **Diseño Moderno**: UI/UX empresarial con animaciones fluidas y microinteracciones
- 🌐 **i18n Ready**: Preparado para internacionalización (español/inglés)
- 🚀 **Fast Loading**: Code splitting, lazy loading y optimización de imágenes automática

### Funcionales

- 📝 Formulario de contacto interactivo con validación
- 🎯 Páginas de servicios detalladas y orientadas a conversión
- 💼 Casos de éxito y testimonios de clientes
- 📊 Integración lista para Google Analytics y GTM
- 🔒 Headers de seguridad configurados

---

## 🛠 Tecnologías

Este proyecto utiliza un stack tecnológico moderno y probado:

| Tecnología                                                | Versión | Propósito                   |
| --------------------------------------------------------- | ------- | --------------------------- |
| [Next.js](https://nextjs.org/)                            | 14.2    | Framework React con SSR/SSG |
| [TypeScript](https://www.typescriptlang.org/)             | 5.3     | Tipado estático y mejor DX  |
| [Tailwind CSS](https://tailwindcss.com/)                  | 3.4     | Estilos utility-first       |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.0     | Iconografía consistente     |
| [Sharp](https://sharp.pixelplumbing.com/)                 | 0.33    | Optimización de imágenes    |

### ¿Por Qué Next.js 14 + TypeScript?

**Next.js 14** fue seleccionado por las siguientes razones:

1. **Performance**: Server Components reducen el bundle size y mejoran Core Web Vitals
2. **SEO**: Rendering del lado del servidor para indexación perfecta por motores de búsqueda
3. **Developer Experience**: Hot Module Replacement, TypeScript integrado, y excelente documentación
4. **Escalabilidad**: App Router modular permite crecimiento ordenado del proyecto
5. **Optimización Automática**: Imágenes, fuentes y assets se optimizan sin configuración adicional
6. **Despliegue Simple**: Integración nativa con Vercel (aunque funciona en cualquier plataforma)

**TypeScript** aporta:

- Type safety que previene bugs en producción
- Mejor autocompletado y refactoring en IDEs
- Documentación viva del código
- Mantenibilidad a largo plazo

---

## 📦 Instalación

### Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior (o yarn/pnpm equivalente)
- **Git**: Para clonar el repositorio

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/romerok9/v3-link.git
cd v3-link
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno** (opcional)

```bash
cp .env.example .env.local
```

Edite `.env.local` con sus configuraciones:

```env
NEXT_PUBLIC_SITE_URL=https://linkit.ar
NEXT_PUBLIC_CONTACT_EMAIL=romerok9@gmail.com
# ... más variables según necesidad
```

4. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

5. **Abrir en navegador**

Visite [http://localhost:3000](http://localhost:3000) para ver el sitio.

---

## ⚙️ Configuración

### Variables de Entorno

Copie `.env.example` a `.env.local` y configure según su entorno:

| Variable                     | Descripción                   | Requerida |
| ---------------------------- | ----------------------------- | --------- |
| `NEXT_PUBLIC_SITE_URL`       | URL del sitio en producción   | ✅        |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | Email de contacto             | ✅        |
| `NEXT_PUBLIC_GA_TRACKING_ID` | Google Analytics ID           | ❌        |
| `SMTP_HOST`                  | Servidor SMTP para formulario | ❌        |

### Personalización de Estilos

Los colores corporativos se definen en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#193498',  // Azul corporativo principal
    light: '#113CFC',
    lighter: '#1597E5',
    accent: '#69DADB',
  },
  secondary: {
    DEFAULT: '#FFD700',  // Amarillo/dorado para CTAs
  }
}
```

---

## 🎬 Scripts Disponibles

| Comando              | Descripción                                                      |
| -------------------- | ---------------------------------------------------------------- |
| `npm run dev`        | Inicia servidor de desarrollo en `http://localhost:3000`         |
| `npm run build`      | Genera build optimizado para producción                          |
| `npm run start`      | Inicia servidor de producción (requiere `npm run build` primero) |
| `npm run lint`       | Ejecuta ESLint para verificar calidad de código                  |
| `npm run type-check` | Verifica tipos de TypeScript sin generar output                  |

### Flujo de Trabajo Recomendado

```bash
# Desarrollo local
npm run dev

# Antes de commit
npm run lint
npm run type-check

# Build de producción
npm run build
npm run start
```

---

## 📁 Estructura del Proyecto

```
v3-link-master/
├── src/
│   ├── app/                    # App Router de Next.js 14
│   │   ├── layout.tsx          # Layout principal con Header/Footer
│   │   ├── page.tsx            # Página de inicio
│   │   ├── globals.css         # Estilos globales + Tailwind
│   │   ├── empresa/            # Página "Sobre Nosotros"
│   │   ├── cloud/              # Servicios Cloud Computing
│   │   ├── software/           # Desarrollo Software a Medida
│   │   ├── capacitacion/       # Capacitaciones
│   │   ├── clientes/           # Casos de éxito
│   │   └── contacto/           # Formulario de contacto
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx          # Navegación principal
│   │   └── Footer.tsx          # Pie de página
│   │
│   ├── lib/                    # Utilidades y configuraciones
│   │   └── metadata.ts         # Metadata y Schema.org
│   │
│   ├── types/                  # Definiciones de TypeScript
│   │   └── index.ts
│   │
│   └── fotos/                  # Assets estáticos (logos, imágenes)
│
├── public/                     # Archivos estáticos públicos
├── .eslintrc.json             # Configuración ESLint
├── .gitignore                 # Archivos ignorados por Git
├── next.config.js             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind CSS
├── tsconfig.json              # Configuración de TypeScript
├── package.json               # Dependencias y scripts
├── README.md                  # Este archivo
├── CONTRIBUTING.md            # Guía de contribución
├── CHANGELOG.md               # Historial de cambios
└── LICENSE                    # Licencia MIT
```

### Convenciones de Código

- **Componentes**: PascalCase (`Header.tsx`, `Footer.tsx`)
- **Utilidades**: camelCase (`metadata.ts`)
- **Archivos de página**: lowercase (`page.tsx`, `layout.tsx`)
- **Estilos**: Tailwind utility classes (evitar CSS custom cuando sea posible)

---

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/romerok9/v3-link)

1. Conecte su repositorio de GitHub a Vercel
2. Configure las variables de entorno en el dashboard
3. Vercel detectará automáticamente Next.js y configurará el build

### Opción 2: Manual (Node.js)

```bash
# 1. Build de producción
npm run build

# 2. Iniciar servidor
npm run start
```

El sitio estará disponible en `http://localhost:3000`

### Opción 3: Docker

```dockerfile
# Dockerfile de ejemplo
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t linkit-website .
docker run -p 3000:3000 linkit-website
```

### Opción 4: Otros Proveedores

El proyecto es compatible con:

- **Netlify**: Agregue plugin de Next.js
- **AWS Amplify**: Configuración automática
- **Railway/Render**: Node.js environment
- **Servidor VPS**: PM2 + Nginx

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lea [CONTRIBUTING.md](CONTRIBUTING.md) para conocer nuestro proceso de desarrollo y cómo proponer cambios.

### Pasos Rápidos

1. Fork el proyecto
2. Cree su rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit sus cambios (`git commit -m 'Add: nueva funcionalidad increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulte el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

**Link IT Solutions**

- 🌐 Website: [https://linkit.ar](https://linkit.ar)
- 📧 Email: romerok9@gmail.com
- 📱 Teléfono: (+54) 11 2779-2465
- 📍 Dirección: Juan Domingo Perón 2239, Quilmes - Argentina

### Redes Sociales

- LinkedIn: [@romerok9](https://www.linkedin.com/in/romerok9/)
- Telegram: [@Romerok9](https://t.me/Romerok9)
- Facebook: [Link.ITBA](https://fb.me/Link.ITBA)
- Instagram: [@kevs.romero](https://www.instagram.com/kevs.romero/)

---

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) por el excelente framework
- [Vercel](https://vercel.com/) por la plataforma de despliegue
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- Todos los colaboradores y clientes que hacen posible este proyecto

---

<div align="center">

**[⬆ Volver arriba](#link-it-solutions-)**

Hecho con ❤️ por el equipo de Link IT Solutions

</div>
