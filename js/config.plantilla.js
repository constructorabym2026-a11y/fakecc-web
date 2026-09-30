/* ============================================================
   PLANTILLA DE CONFIGURACIÓN — para duplicar este sitio a otra
   constructora (u otra empresa con la misma estructura de página).

   CÓMO USAR ESTE ARCHIVO
   1. Copia este archivo y renómbralo a config.js dentro de la
      carpeta js/ del proyecto nuevo (reemplaza al que ya exista).
   2. Ve completando cada campo marcado con [COMPLETAR].
   3. No cambies los NOMBRES de los campos (izquierda de cada ':'),
      solo los VALORES (derecha). El resto del sitio (components.js,
      main.js, proyectos.js, animations.js) espera exactamente estos
      nombres para funcionar sin tocar nada más.
   4. Los bloques con [] son listas: puedes agregar o quitar objetos
      copiando el "molde" de ejemplo que se deja dentro de cada uno.
   5. Cuando termines, valida que no quede ningún error de sintaxis
      corriendo esto en una terminal, parado en la carpeta del
      proyecto:
          node --check js/config.js
      Si no muestra nada, el archivo está bien formado.
   6. Revisa GUIA-REPLICAR-SITIO.md si algo no te queda claro: ahí
      se explica CADA una de estas secciones con ejemplos reales.
   ============================================================ */

