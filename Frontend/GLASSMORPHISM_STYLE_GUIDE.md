# 🎨 Guía de Estilo Glassmorphism - Qumuclient

## 📋 Resumen del Diseño

Este documento describe el sistema de diseño **Glassmorphism Quantum** implementado en el componente `circuit.component`. Este estilo puede ser aplicado a otros componentes de la aplicación para mantener consistencia visual.

---

## 🎯 Filosofía de Diseño

### Principios Fundamentales

1. **Transparencia y Profundidad**: Uso de efectos de vidrio esmerilado con `backdrop-filter: blur()`
2. **Jerarquía Visual Clara**: Cards elevadas con sombras sutiles
3. **Paleta Corporativa**: Tonos verdes (#9dc0a9, #8ab095, #7da88a)
4. **Microinteracciones**: Animaciones suaves y estados hover/focus bien definidos
5. **Accesibilidad**: Soporte para modo de alto contraste y reducción de movimiento

---

## 🎨 Paleta de Colores

### Colores Corporativos (Verde Quantum)

```css
--quantum-primary: #9dc0a9;    /* Verde menta principal */
--quantum-secondary: #8ab095;  /* Verde medio */
--quantum-accent: #7da88a;     /* Verde oscuro */
--quantum-light: #b8d4c1;      /* Verde claro */
```

### Colores de Vidrio (Glass Effect)

```css
--glass-bg: rgba(255, 255, 255, 0.65);           /* Fondo glass normal */
--glass-bg-hover: rgba(255, 255, 255, 0.75);     /* Fondo glass hover */
--glass-border: rgba(157, 192, 169, 0.25);       /* Borde glass */
--glass-border-hover: rgba(157, 192, 169, 0.4);  /* Borde glass hover */
--glass-shadow: rgba(157, 192, 169, 0.08);       /* Sombra suave */
--glass-shadow-lg: rgba(157, 192, 169, 0.15);    /* Sombra grande */
```

### Colores de Texto

```css
--text-primary: #1f2937;      /* Texto principal */
--text-secondary: #6b7280;    /* Texto secundario */
--text-tertiary: #9ca3af;     /* Texto terciario/placeholders */
--text-on-primary: #ffffff;   /* Texto sobre fondos de color */
```

### Colores de Estado

```css
--status-valid: #10b981;      /* Verde - válido */
--status-invalid: #ef4444;    /* Rojo - inválido */
--status-warning: #f59e0b;    /* Amarillo - advertencia */
```

### Fondos y Superficies

```css
--bg-gradient-start: #f0f9f4;  /* Inicio del gradiente de fondo */
--bg-gradient-end: #e8f5ed;    /* Fin del gradiente de fondo */
--surface-white: #ffffff;      /* Superficie blanca */
```

---

## 📐 Sistema de Espaciado

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 2.5rem;   /* 40px */
```

**Uso recomendado:**
- `xs`: Gaps pequeños entre iconos y texto
- `sm`: Padding interno de elementos pequeños
- `md`: Padding estándar de cards
- `lg`: Margin entre secciones
- `xl`: Padding de contenedores principales
- `2xl`: Margin entre bloques grandes

---

## 🔲 Border Radius

```css
--radius-sm: 8px;    /* Elementos pequeños */
--radius-md: 12px;   /* Inputs, botones */
--radius-lg: 16px;   /* Cards */
--radius-xl: 20px;   /* Contenedores principales */
```

---

## ⏱️ Transiciones

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);   /* Hover rápido */
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);   /* Estándar */
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);   /* Animaciones */
```

---

## 🎭 Componentes Principales

### 1. Glass Card (Tarjeta de Vidrio)

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: 
    0 8px 32px var(--glass-shadow),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all var(--transition-base);
}

.glass-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-hover);
  transform: translateY(-2px);
}
```

**Cuándo usar:**
- Contenedores de formularios
- Secciones de información
- Paneles de configuración

### 2. Glass Input (Campo de Entrada)

```css
.glass-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all var(--transition-base);
}

