# Guía de Despliegue 🚀

Instrucciones detalladas para desplegar Link IT Solutions en diferentes plataformas.

---

## 📋 Tabla de Contenidos

- [Preparación Pre-Despliegue](#preparación-pre-despliegue)
- [Vercel (Recomendado)](#vercel-recomendado)
- [Netlify](#netlify)
- [AWS Amplify](#aws-amplify)
- [Servidor VPS (Ubuntu/Debian)](#servidor-vps-ubuntudebian)
- [Docker](#docker)
- [Variables de Entorno en Producción](#variables-de-entorno-en-producción)
- [Post-Despliegue](#post-despliegue)

---

## 🔧 Preparación Pre-Despliegue

### 1. Verificar Build Local

```bash
# Limpiar dependencias
rm -rf .next node_modules

# Reinstalar
npm install

# Build de producción
npm run build

# Probar build
npm run start
```

Si el build falla, corrija los errores antes de continuar.

### 2. Configurar Variables de Entorno

Cree un archivo `.env.production` con valores de producción:

```env
NEXT_PUBLIC_SITE_URL=https://linkit.ar
NEXT_PUBLIC_CONTACT_EMAIL=romerok9@gmail.com
# ... otras variables
```

### 3. Actualizar next.config.js (si es necesario)

Para dominios personalizados en Next.js Image:

```javascript
module.exports = {
  images: {
    domains: ["linkit.ar", "cdn.linkit.ar"],
  },
};
```

---

## ☁️ Vercel (Recomendado)

### Opción A: Deploy Automático desde GitHub

1. **Conectar Repositorio**

   - Ir a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importar desde GitHub: `romerok9/v3-link`

2. **Configurar Proyecto**

   - Framework Preset: **Next.js** (auto-detectado)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variables de Entorno**

   - Agregar variables desde el dashboard
   - O importar desde archivo `.env`

4. **Deploy**
   - Click en "Deploy"
   - Vercel construye y despliega automáticamente

### Opción B: CLI de Vercel

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Dominio Personalizado

1. Settings → Domains
2. Agregar: `linkit.ar` y `www.linkit.ar`
3. Configurar DNS según instrucciones de Vercel:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🌐 Netlify

### Deploy desde Git

1. **Conectar Repositorio**

   - [app.netlify.com](https://app.netlify.com) → New site from Git
   - Seleccionar repositorio GitHub

2. **Configuración de Build**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Agregar Plugin de Next.js**

   - Plugins → Search → "Essential Next.js"
   - Instalar plugin

4. **Variables de Entorno**

   - Site settings → Environment → Environment variables
   - Agregar cada variable necesaria

5. **Deploy**
   - Netlify detecta cambios en Git y redespliega automáticamente

### netlify.toml

Cree `netlify.toml` en la raíz:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## ☁️ AWS Amplify

### 1. Configurar Amplify CLI

```bash
npm install -g @aws-amplify/cli
amplify configure
```

### 2. Inicializar Proyecto

```bash
amplify init
# Seguir el wizard de configuración
```

### 3. Agregar Hosting

```bash
amplify add hosting
# Seleccionar: "Hosting with Amplify Console"
```

### 4. Deploy

```bash
amplify publish
```

### Desde Console de AWS

1. AWS Amplify Console → New app → Host web app
2. Conectar repositorio GitHub
3. Configurar build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - "**/*"
     cache:
       paths:
         - node_modules/**/*
   ```

---

## 🖥️ Servidor VPS (Ubuntu/Debian)

### Requisitos

- Ubuntu 20.04+ o Debian 11+
- Usuario con privilegios sudo
- Dominio apuntando al servidor

### 1. Instalar Node.js

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar
node --version
npm --version
```

### 2. Instalar PM2

```bash
sudo npm install -g pm2
```

### 3. Clonar y Configurar Proyecto

```bash
# Crear directorio
sudo mkdir -p /var/www
cd /var/www

# Clonar repositorio
sudo git clone https://github.com/romerok9/v3-link.git linkit
cd linkit

# Instalar dependencias
npm install

# Configurar variables de entorno
sudo nano .env.production
# Pegar variables necesarias

# Build
npm run build
```

### 4. Configurar PM2

```bash
# Iniciar aplicación
pm2 start npm --name "linkit" -- start

# Configurar auto-start
pm2 startup
pm2 save

# Verificar estado
pm2 status
```

### 5. Configurar Nginx como Reverse Proxy

```bash
# Instalar Nginx
sudo apt install -y nginx

# Crear configuración
sudo nano /etc/nginx/sites-available/linkit
```

Contenido del archivo:

```nginx
server {
    listen 80;
    server_name linkit.ar www.linkit.ar;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/linkit /etc/nginx/sites-enabled/

# Probar configuración
sudo nginx -t

# Recargar Nginx
sudo systemctl reload nginx
```

### 6. Configurar SSL con Let's Encrypt

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado
sudo certbot --nginx -d linkit.ar -d www.linkit.ar

# Configurar renovación automática
sudo certbot renew --dry-run
```

---

## 🐳 Docker

### Dockerfile

Cree `Dockerfile` en la raíz:

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://linkit.ar
    restart: unless-stopped
```

### Comandos Docker

```bash
# Build
docker build -t linkit-website .

# Run
docker run -p 3000:3000 linkit-website

# Con docker-compose
docker-compose up -d
```

---

## 🔐 Variables de Entorno en Producción

### Variables Críticas

```env
# Site
NEXT_PUBLIC_SITE_URL=https://linkit.ar
NEXT_PUBLIC_SITE_NAME=Link IT Solutions

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=romerok9@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+541127792465

# Analytics (opcional)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Seguridad

- ❌ **NO** commitear `.env` files a Git
- ✅ Usar servicios de secrets management (AWS Secrets Manager, Vercel Env)
- ✅ Rotar secretos regularmente
- ✅ Usar variables diferentes por entorno (dev/staging/prod)

---

## ✅ Post-Despliegue

### Checklist

- [ ] Sitio accesible en dominio de producción
- [ ] SSL/HTTPS funcionando correctamente
- [ ] Todas las páginas cargan sin errores
- [ ] Formulario de contacto funcional
- [ ] Imágenes optimizadas y cargando
- [ ] SEO metadata correcta (verificar con View Source)
- [ ] Responsive en mobile/tablet/desktop
- [ ] Performance score > 90 en Lighthouse
- [ ] Google Analytics registrando (si aplica)
- [ ] Sitemap accesible en `/sitemap.xml`
- [ ] Robots.txt configurado correctamente

### Monitoreo

1. **Configurar Uptime Monitoring**

   - [UptimeRobot](https://uptimerobot.com)
   - [Pingdom](https://www.pingdom.com)

2. **Configurar Error Tracking**

   - [Sentry](https://sentry.io)
   - Vercel Analytics (si usa Vercel)

3. **Performance Monitoring**
   - Google PageSpeed Insights
   - Vercel Analytics
   - Web Vitals

---

## 🆘 Troubleshooting

**Build falla en producción pero funciona localmente**

```bash
# Verificar versión de Node.js
node --version  # Debe coincidir con producción

# Limpiar caché
rm -rf .next node_modules
npm install
npm run build
```

**Error 500 después de deploy**

- Verificar logs del servidor
- Revisar variables de entorno
- Verificar permisos de archivos

**Imágenes no cargan**

- Verificar configuración de `next.config.js`
- Revisar dominios permitidos en Image Optimization

**SSL no funciona**

- Verificar configuración DNS
- Revisar certificados con `sudo certbot certificates`
- Forzar renovación: `sudo certbot renew --force-renewal`

---

## 📞 Soporte

¿Problemas con el despliegue?

- 📧 Email: romerok9@gmail.com
- 🐛 GitHub Issues: [github.com/romerok9/v3-link/issues](https://github.com/romerok9/v3-link/issues)
- 💬 Telegram: [@Romerok9](https://t.me/Romerok9)

---

<div align="center">

**¡Feliz Despliegue! 🎉**

[⬆ Volver arriba](#guía-de-despliegue-)

</div>
