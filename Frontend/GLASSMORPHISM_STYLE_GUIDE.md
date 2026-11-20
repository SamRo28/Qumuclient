# 🎨 Glassmorphism Design System - Qumuclient

## 📋 System Overview

This document defines the **Quantum Glassmorphism** design system used across the Qumuclient ecosystem. It is designed to be elegant, accessible, and structured for export to other tools.

---

## 💎 Design Tokens

These tokens are the source of truth for all visual properties. They are implemented as CSS variables in `styles.css`.

### 🌑 Color Palette (Emerald Quantum)

| Token | Light Mode Value | Dark Mode Value | Description |
| :--- | :--- | :--- | :--- |
| `--accent-primary` | `#10b981` | `#34d399` | Primary action color |
| `--accent-secondary` | `#059669` | `#10b981` | Secondary/Hover accent |
| `--accent-tertiary` | `#34d399` | `#6ee7b7` | Subtle accent / Highlights |
| `--bg-primary` | `#f5f7fa` | `#020617` | Main surface background |
| `--bg-secondary` | `#e8f5e9` | `#0f172a` | Secondary gradient stop |
| `--text-primary` | `#1a1f2e` | `#e2e8f0` | High emphasis text |
| `--text-secondary` | `#4a5568` | `#94a3b8` | Medium emphasis text |
| `--text-muted` | `#718096` | `#64748b` | Low emphasis (placeholders) |

### 🧪 Glass Tokens

Standard glass effect uses `backdrop-filter: blur(12px) saturate(180%)`.

| Token | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| `--glass-bg-card` | `rgba(255, 255, 255, 0.7)` | `rgba(2, 6, 23, 0.6)` |
| `--border-glass` | `rgba(16, 185, 129, 0.4)` | `rgba(16, 185, 129, 0.3)` |
| `--shadow-glass` | `rgba(6, 95, 70, 0.15)` | `rgba(0, 0, 0, 0.3)` |

---

## 🎬 Animation System

All animations follow a `cubic-bezier(0.4, 0, 0.2, 1)` easing for a premium feel.

### Keyframes

```css
/* Vertical Entry */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Floating decor */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Status Pulse */
@keyframes pulse-ring {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
}

/* Notification Slide */
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

---

## 🧱 Component Patterns

### 1. Glass Card
The foundational container.
```css
.glass-card {
    background: var(--glass-bg-card);
    backdrop-filter: blur(10px) saturate(180%);
    border: 1px solid var(--border-glass);
    border-radius: 16px;
    box-shadow: var(--card-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.glass-card:hover { transform: translateY(-4px); border-color: var(--accent-primary); }
```

### 2. Quantum Button (Primary)
```css
.btn-primary {
    background: var(--accent-gradient);
    border-radius: 12px;
    box-shadow: 0 4px 12px var(--shadow-glass);
    transition: transform 250ms;
}
.btn-primary:active { transform: scale(0.98); }
```

### 3. Glass Input
```css
.glass-input {
    background: var(--glass-bg-card);
    border: 2px solid transparent;
    border-radius: 12px;
    transition: border-color 250ms, background 250ms;
}
.glass-input:focus { border-color: var(--accent-primary); background: var(--glass-bg); }
```

---

## 📱 Layout & Grid

- **Standard Grid Gap**: `2rem` (32px)
- **Container Padding**: `2rem` (Desktop), `1.5rem` (Tablet), `1rem` (Mobile)
- **Border Radius Scale**:
  - `sm`: 8px (Small controls)
  - `md`: 12px (Buttons/Inputs)
  - `lg`: 16px (Cards/Modals)

---

## ♿ Accessibility

1. **Focus States**: `:focus-visible` must show a `2px solid var(--accent-primary)` ring with `2px` offset.
2. **Motion Reduction**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
   }
   ```
3. **Contrast**: Text variables maintain AA contrast (4.5:1) against glass surfaces in both modes.

---

## 📥 Exporting Tokens (JSON)

For use in other development tools (e.g., Python mutant generators or external dashboards):

```json
{
  "theme": "Glassmorphism Quantum",
  "palette": {
    "primary": "#10b981",
    "secondary": "#059669",
    "background": "#020617"
  },
  "glass": {
    "blur": "12px",
    "saturation": "180%",
    "transparency": 0.7
  }
}
```

---

**Version**: 2.0  
**Updated**: 2026-03-18  
**Legacy Sync**: Synchronized with `styles.css` v3.0 Emerald components.
---

**Versión**: 1.0  
**Última actualización**: 2025-11-22  
**Autor**: Diseño Glassmorphism Quantum para Qumuclient
