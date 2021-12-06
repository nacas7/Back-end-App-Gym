# API profesores
- GET /api/profesores
        - Recuperar todos los profesores y devolvernos como JSON
        HACER:
            - Modelo de profesores
            - Comprobar si la RUTA funciona. ¿Dónde está?
            - Método en el modelo que recupera todos los profesores
            - Ejecutar ese método dentro de la ruta

-POST /api/profesores
    -Insertar un profesor a partir de los datos incluidos en la petición.
    TO DO: 
        - En el Workbench, probamos la query de insercción sobre la tabla profesores.
        - En el modelo profesores desarrollamos método create a partir de la query anterior
        - Comprobamos si la RUTA funciona. ¿dónde esta?
        - Desde la ruta, llamamos a la función create -> Hay que pasarle los datos a través del BODY de la petición


-Recuperar al profesor por ID 
    - Método getById dentro del modelo de profesores

-DELETE /api/clientes/123

    -Borrar el cilente a partir de si ID
    -Método en el modelo de deleteById

- DELETE /api/profesores/123
    -Borrar el profesor a partir de su ID


- Además de recuperar el profesor pro ID, en la respuesta vamos a enviar todos los clientes de dicho profesor
    - TO DO:
        - Probar la query en el workbench
        - En el modelo de clientes método getByProfesor
        - Cuando recuperemos el profesor por ID (en la ruta), recuperamos también sus clientes

- GET /api/profesores/clientes -> Recupera toda la lista de profesores y los clientes asociados a cada uno de ellos

[
    {id: 1, nombre: "Pepe", experiencia:3, clientes:[{},{},{}]}
]

1- Recupero todos lo profesores. ¿Tengo un método que recupera todos los profesores?
2- Para cada uno de los profesores, recupero sus clientes. ¿Tengo una función que me recupera clientes a partir del profesor?


PUT /api/clientes/123

    - Actualizar un cliente (lo recuperamos desde la URL) con los datos que reciba del body