# Construcción de API Rest - NodeJS / Typescript

Typescript es un superset de Javascript que ofrece caracteristicas adicionales como la posibilidad
de brindar un tipado estático en la definición de variables, el uso de clases e interfaces, propias
de un lenguaje tipado.

## Prerequisitos

### Asegurese de tener NodeJs instalado
### Tener conocimiento básico de Typescript
### Estar familiarizado con Node.js y como usar librerias como Express.js


## Instalando Typescript

A diferencia de Javascript, Typescript no corre directamente en el navegador, para ejecutar cualquier
codigo escrito en Typescript necesitas un compilador que compile Typescript en Javascript. Instalaremos
Typescript desde npm usando el siguiente comando:

```
npm install -g typescript
```

Adicionando la bandera (-g) para instalar el paquete globalmente asegura que Typescript esta disponible
en cualquier proyecto Node.js

## Paso 1: Inicializando Node.js

Para iniciar un proyecto Node.js, crea la carpeta del proyecto y ejecuta 
```
npm init -y
```
Esto creará el archivo (package.json) que guardará cualquier dependencia instalada para tu proyecto.


## Paso 2: Instalar las dependencias del proyecto

En esta aplicación vamos a usar las siguientes librerias de Node.js

### Typescript
### Ts-node
### Express
### @types/express
### Morgan
### @types/morgan
### Axios
### @types/axios
### Nodemon

Para instalar todas estas librerias, ejecuta el siguiente comando:
```
npm install typescript ts-node express @types/express morgan @types/morgan axios @types/axios nodemon
```

## Paso 3: Inicializa Typescript

Para ejecutar Typescript con Node.js, necesitas el archivo (tsconfig.json) que establece toda la configuración
requerida para correr Typescript, puedes crear el archivo manualmente o correr el comando:

```
tsc --init
```
Para generar un simple archivo tsconfig.json en la raiz de tu proyecto


## Paso 4: Configura el tsconfig.json

Este es el archivo de configuración del compilador Typescript con opciones que especifican argumentos que 
simplifican la compilación de Typescript y el pipeline de ejecución.

Asegurate de que tu archivo luzca así:

```javascript
{
    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "module": "commonjs",
        "esModuleInterop": true,
        "outDir": "./build",
        "rootDir": "./source",
        "target": "es6",
        "skipLibCheck": true,
        "strict": true
    }
}
```

## Paso 5: Modifica package.json

Modifica el indice main y scripts con los siguientes valores:

```javascript
    "main": "src/server.ts",
    "scripts": {
        "dev": "cross-env nodemon src/server.ts",
        "build": "rm -rf build/ && prettier --write src/ && tsc"
    },
```

Esto configura el comando para construir y compilar el archivo .ts a .js. En este caso, podemos tambien
iniciar el servidor de desarrollo usando el comando:

```
npm run dev
```


## Paso 6: Configura la estructura de la aplicación

Tus archivos de proyecto y subdirectorios deben estar configurados como se muestra a continuación:

```
|   package-lock.json
|   package.json
|   tsconfig.json
\---source
    |   server.ts
    \---controllers
    |       posts.ts
    \---routes
            posts.ts
```


## Paso 7: Iniciando el servidor de desarrollo

Iniciar el servidor de desarrollo ejecutando:

```
npm run dev
```
