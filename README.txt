NEXO - primera integración de autenticación

CONTENIDO
- index.html: PWA con pantalla de inicio de sesión mediante Supabase Auth.
- config.js: URL del proyecto y campo para la Publishable key.
- manifest.webmanifest y sw.js: configuración PWA original.

CONFIGURACIÓN OBLIGATORIA ANTES DE PUBLICAR
1. Abre config.js.
2. Sustituye PEGA_AQUI_TU_PUBLISHABLE_KEY por la Publishable key de Supabase.
3. Conserva las comillas dobles alrededor de la clave.
4. No introduzcas nunca una Secret key ni service_role key.
5. Sube los cuatro archivos a la raíz del repositorio GitHub `nexo`, reemplazando los anteriores y añadiendo config.js.
6. Espera a que Vercel complete el despliegue y abre la web.
7. Inicia sesión con el usuario que ya creaste manualmente en Supabase Authentication > Users.

IMPORTANTE
- Esta versión añade autenticación; no añade todavía sincronización de datos.
- Checklist y compromisos siguen guardándose en localStorage del dispositivo.
- No existe registro público, invitación ni aprobación de nuevos usuarios desde la aplicación.
- No guardar todavía datos financieros ni datos privados de menores.
- Antes de permitir el acceso a otras personas hay que revisar y probar RLS, las funciones de autorización exclusiva del propietario y el flujo de altas con una sesión real.
- La aplicación carga supabase-js desde jsDelivr, por lo que la autenticación necesita conexión a Internet.
