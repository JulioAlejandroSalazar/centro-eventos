# 🎉 Centro de Eventos

## 📌 Descripción
Este proyecto es una aplicación web desarrollada en **React** con **Vite**, que simula un centro de eventos.  
Permite **visualizar eventos**, **consultar detalles de cada evento** y navegar entre páginas de forma fluida, utilizando **React Router**.  
Se implementan APIs mock **REST** y **GraphQL** mediante **MSW (Mock Service Worker)** para simular la obtención de datos.

---

## 🛠 Tecnologías utilizadas
- **React 18**  
- **Vite**  
- **Tailwind CSS** (diseño responsivo)  
- **React Router DOM** (navegación SPA)  
- **MSW (Mock Service Worker)** para APIs REST y GraphQL  
- **JavaScript / JSX**  

---

## ⚡ Funcionalidades
- Visualización de eventos en **grid responsivo**.  
- Consulta de **detalles del evento** mediante GraphQL mock.  
- Navegación fluida entre páginas con React Router.  
- Manejo de **estado dinámico** con `useState` y `useEffect`.  
- Componentes **modulares y reutilizables** (`EventCard`, `EventDetail`).  
- Servicio de mock API con **MSW**, tanto REST como GraphQL.  
- Título “Centro de eventos” clicable que vuelve al menú principal.  

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```
2. Instalar dependencias:
```bash
npm install
```
3. Inicializar MSW en la carpeta public:
```bash
npx msw init public
```
4. Ejecutar la aplicación en modo desarrollo:
```bash
npm run dev
```
5. Abrir la aplicación en el navegador:
http://localhost:5173