const CONFIG = {

  /* ---------- 1. DATOS DE LA EMPRESA ----------
     Aparecen en el pie de página, el título de las pestañas del
     navegador y las descripciones para buscadores (SEO).          */
  empresa: {
    nombre: '[COMPLETAR] Nombre completo de la empresa S.A.C.',
    nombreCorto: '[COMPLETAR]',                 // ej: 'B&M' — se usa en espacios chicos
    ruc: '[COMPLETAR]',                          // verificar antes de publicar
    eslogan: '[COMPLETAR] Frase corta que resuma a la empresa',
    fundacion: 2020,                             // año en que se fundó
    descripcionCorta: '[COMPLETAR] 1-2 líneas: a qué se dedica la empresa y dónde trabaja.'
  },

  /* ---------- 2. PORTADA (hero) ----------
     titulo      : el h1 real, visible. NO rota. Es lo que Google lee.
     tituloMovil : versión corta, se usa por debajo de 820 px de ancho.
     jerarquia   : 'v1' (por defecto). No lo cambies si no sabes qué hace.
     intervalo   : milisegundos entre una foto del carrusel y la siguiente.
     slides      : cada uno es UNA foto del carrusel de portada, con:
                     palabra : palabra decorativa que aparece encima (MAYÚSCULAS)
                     imagen  : ruta dentro de /images
                     obra    : pie de foto ("Nombre del lugar, Distrito · Año").
                               Vacío ('') = no se muestra el pie de foto.
     Recomendado: 3 a 4 slides, todas fotos HORIZONTALES (16:9 o más
     anchas), de al menos 1600 px de ancho, para que no se vean pixeladas. */
  hero: {
    titulo: '[COMPLETAR] Frase principal, lo que la empresa hace y para quién',
    tituloMovil: '[COMPLETAR] Versión corta de la frase anterior',
    jerarquia: 'v1',
    intervalo: 6000,

    slides: [
      {
        palabra: '[COMPLETAR: EJ. CALIDAD]',
        imagen: 'images/[COMPLETAR].jpg',
        obra: '[COMPLETAR] Nombre del lugar, Distrito · Año'
      }
      // Copia el bloque de arriba (con su coma) para agregar más fotos.
    ]
  },

  /* ---------- 3. CONTACTO ---------- */
  contacto: {
    telefono: '[COMPLETAR]',            // ej: '(01) 555 1234'
    whatsapp: '[COMPLETAR]',            // solo dígitos con código país, ej: '51987654321'
    email: '[COMPLETAR]@ejemplo.com',
    direccion: '[COMPLETAR] Dirección completa, Distrito, Ciudad',
    horario: '[COMPLETAR] ej: Lunes a viernes, 9:00 a 18:00',
    formspree: '[COMPLETAR]'            // enlace de formspree.io para el formulario de contacto
  },

  /* ---------- 4. REDES SOCIALES ----------
     Deja vacío ('') lo que no uses: el ícono no aparece en el pie de página. */
  redes: {
    youtube:   '',
    linkedin:  '',
    instagram: ''
  },

  /* ---------- 5. UBICACIÓN (mapa de contacto) ---------- */
  ubicacion: {
    latitud: 0,      // [COMPLETAR] ej: -11.9398
    longitud: 0,     // [COMPLETAR] ej: -77.0553
    googleMapsUrl: '' // [COMPLETAR] enlace "Compartir" de Google Maps
  },

  /* ---------- 6. INDICADORES DE LA PORTADA ----------
     Los números grandes que se muestran como logros de la empresa.
     valor   : el número (sube animado desde 0 al aparecer en pantalla)
     sufijo  : texto pegado al número, ej: '+', '%'. Vacío si no hace falta.
     etiqueta: texto debajo del número.                              */
  stats: [
    { valor: 0, sufijo: '', etiqueta: '[COMPLETAR] ej: obras ejecutadas' }
    // Agrega 2 a 4 en total, copiando esta línea.
  ],

  /* ---------- 7. COBERTURA: distritos/zonas donde trabaja ----------
     Alimenta el mapa esquemático de "dónde trabajamos".
     id     : identificador corto, sin espacios ni tildes (ej. 'los-olivos')
     nombre : nombre visible
     estado : 'sede' (ahí está la oficina) | 'activo' (ya hay obras) |
              'cobertura' (zona de trabajo, aún sin obra ejecutada)  */
  cobertura: [
    { id: '[completar-id]', nombre: '[COMPLETAR] Nombre del distrito', estado: 'sede' }
    // Agrega uno por cada distrito/zona relevante.
  ],

  /* ============================================================
     8. RUBROS — las categorías de servicio de la empresa.
     Alimentan el menú "Especialidades" y el filtro de proyectos.html.
     No tienen que ser 3 como en el proyecto original: pueden ser 2,
     4 o las que la empresa realmente ofrezca.
     id          : identificador corto, sin espacios ni tildes.
                   Este mismo id se usa después en cada obra (rubro /
                   rubroSecundario) y en cada obra dentro de 'orden'.
     tono        : 'navy' | 'orange' | 'steel' (colores ya definidos
                   en el CSS). Si agregas un 4to rubro, revisa
                   css/styles.css sección "PORTADA DE ESPECIALIDADES"
                   para agregar un tono nuevo si quieres uno distinto.
     reverso     : foto que se ve al girar la tarjeta (hexágono).
     descripcion : 1-2 líneas de qué incluye ese servicio.
     imagenes    : 1 o más fotos que representan el rubro.
     ============================================================ */
  rubros: [
    {
      id: '[completar-id]',
      nombre: '[COMPLETAR] Nombre del rubro',
      tono: 'navy',
      reverso: 'images/[COMPLETAR].jpg',
      descripcion: '[COMPLETAR] Qué incluye este servicio, en 1-2 líneas.',
      imagenes: [
        'images/[COMPLETAR].jpg'
      ]
    }
    // Copia el bloque completo para cada rubro adicional.
  ],

  /* ---------- 9. PORTADA DE ESPECIALIDADES (servicios.html) ----------
     titulo + acento : el h1 se arma como "titulo acento", con el
                       acento resaltado en color de marca.
     fondo           : foto desenfocada detrás de los hexágonos.     */
  especialidades: {
    titulo: '[COMPLETAR] ej: Nuestras',
    acento: '[COMPLETAR] ej: Especialidades',
    fondo: 'images/[COMPLETAR].jpg'
  },

  /* ---------- 10. PÁGINA NOSOTROS ----------
     mosaico : 4 fotos para los hexágonos junto al texto de la empresa.
               Se recortan en forma de hexágono: el motivo principal
               debe ir centrado en la foto.                          */
  nosotros: {
    mosaico: [
      'images/[COMPLETAR].jpg',
      'images/[COMPLETAR].jpg',
      'images/[COMPLETAR].jpg',
      'images/[COMPLETAR].jpg'
    ]
  },

  /* ---------- 11. SECCIÓN "PROYECTOS" DE LA PORTADA ----------
     emblematicas : los id de las obras (definidas más abajo, en
                    'proyectos') que se muestran en la tira de la
                    portada, EN ESTE ORDEN. 3 o 4 obras recomendado.
                    No repitas texto/foto aquí: solo el id — el resto
                    sale de la obra correspondiente en 'proyectos'.
     intervalo    : milisegundos entre una foto y la siguiente.       */
  destacadas: {
    titulo: '[COMPLETAR] ej: Nuestros',
    acento: '[COMPLETAR] ej: Proyectos',
    intervalo: 5000,
    emblematicas: [
      '[completar-id-de-una-obra]'
      // 3-4 ids en total, deben existir tal cual en 'proyectos' de abajo.
    ]
  },

  /* ---------- 12. SERVICIOS (tarjetas detalladas, en Inicio/Servicios) ----------
     id      : debe coincidir con el id de un rubro (bloque 8).
     resumen : 1 línea.
     detalle : lista de 3-5 puntos concretos de lo que se hace.
     icono   : clase de Font Awesome (https://fontawesome.com/icons,
               versión "solid" gratuita), ej: 'fas fa-road'.          */
  servicios: [
    {
      id: '[completar-id-de-un-rubro]',
      nombre: '[COMPLETAR] Nombre del rubro',
      resumen: '[COMPLETAR] 1 línea resumen',
      detalle: [
        '[COMPLETAR] Punto concreto 1',
        '[COMPLETAR] Punto concreto 2'
      ],
      icono: 'fas fa-road'
    }
    // Un bloque por cada rubro del punto 8.
  ],

  /* ---------- 13. CERTIFICACIONES ----------
     Si la empresa NO tiene certificaciones ISO (u otras), deja el
     array vacío así: certificaciones: [],  y luego quita el enlace
     "Certificaciones" del menú en components.js (constante NAV) y
     del pie de página en montarFooter().
     id          : identificador corto, sin espacios.
     titulo      : ej: 'ISO 9001:2015'.
     nombre      : nombre del sistema de gestión que certifica.
     descripcion : qué garantiza, en 1-2 líneas, en lenguaje simple.
     numero      : número de certificado (verifícalo en el documento).
     vigencia    : fecha de vencimiento, formato DD.MM.AAAA.
     pdf         : ruta al PDF del certificado dentro de /docs (queda
                   guardado, aunque hoy no se muestra un botón para él).
     icono       : clase de Font Awesome.
     sello       : ruta a un logo/sello oficial (PNG transparente).
                   Vacío ('') = se dibuja un sello genérico automático.
     imagen      : foto/escaneo del certificado, dentro de /images.  */
  certificaciones: [
    {
      id: '[completar-id]',
      titulo: '[COMPLETAR] ej: ISO 9001:2015',
      nombre: '[COMPLETAR] Nombre del sistema de gestión',
      descripcion: '[COMPLETAR] Qué garantiza, en 1-2 líneas.',
      numero: '[COMPLETAR]',
      vigencia: '[COMPLETAR DD.MM.AAAA]',
      pdf: 'docs/[COMPLETAR].pdf',
      icono: 'fas fa-certificate',
      sello: '',
      imagen: 'images/certificados/[COMPLETAR].jpg'
    }
    // Un bloque por cada certificación. Si no hay ninguna: certificaciones: [],
  ],

  /* ============================================================
     14. OBRAS / PROYECTOS
     id               : identificador único, sin espacios ni tildes
                        (ej. 'parque-central'). No debe repetirse.
     nombre           : nombre completo del proyecto/obra.
     cliente          : entidad o persona que la encargó.
     distrito         : debe coincidir con un id de 'cobertura' (bloque 7).
     ubicacion        : dirección o referencia del lugar.
     ano              : año de ejecución.
     estado           : 'ejecutada' | 'ejecucion'
     empresa          : '' si la ejecutó esta empresa directamente;
                        si no, el texto a mostrar (ej. 'Obra de [socio]').
     rubro            : id de un rubro (bloque 8) — la etiqueta principal.
     rubroSecundario  : opcional; '' si no aplica. Si tiene valor, la
                        obra también aparece en el filtro de ese rubro.
     descripcion      : 2-4 líneas de qué se hizo.
     image            : foto de portada de la tarjeta, dentro de /images.
                        '' si todavía no hay fotos (se muestra un
                        aviso de "obra en ejecución, fotos pendientes").
     galeria          : lista de archivos dentro de /images (solo el
                        nombre de archivo, sin 'images/' delante) que
                        se ven al abrir la galería de esa obra.
                        [] si no hay fotos todavía.
     orden            : posición de la tarjeta en cada vista (1 = la
                        primera, de izquierda a derecha / arriba).
                        Una clave por cada vista donde la obra aparece:
                        'todos' (proyectos.html sin filtro) + el id de
                        'rubro' y, si tiene, el id de 'rubroSecundario'.
                        No hace falta reordenar el array para cambiar
                        el orden: solo cambia estos números. Una obra
                        sin 'orden' (o sin esa clave) sale al final.
                        Ej.: orden: { todos: 3, pistas: 1 }
     ============================================================ */
  proyectos: [
    {
      id: '[completar-id-unico]',
      nombre: '[COMPLETAR] Nombre completo del proyecto',
      cliente: '[COMPLETAR] Quién lo encargó',
      distrito: '[completar-id-de-cobertura]',
      ubicacion: '[COMPLETAR] Dirección o referencia',
      ano: 2025,
      estado: 'ejecutada',
      empresa: '',
      rubro: '[completar-id-de-un-rubro]',
      rubroSecundario: '',
      descripcion: '[COMPLETAR] Qué se hizo, en 2-4 líneas.',
      image: '',
      galeria: [],
      orden: { todos: 1 }
      // Agrega aquí la clave del rubro cuando tengas definido el
      // orden por categoría, ej: orden: { todos: 1, pistas: 1 }
    }
    // Copia el bloque completo (con su coma) para cada obra nueva.
  ],

  /* ---------- 15. TEXTOS INSTITUCIONALES (página Nosotros) ---------- */
  institucional: {
    historia: '[COMPLETAR] Cuándo se fundó la empresa, a qué se dedica y con quién trabaja.',
    mision: '[COMPLETAR] Para qué existe la empresa, qué hace y para quién.',
    vision: '[COMPLETAR] Qué quiere llegar a ser la empresa a futuro.'
  }
};

/* Deja CONFIG disponible globalmente — no lo borres */
window.CONFIG = CONFIG;

/** Nombre visible de un rubro, a partir de su id — no lo borres */
function nombreRubro(id) {
  const r = CONFIG.rubros.find(x => x.id === id);
  return r ? r.nombre : '';
}