.glass-input:focus {
  background: rgba(255, 255, 255, 0.8);
  border-color: var(--quantum-primary);
  box-shadow: 
    0 0 0 4px rgba(157, 192, 169, 0.12),
    0 4px 12px rgba(157, 192, 169, 0.15);
  transform: translateY(-1px);
}
```

**Cuándo usar:**
- Campos de texto
- Inputs numéricos
- Selectores

### 3. Glass Button (Botón Principal)

```css
.glass-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  color: var(--text-on-primary);
  background: linear-gradient(135deg, 
    var(--quantum-primary) 0%, 
    var(--quantum-secondary) 100%);
  box-shadow: 
    0 4px 12px rgba(157, 192, 169, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all var(--transition-base);
}

.glass-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(157, 192, 169, 0.4);
}
```

**Cuándo usar:**
- Acciones principales
- Botones de submit
- CTAs importantes

### 4. Status Indicator (Indicador de Estado)

```css
.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-tertiary);
  transition: all var(--transition-base);
}

.status-indicator.valid {
  background: var(--status-valid);
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
  animation: pulseValid 2s ease-in-out infinite;
}
```

**Cuándo usar:**
- Estados de validación
- Indicadores de conexión
- Estados de progreso

---

## 🎬 Animaciones Clave

### Fade In Up (Entrada de elementos)

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Uso */
.element {
  animation: fadeInUp 0.6s var(--transition-slow);
}
```

### Pulse Valid (Indicador válido)

```css
@keyframes pulseValid {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
}
```

### Float (Partículas flotantes)

```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
```

---

## 🖼️ Iconografía

### Iconos SVG Inline

Todos los iconos se implementan como SVG inline para mejor control y rendimiento:

```html
<!-- Icono de átomo cuántico -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
  <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" 
          stroke-dasharray="2 3" opacity="0.5"/>
</svg>
```

**Colores de iconos:**
- Iconos principales: `var(--quantum-primary)`
- Iconos secundarios: `var(--text-secondary)`
- Iconos en botones: `currentColor`

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px) {
  /* Reducir tamaños de fuente */
  /* Apilar elementos verticalmente */
}

/* Tablet */
@media (max-width: 768px) {
  /* Ajustar padding de cards */
  /* Reorganizar layouts */
}

/* Desktop */
@media (min-width: 769px) {
  /* Layout completo */
}
```

### Consideraciones Mobile

1. **Padding reducido**: Usar `var(--spacing-md)` en lugar de `var(--spacing-xl)`
2. **Botones full-width**: `width: 100%` en móvil
3. **Ocultar partículas**: `display: none` para elementos decorativos
4. **Tamaños de fuente**: Reducir 1-2px en móvil

---

## ♿ Accesibilidad

### Reducción de Movimiento

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Alto Contraste

```css
@media (prefers-contrast: high) {
  .glass-card {
    border-width: 2px;
    border-color: var(--quantum-primary);
  }
}
```

### Focus Visible

```css
*:focus-visible {
  outline: 2px solid var(--quantum-primary);
  outline-offset: 2px;
}
```

---

## 🔧 Tipografía

### Familias de Fuentes

```css
/* Texto general */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

/* Código */
font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace;
```

### Escalas de Tamaño

```css
/* Headings */
h1: 2rem (32px) - font-weight: 700
h2: 1.75rem (28px) - font-weight: 600
h3: 1.5rem (24px) - font-weight: 600

/* Body */
body: 0.9375rem (15px) - font-weight: 400
small: 0.8125rem (13px) - font-weight: 400
code: 13.5px - font-weight: 400
```

### Letter Spacing

```css
/* Headings */
letter-spacing: -0.02em;

/* Uppercase labels */
letter-spacing: 0.08em;

/* Botones */
letter-spacing: 0.02em;

