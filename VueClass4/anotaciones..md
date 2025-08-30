# Arrancando un proyecto de VUE

## Creo el template base para araancar a desarrollar

```sh
npm install # npm i
```


## Arranco el servidor de desarrollo

** IMPORTANTE ** Tengo que hacerlo dentro de la carpeta que tiene el package.json

```sh
npm run dev
```

## Detener el servidor de desarrollo

Ctrl + c

## La carpeta publica /public 

Permite guardar archivos estaticos que no van a ser intervenidos por Vite
Archivos jpg, mp3, mp4, ttf, woff, pdf, doc

## .gitignore
Es no guardar dentro del repositorio los archivos que mencione en el.

```sh
node_modules/ # Si dentro del archivo coloco los nodes_modules los va a descartar
```

## Estructura de archivos

*  .vscode -> configuraciones de visual studio code
* node_modules -> dependencias del proyecto que necesito para desarrollar y que funcione.
* public -> carpeta de recursos estaticos, no intervenidos por vite.
* src -> codigo fuente de la aplicacion
* .gitignore -> ignora archivos que quiero no sean parte del repositorios
* src/assets - son intervenidos por vite.
* src/components - va a tener los componentes creados por la empresa, son estructuras minimas para la contruccion de interfaces, son los bloques quew nos permite contruir una aplicacion.
* main.js Index.html va a llamar al main y va a crear la applicacion vue


## Agregabndo la libreria de bootstyrap

<https://getbootstrap.com/>

```sh
npm i bootstrap
npm 

