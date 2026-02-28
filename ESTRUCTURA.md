# 📁 Estructura del Proyecto Rifa

## 🗂️ Organización de Carpetas

```
src/
├── components/          # Componentes reutilizables pequeños
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Footer.tsx      # Pie de página
│   └── ScrollToTop.tsx # Reset de scroll entre páginas
│
├── context/             # Estado Global (Context API)
│   └── ReservationContext.tsx # ✅ CREADO
│
├── features/           # Features completas (secciones grandes)
│   ├── hero/
│   │   └── HeroSection.tsx          # Sección principal/banner
│   ├── dynamics/
│   │   ├── DynamicSection.tsx      # Explicación de la dinámica
│   │   └── DynamicStep.tsx         # Paso individual
│   ├── tickets/
│   │   ├── TicketCard.tsx           # Tarjeta de boleto individual
│   │   ├── TicketGrid.tsx           # Grid de todos los boletos
│   │   └── ReservationForm.tsx      # Formulario de reserva
│   └── payment/
│       ├── PaymentMethodCard.tsx    # Tarjeta de método de pago
│       └── PaymentMethod.tsx        # Sección de métodos de pago
│
├── pages/              # Páginas (Vistas principales)
│   ├── HomePage.tsx    # Landing Page
│   └── PaymentPage.tsx # Página de Pagos
│
├── interfaces/         # Tipos TypeScript
│   ├── Ticket.ts       # ✅ CREADO
│   └── PaymentMethod.ts # ✅ CREADO
│
├── data/              # Datos mock para desarrollo
│   ├── mockTickets.ts # ✅ CREADO
│   └── mockPaymentMethods.ts # ✅ CREADO
│
├── services/          # Servicios para APIs
│   └── ticketService.ts # ✅ CREADO
│
├── assets/            # Archivos estáticos (imágenes, etc.)
│
├── App.tsx            # Enrutador y Root
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales (Tailwind v4)
```

---

## 🎯 ¿Qué hace cada carpeta?

### **`components/`** - Componentes Pequeños Reutilizables

Componentes que usas en múltiples lugares:

- `Navbar` → Se usa en todas las páginas
- `Footer` → Se usa en todas las páginas
- `Button` → Botón personalizado con estilos

**Analogía Laravel:** Como los `partials` en Blade (`@include('partials.navbar')`)

---

### **`features/`** - Secciones Grandes (Features)

Componentes grandes que representan una funcionalidad completa:

- `HeroSection` → Banner principal con título y CTA
- `TicketGrid` → Toda la lógica de mostrar y seleccionar boletos
- `PaymentMethods` → Sección completa de métodos de pago

**Analogía Laravel:** Como las `views` completas en Blade (`resources/views/tickets/index.blade.php`)

---

### **`interfaces/`** - Tipos TypeScript

Define la estructura de tus datos (como los Models en Laravel):

```typescript
interface Ticket {
  id: number;
  number: string;
  reserved: boolean;
}
```

**Analogía Laravel:** Como los `Models` de Eloquent (definen la estructura)

---

### **`data/`** - Datos Mock

Datos temporales para desarrollo (antes de tener backend):

```typescript
export const mockTickets = [
  { id: 1, number: "001", reserved: false },
  // ...
];
```

**Analogía Laravel:** Como los `Seeders` que llenan la BD con datos de prueba

---

### **`services/`** - Servicios para APIs

Funciones que consumen APIs (o datos mock):

```typescript
export const getTickets = async () => {
  return fetch("/api/tickets").then((r) => r.json());
};
```

**Analogía Laravel:** Como los `Services` o `Repositories` que abstraen la lógica de negocio

---

### **`hooks/`** - Custom Hooks (Opcional)

Lógica reutilizable de React:

```typescript
export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  // lógica...
  return { tickets, loading };
};
```

**Analogía Laravel:** Como los `Traits` que reutilizas en múltiples lugares

---

## ✅ Lo que YA está creado:

1. ✅ **Estructura de carpetas** (`components/`, `features/`, etc.)
2. ✅ **Interfaces TypeScript** (`Ticket.ts`, `PaymentMethod.ts`)
3. ✅ **Datos mock** (100 boletos + métodos de pago)
4. ✅ **Servicio de boletos** (preparado para mock y API real)
5. ✅ **NavBar.tsx** e integrado en App.tsx
6. ✅ **HeroSection.tsx** con CountdownTimer funcional
7. ✅ **Configuración Tailwind v4** optimizada
8. ✅ **Repositorio Git** inicializado y rama `test` arriba
9. ✅ **Footer.tsx** creado y personalizado
10. ✅ **TicketGrid.tsx** con lógica de selección y botón de limpiar
11. ✅ **DynamicSection.tsx** con iconos de Lucide-react
12. ✅ **React Router** configurado para multi-página (`/` y `/pagos`)
13. ✅ **ReservationContext.tsx** para persistir datos entre páginas
14. ✅ **Botón de WhatsApp** dinámico e inteligente

---

## 🚀 Próximos Pasos (Tú los haces):

### **Día 1 (Status: COMPLETADO ✅):**

1. ✅ Crear `Navbar.tsx`
2. ✅ Crear `Footer.tsx`
3. ✅ Crear `HeroSection.tsx`
4. ✅ Integrar en `App.tsx`

### **Día 2 (Status: COMPLETADO ✅):**

1. ✅ Crear `TicketCard.tsx`
2. ✅ Crear `TicketGrid.tsx`
3. ✅ Crear `PaymentMethod.tsx`

### **Día 3 (Status: COMPLETADO ✅):**

1. ✅ Multi-página con React Router
2. ✅ Estado Global con Context API
3. ✅ Generador de mensajes de WhatsApp dinámicos

### **Día 4 (Status: En Proceso 🚧):**

1. ⏳ Conexión a Backend (Node.js vs Laravel)
2. ⏳ Pulir diseño y animaciones finales
3. ⏳ Despliegue (Vercel/Netlify)
   λ

---

## 💡 Consejos:

- **Empieza simple:** Primero haz que funcione, luego hazlo bonito
- **Usa Tailwind:** Para estilos rápidos y profesionales
- **Prueba constantemente:** `npm run dev` y ve los cambios en tiempo real
- **Pregunta cuando te atasques:** Estoy aquí para ayudarte

¡Éxito! 🚀
