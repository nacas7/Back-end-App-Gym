## VISTAS!!

- En layout.pug vamos a crear  un menú que me permita navegar por todas las rutas

- En cada una de las vistas de clientes vamos a extender de layout.pug

###

/clientes/IDCLIENTE
    - Renderiza la vista/ views/clientes/show.pug
        -1 Recuperar el cliente por ID (req.params). ¿hay un método ya desarrollado que nos recupere el cliente por ID?
        -2 Pasamos el cliente a la vista
        -3 Mostramos los datos del cliente en la vista


###
-GET /clientes/new
    -Renderizar el formulario
    -Dentro de la vista formulario
    - 2 Props del from:


###

-GET /clientes/delete/IDCLIENTE
    - Recuperamos de la URL el id del cliente y borramos de la BD
    - Una vez borrado redirigimos a al lista de clientes
    - Creamos un botón en la lista del cliente que nos permita borrarlos -> un link a/clientes/delete/ELIDQUESEA