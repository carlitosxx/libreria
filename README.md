## No olvides agregar al index el nuevo archivo creado, guardar todos los cambios y Generar el build
* yarn build
## Realizar el push del cambio
* git add . 
* git commit -m "fix dto create address"
* git push
## Luego ir al proyecto de Gateway y al ms implicado para que use la libreria y eliminar de NodeModules "librerias",Luego instalar de nuevo:
* yarn add https://github.com/carlitosxx/libreria.git
## Esto actualizara los cambios en ambos proyectos, los siguientes comandos es por si la "librerias" no se quiere descargar
rm -rf node_modules yarn.lock
yarn cache clean
NODE_OPTIONS="--max-old-space-size=8192" yarn install
NODE_OPTIONS="--max-old-space-size=8192" yarn add https://github.com/carlitosxx/libreria.git