# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## EmailJS configuration

El formulario de `src/components/Contact.jsx` usa EmailJS para enviar correos desde el navegador. Configura tu cuenta y agrega estas variables al archivo `.env`:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=tu_template_admin
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_EMAILJS_ADMIN_TO_EMAIL=fcampospino754@gmail.com
```

- La plantilla de administrador debe tener definido el destinatario (To) con el correo del dueno o equipo.
- El formulario actualmente solo envia notificaciones al administrador. Si mas adelante deseas agregar un correo de confirmacion al cliente, deberas crear una segunda plantilla en EmailJS y actualizar el codigo para usarla.

Reinicia el servidor de desarrollo despues de modificar `.env`. Si alguna variable falta, el formulario mostrara un mensaje de error y no intentara enviar correos.
