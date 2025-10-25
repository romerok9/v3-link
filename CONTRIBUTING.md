# Guía de Contribución 🤝

¡Gracias por su interés en contribuir a Link IT Solutions! Este documento proporciona directrices para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Flujo de Trabajo de Desarrollo](#flujo-de-trabajo-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reporte de Bugs](#reporte-de-bugs)
- [Sugerencia de Features](#sugerencia-de-features)

---

## 📜 Código de Conducta

Este proyecto y todos los participantes se rigen por nuestro Código de Conducta. Al participar, se espera que usted respete este código.

### Nuestros Estándares

**Comportamientos Esperados:**

- Uso de lenguaje acogedor e inclusivo
- Respeto a diferentes puntos de vista y experiencias
- Aceptación constructiva de críticas
- Enfoque en lo que es mejor para la comunidad
- Empatía hacia otros miembros de la comunidad

**Comportamientos Inaceptables:**

- Uso de lenguaje o imágenes sexualizadas
- Trolling, comentarios insultantes/despectivos
- Acoso público o privado
- Publicación de información privada de otros sin permiso
- Otras conductas no éticas o no profesionales

---

## 🚀 ¿Cómo Puedo Contribuir?

### Reportar Bugs

Los bugs se rastrean como [GitHub Issues](https://github.com/romerok9/v3-link/issues). Antes de crear un issue:

1. **Verifique** que el bug no haya sido reportado previamente
2. **Use** la plantilla de bug report si está disponible
3. **Incluya** toda la información solicitada

### Sugerir Mejoras

Las sugerencias de mejora también se rastrean como GitHub Issues:

1. **Describa** claramente la mejora propuesta
2. **Explique** por qué esta mejora sería útil
3. **Proporcione** ejemplos de uso si es posible

### Contribuir con Código

1. **Fork** el repositorio
2. **Clone** su fork localmente
3. **Cree** una rama para su feature
4. **Desarrolle** siguiendo nuestros estándares
5. **Pruebe** sus cambios exhaustivamente
6. **Commit** con mensajes descriptivos
7. **Push** a su fork
8. **Abra** un Pull Request

---

## 🔄 Flujo de Trabajo de Desarrollo

### 1. Setup del Entorno Local

```bash
# Clonar el repositorio
git clone https://github.com/romerok9/v3-link.git
cd v3-link

# Instalar dependencias
npm install

# Crear rama de desarrollo
git checkout -b feature/nombre-del-feature
```

### 2. Estrategia de Branching

Utilizamos **Git Flow** simplificado:

- `main`: Código en producción, siempre estable
- `develop`: Rama de integración para desarrollo
- `feature/*`: Nuevas funcionalidades
- `bugfix/*`: Corrección de bugs
- `hotfix/*`: Parches urgentes en producción

**Nomenclatura de Ramas:**

```
feature/add-newsletter-subscription
bugfix/fix-contact-form-validation
hotfix/critical-security-patch
```

### 3. Durante el Desarrollo

```bash
# Mantener su rama actualizada
git checkout develop
git pull origin develop
git checkout feature/su-feature
git merge develop

# Commits frecuentes con mensajes claros
git add .
git commit -m "Add: implementar formulario de newsletter"
```

### 4. Antes de Crear PR

```bash
# Verificar linting
npm run lint

# Verificar tipos de TypeScript
npm run type-check

# Build de producción para detectar errores
npm run build

# Si todo pasa, push a su fork
git push origin feature/su-feature
```

---

## 💻 Estándares de Código

### TypeScript

- **Tipado estricto**: Evite `any`, use tipos específicos
- **Interfaces sobre types** para objetos
- **Nomenclatura**: PascalCase para tipos, camelCase para variables

```typescript
// ✅ Bien
interface UserProfile {
  name: string;
  email: string;
  role: "admin" | "user";
}

const getUserProfile = (id: string): UserProfile => {
  // ...
};

// ❌ Mal
const getUserProfile = (id: any): any => {
  // ...
};
```

### React/Next.js

- **Componentes funcionales** con hooks
- **Server Components** por defecto (Next.js 14)
- **Client Components** solo cuando sea necesario (`'use client'`)
- **Nombres descriptivos** para componentes y funciones

```tsx
// ✅ Bien - Server Component
export default function ServicesPage() {
  return <div>...</div>;
}

// ✅ Bien - Client Component cuando se necesita interactividad
("use client");
export default function ContactForm() {
  const [email, setEmail] = useState("");
  // ...
}
```

### Estilos con Tailwind

- **Utility classes** en lugar de CSS custom
- **Responsive design**: mobile-first con `sm:`, `md:`, `lg:`
- **Clases reutilizables** en `globals.css` con `@layer components`

```tsx
// ✅ Bien
<button className="btn-primary hover:bg-primary-light transition-colors">
  Enviar
</button>

// ❌ Evitar inline styles
<button style={{ backgroundColor: '#193498' }}>
  Enviar
</button>
```

### Formato de Código

- **Indentación**: 2 espacios (configurado en ESLint)
- **Comillas**: Simples para JSX, dobles para strings
- **Punto y coma**: Requerido
- **Imports**: Ordenados alfabéticamente

```typescript
// ✅ Orden de imports
import { useState, useEffect } from "react"; // React primero
import Link from "next/link"; // Next.js
import { FaIcon } from "react-icons/fa"; // Librerías externas
import Header from "@/components/Header"; // Componentes propios
import { siteConfig } from "@/lib/metadata"; // Utilidades propias
```

---

## 🔍 Proceso de Pull Request

### Checklist Pre-PR

Antes de abrir un Pull Request, asegúrese de que:

- [ ] El código compila sin errores (`npm run build`)
- [ ] ESLint pasa sin warnings (`npm run lint`)
- [ ] TypeScript type check pasa (`npm run type-check`)
- [ ] Los cambios fueron probados en navegador
- [ ] El diseño es responsive (mobile, tablet, desktop)
- [ ] Los commits tienen mensajes descriptivos
- [ ] La rama está actualizada con `develop`
- [ ] Se actualizó documentación si es necesario

### Formato del Pull Request

**Título**: Use prefijos claros

```
Add: nueva funcionalidad de newsletter
Fix: corrección de validación en formulario de contacto
Update: actualización de estilos en página de inicio
Docs: actualización de README con instrucciones de deploy
```

**Descripción**: Use esta plantilla

```markdown
## 🎯 Objetivo

Breve descripción de qué resuelve este PR

## 🔧 Cambios Realizados

- Cambio 1
- Cambio 2
- Cambio 3

## 📸 Screenshots (si aplica)

[Adjuntar capturas de pantalla]

## ✅ Testing

- [ ] Probado en Chrome
- [ ] Probado en Firefox
- [ ] Probado en Safari
- [ ] Probado en mobile

## 📝 Notas Adicionales

Cualquier contexto adicional o decisiones de diseño
```

### Proceso de Review

1. **Asignación automática** de reviewers
2. **Review de código** por al menos un maintainer
3. **Cambios solicitados** (si es necesario)
4. **Aprobación** del PR
5. **Merge** a la rama correspondiente
6. **Delete** de la rama feature

---

## 🐛 Reporte de Bugs

### Plantilla de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del bug.

**Pasos para Reproducir**

1. Ir a '...'
2. Click en '...'
3. Scroll hacia '...'
4. Ver error

**Comportamiento Esperado**
Descripción de lo que debería suceder.

**Comportamiento Actual**
Descripción de lo que actualmente sucede.

**Screenshots**
Si aplica, agregue screenshots.

**Entorno:**

- OS: [ej. Windows 11]
- Navegador: [ej. Chrome 120]
- Versión: [ej. 1.0.0]

**Contexto Adicional**
Cualquier otra información relevante.
```

---

## 💡 Sugerencia de Features

### Plantilla de Feature Request

```markdown
**¿Su feature request está relacionado a un problema?**
Descripción clara del problema. Ej: Siempre me frustra cuando [...]

**Describa la solución que le gustaría**
Descripción clara de qué quiere que suceda.

**Describa alternativas consideradas**
Descripción de soluciones o features alternativas.

**Contexto Adicional**
Cualquier otro contexto, screenshots, etc.
```

---

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Best Practices](https://react.dev/learn)

---

## 🎉 Reconocimientos

Todos los contribuidores serán reconocidos en el archivo [CONTRIBUTORS.md](CONTRIBUTORS.md) (si existe) y en los releases notes.

---

## ❓ ¿Preguntas?

Si tiene preguntas sobre cómo contribuir, no dude en:

- Abrir un [GitHub Discussion](https://github.com/romerok9/v3-link/discussions)
- Contactar por email: romerok9@gmail.com
- Unirse a nuestro canal de Telegram: [@Romerok9](https://t.me/Romerok9)

---

<div align="center">

**¡Gracias por contribuir a Link IT Solutions! 🙏**

[⬆ Volver arriba](#guía-de-contribución-)

</div>
