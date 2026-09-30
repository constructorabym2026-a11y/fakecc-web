# Sitio web — Consultoría, Constructora e Inversiones FAKECC S.A.C.

Sitio estático de 6 páginas. HTML, CSS y JavaScript escritos para este proyecto,
sin Bootstrap, sin Tailwind, sin jQuery y sin librerías de animación.
Las únicas dependencias externas son Google Fonts y Font Awesome (licencia MIT,
no obliga a mostrar créditos en la página).

Este sitio nace del de Constructora B&M y se adaptó a FAKECC: identidad, datos de
empresa y paleta. El historial de git conserva el estado original.

## Estructura

```
fakecc-web/
├── index.html            Portada
├── nosotros.html
├── servicios.html
├── proyectos.html        Menú lateral por rubro + mapa
├── certificaciones.html
├── contacto.html
├── CNAME                 Dominio: fakeccconstructora.com
├── robots.txt
├── sitemap.xml
├── css/styles.css        Todo el diseño
├── js/
│   ├── config.js         ← el único archivo que editas normalmente
│   ├── config.plantilla.js  Molde en blanco, para replicar el sitio a otra empresa
│   ├── components.js     Cabecera, pie, flotantes, visor de fotos
│   ├── animations.js     Movimiento (IntersectionObserver, rAF)
│   ├── main.js           Portada, indicadores, textos institucionales, formulario
│   └── proyectos.js      Obras, filtro por rubro, mapa de cobertura
├── images/               Fotos de obra, logo y sellos de certificación
├── logo/                 Logotipo original de FAKECC (SVG, PDF y PNG 3D)
└── docs/                 PDFs de las certificaciones
```

## Cómo verlo

No lo abras con doble clic: usa un servidor local.

```
python -m http.server 8000
```

y entra a `http://localhost:8000`. Si editas un `.js` y el cambio no se ve,
es el caché del navegador: `Ctrl+Shift+R`.

## Qué falta completar

En `js/config.js`:

- `ubicacion.googleMapsUrl` y afinar las coordenadas exactas de la oficina de
  Puente Piedra (hoy son aproximadas)
- `redes`: si se quedan vacías, los íconos no se muestran en el pie
- verificar que el endpoint de Formspree llegue al correo de FAKECC
- **certificaciones**: los PDF e imágenes que hay en `docs/` e
  `images/certificados/` están emitidos a nombre de B&M. Hay que
  reemplazarlos por los de FAKECC antes de publicar.

## Cómo editar el contenido

Todo sale de `js/config.js`. No se toca el HTML para:

- **Agregar una obra**: copia un bloque dentro de `proyectos` y cámbialo.
  `estado: 'ejecucion'` muestra el distintivo gris y el marcador de obra sin foto;
  `estado: 'ejecutada'` muestra el distintivo rojo.
  `empresa: ''` = la ejecutó FAKECC; con texto, aparece esa nota en la tarjeta.
- **Agregar fotos a una obra**: pon los archivos en `images/` y añade sus nombres
  al arreglo `galeria`. La tarjeta pasa a ser clicable y abre el visor.
- **Cambiar un servicio, un indicador o una certificación**: mismos arreglos,
  mismo formato.
- **Historia, misión y visión**: bloque `institucional`. Se pintan solos en la
  portada y en `nosotros.html`; no hay que tocar el HTML.

Antes de publicar, valida la sintaxis: `node --check js/config.js`.
Un error ahí deja el sitio en blanco.

## Diseño

Colores, tipografías y espaciados están en las variables del inicio de
`css/styles.css`. Cambiando `--red` y `--black` cambia todo el sitio.

La paleta sale del isotipo de FAKECC: rojo `#E10613`, negro `#1A1A1A` y blanco.
`--red` se usa para superficies y gráficos, y `--red-ink` (#B0040F) para texto
sobre blanco; `--red-deep` es el estado `:hover` de los botones.

## Movimiento

Sin librerías:

- entradas al hacer scroll con `IntersectionObserver`
- contadores con `requestAnimationFrame`
- parallax de banners con `requestAnimationFrame`, desactivado en móvil
- cabecera compacta con un centinela de 1px
- todo se apaga si el sistema del usuario pide menos movimiento

## Publicación

Sitio estático: funciona en GitHub Pages o Cloudflare Pages sin configuración de
build. Directorio de salida: la raíz del proyecto. El `CNAME` apunta a
`fakeccconstructora.com`.

## Formulario

Usa Formspree. El endpoint está en `CONFIG.contacto.formspree`. Verifica que el
formulario esté activo en tu cuenta de formspree.io y que el correo de destino sea
el correcto.
