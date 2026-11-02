NEXO — prototipo inicial instalable (PWA)

CONTENIDO
- index.html: interfaz y prototipo funcional.
- manifest.webmanifest: metadatos de instalación.
- sw.js: caché básica para uso sin conexión tras la primera carga.

CÓMO PROBARLO
1. Sube el contenido de esta carpeta a un alojamiento web estático con HTTPS
   (por ejemplo, un hosting estático que permita publicar estos tres archivos).
2. Abre la URL desde Chrome en Android.
3. Menú de Chrome > Instalar aplicación o Añadir a pantalla de inicio.

IMPORTANTE
- Esta es una primera maqueta funcional, no una app Android nativa ni una versión final.
- Checklist y compromisos se guardan localmente en el navegador de ese dispositivo.
- Aún no hay sincronización en la nube, autenticación, notificaciones, conexión bancaria
  ni base de datos multi-dispositivo. Esas funciones requieren configurar servicios
  y medidas de seguridad antes de utilizarlas con datos reales.
- No introduzcas todavía información financiera sensible ni datos privados de menores.
