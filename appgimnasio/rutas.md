### RUTA CLIENTES

GET /api/clientes -> Recupera todos los clientes y los devuelve en JSON

GET /api/clientes/IDCLIENTE -> Recupera el cliente a través de si ID. Si el cliente no existe nos marca un error

POST /api/clientes -> Crea un nuevo registro en la tabla de clientes y retorna los datos del nuevo cliente

PUT /api/clientes ->

DELETE /api/clientes/IDCLIENTE -> Borra el ciente a través de su ID


HACER LOS MISMO DE LA RUTA PROFESORES


### RUTA PROFESORES

GET /api/profesores
-> recupera todos los profesores

GET /api/profesores/clientes
-> Recupera la lista de profesores con sus asociados

//CONTINUAR VIENDO EL RESTO DE RUTAS