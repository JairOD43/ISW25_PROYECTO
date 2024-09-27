# Movil_ISW25
## Instalación de paquetes
Los paquetes de node se pueden gestionar utilizando [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) y más recientemente [bun](https://bun.sh/), aunque este último solo compatible con sistemas UNIX.

Se puede identificar fácilmente un proyecto de node si tiene el archivo `package.json`, este archivo va a contener la configuración del proyecto, dependencias y scripts disponibles para ejecutar.

En esta documentación nos concentraremos en el manejador de paquetes `npm`.

## Comandos interesantes `npm`

1. Inicializar un proyecto desde cero.

   `npm init`

2. Instalar los paquetes definidos en el archivo `package.json`

   `npm install`

3. Instalar la ultima version de un paquete.

   `npm install [nombre-del-paquete]` ejemplo `npm install @react-navigation/native`

4. Instalar la version especifica de un paquete.

   `npm install [nombre-del-paquete]@[version]`

5. Instalar paquetes de forma global, usualmente se utiliza para lineas de comandos.

   `npm install -g [nombre-del-paquete]` ejemplo `npm install -g firebase-tools`

6. Instala paquete como dependencia de desarrollo.

   `npm install -D [nombre-del-paquete]`

7. Desinstalar un paquete (global, version especifica o local al proyecto).

   `npm uninstall [nombre-del-paquete]`

   `npm uninstall -g [nombre-del-paquete]`

   `npm uninstall [nombre-del-paquete]@[version]`

8. Borrar cache de NPM de tu equipo.

   `npm cache clean --force`

Si se desea conocer mas, ver la [documentación](https://docs.npmjs.com/) oficial.

## Expo

### Crear un proyecto de react-native con expo.

Para crear un proyecto de expo desde cero, lo mejor es utilizar la linea de comandos que ya nos proporciona `npm` que se llama `npx`.

Ejecutar el comando:

`npx create-expo-app my-first-project`

Una vez que haya finalizado el comando anterior ya puedes ejecutar el siguiente comando para iniciar la aplicación.

`npm run start` o `npx expo start`

Esto les mostrara un QR que hay que leer con la aplicación `Expo Go` disponible tanto para android como para ios. En la misma consola nos va a mostrar algunos comandos interesantes que podemos ejecutar presionando solo las teclas que nos dice ahí, por ejemplo si quisiéramos recargar se presiona la tecla `r`.

![](https://obsidiansoft.sfo2.digitaloceanspaces.com/course/expo-run.png)

Algunas veces pasa que queremos forzar la carga de la aplicación de expo, para ello tenemos que ejecutar o agregar la bandera `--clear` al comando para ejecutar la app. Es decir quedaría de la siguiente manera:

`npx expo start --clear`
