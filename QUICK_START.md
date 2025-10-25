# Guía de Inicio Rápido ⚡

**5 minutos para tener el sitio corriendo localmente**

## Prerrequisitos

```bash
node --version  # Debe ser v18 o superior
npm --version   # Debe ser v9 o superior
```

Si no tiene Node.js instalado: [nodejs.org/download](https://nodejs.org/download)

---

## Instalación en 3 Pasos

### 1️⃣ Clonar e Instalar

```bash
git clone https://github.com/romerok9/v3-link.git
cd v3-link
npm install
```

### 2️⃣ Configurar (Opcional)

```bash
# Solo si necesita personalizar configuraciones
cp .env.example .env.local
# Editar .env.local con sus valores
```

### 3️⃣ Iniciar

```bash
npm run dev
```

🎉 **¡Listo!** Abra [http://localhost:3000](http://localhost:3000)

---

## Comandos Útiles

```bash
npm run dev        # Servidor desarrollo (puerto 3000)
npm run build      # Build producción
npm run start      # Servidor producción
npm run lint       # Verificar código
```

---

## Personalización Rápida

### Cambiar Colores

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#193498',  // ← Su color aquí
  }
}
```

### Actualizar Información de Contacto

Edite `src/lib/metadata.ts`:

```typescript
export const siteConfig = {
  contact: {
    email: "su-email@empresa.com",
    phone: "+54 11 1234-5678",
    address: "Su dirección",
  },
};
```

---

## Despliegue en 1 Click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/romerok9/v3-link)

---

## Problemas Comunes

**Error: Cannot find module 'next'**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Puerto 3000 ya está en uso**

```bash
# Usar otro puerto
PORT=3001 npm run dev
```

**Error de permisos en npm install**

```bash
# No use sudo, configure npm correctamente
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

---

## Siguiente Paso

📖 Lea la [documentación completa](README.md) para funcionalidades avanzadas.

## Ayuda

¿Problemas? Abra un [issue en GitHub](https://github.com/romerok9/v3-link/issues) o contacte: romerok9@gmail.com