/* Texto normal */
letter-spacing: -0.01em;
```

---

## 🎯 Mejores Prácticas

### DO ✅

1. **Usar variables CSS** para todos los colores y espaciados
2. **Aplicar backdrop-filter** para efectos de vidrio
3. **Incluir estados hover/focus** en todos los elementos interactivos
4. **Añadir transiciones suaves** (250-350ms)
5. **Usar box-shadow multicapa** para profundidad
6. **Implementar animaciones de entrada** (fadeInUp)
7. **Mantener jerarquía visual** con tamaños y pesos de fuente
8. **Incluir indicadores de estado** visuales

### DON'T ❌

1. **No usar colores hardcodeados** - siempre usar variables
2. **No abusar del blur** - máximo 12px para cards, 8px para inputs
3. **No omitir estados disabled** en botones
4. **No usar animaciones largas** (>500ms)
5. **No olvidar -webkit-backdrop-filter** para Safari
6. **No usar sombras muy oscuras** - mantener sutileza
7. **No ignorar responsive** - siempre probar en móvil
8. **No olvidar accesibilidad** - focus states y ARIA labels

---

## 📦 Componentes Reutilizables

### Card Header Pattern

```html
<div class="card-header">
  <svg class="card-icon"><!-- SVG icon --></svg>
  <label class="card-label">Label Text</label>
  <div class="status-indicator" [class.valid]="isValid"></div>
</div>
```

### Input with Underline

```html
<div class="input-wrapper">
  <input class="glass-input" type="text" />
  <div class="input-underline"></div>
</div>
```

### Button with Icons

```html
<button class="glass-btn">
  <svg class="btn-icon"><!-- Left icon --></svg>
  <span>Button Text</span>
  <svg class="arrow-icon"><!-- Right icon --></svg>
</button>
```

---

## 🚀 Aplicación a Otros Componentes

### Paso 1: Importar Variables

Crea un archivo `_variables.css` con todas las variables CSS y importa en cada componente:

```css
@import '../../../styles/variables.css';
```

### Paso 2: Estructura Base

Usa el contenedor principal con gradiente:

```css
.component-container {
  background: linear-gradient(135deg, 
    var(--bg-gradient-start) 0%, 
    var(--bg-gradient-end) 100%);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
}
```

### Paso 3: Añadir Glass Cards

Envuelve secciones en `.glass-card`:

```html
<div class="glass-card">
  <!-- Contenido -->
</div>
```

### Paso 4: Aplicar Estilos de Inputs/Botones

Usa las clases `.glass-input` y `.glass-btn` según corresponda.

---

## 🎨 Variaciones de Color

Si necesitas variaciones para otros contextos:

### Variante Azul (Info)

```css
--info-primary: #60a5fa;
--info-secondary: #3b82f6;
--info-accent: #2563eb;
```

### Variante Roja (Error)

```css
--error-primary: #f87171;
--error-secondary: #ef4444;
--error-accent: #dc2626;
```

### Variante Amarilla (Warning)

```css
--warning-primary: #fbbf24;
--warning-secondary: #f59e0b;
--warning-accent: #d97706;
```

---

## 📚 Recursos Adicionales

- **Fuentes**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Fuentes Mono**: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Inspiración**: [Glassmorphism.com](https://glassmorphism.com/)
- **Generador de Blur**: [CSS Glass Generator](https://css.glass/)

---

## 📝 Checklist de Implementación

Al aplicar este diseño a un nuevo componente:

- [ ] Importar fuentes Inter y JetBrains Mono
- [ ] Definir variables CSS en `:host`
- [ ] Crear contenedor principal con gradiente
- [ ] Implementar glass cards con backdrop-filter
- [ ] Añadir iconografía SVG inline
- [ ] Aplicar estados hover/focus
- [ ] Incluir animaciones de entrada
- [ ] Implementar indicadores de estado
- [ ] Añadir responsive design
- [ ] Probar accesibilidad (teclado, screen reader)
- [ ] Verificar en diferentes navegadores
- [ ] Optimizar para móvil

---

**Versión**: 1.0  
**Última actualización**: 2025-11-22  
**Autor**: Diseño Glassmorphism Quantum para Qumuclient
