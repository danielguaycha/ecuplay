# Frontend

La carpeta `src` contiene todos los archivos para construir el sitio, todos los estilos se están haciendo con Sass, la carpeta `static` contiene las imágenes, fuentes y otros archivos que son estáticos para el sitio, la carpeta `partials` contiene fragmentos de código HTML que se reusara en todas las demás paginas y en la carpeta `js` se encuentran todas la librerías o scripts custom que necesitara el sitio.

Todo el entorno de desarrollo de frontend se centra en `app.js` revisar eso, alli se incluyen archivos css, imagenes y otros para poder usar en las plantillas como por ejemplo el `ìndex.hbs` (Por hadlebars: Sirve para reusar fragmentos de codigo)

## Comandos para iniciar el entorno de desarrollo y producción

Comando para iniciar el servidor de desarrollo en modo localhost

```bash
yarn start o npm start
```

Comando para iniciar el entorno de desarrollo en una ip, debes modificar la ip en el archivo `package.json` en la sección de `scripts`

```bash
yarn run dev o npm run dev
```

Comando para construir el build final que se usara en el backend

```bash
yarn run build o npm run build
```



## Indicaciones

Para los estilos con `sass` seguir la estructura, usar las `variables` los `mixins` (para el responsive)

