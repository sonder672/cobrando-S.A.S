# Prueba técnica para ingresar a COBRANDO S.A.S.

## ¿Cómo usar el servidor?
* Clone el proyecto **https://github.com/sonder672/cobrando-S.A.S.**
* Ejecute el comando **npm install**
* En la carpeta /postgreSQL ejecute el comando **docker-compose up -d**
* Consuma los endpoints (servicios) que se crearon a través de Postman o una herramienta de APIS 

### Endpoints que deben consumirse:
* GET http://localhost:1234/api/employee/:id (Lista un empleado con base en su ID)
* GET http://localhost:1234/api/employee (Lista todos los empleados)
* POST http://localhost:1234/api/employee (Crea un nuevo empleado)
```
{
    "code": 1,
    "name": "santiago",
    "nif": "123455",
    "surname": "largo",
    "second_surname": "diaz",
    "department_code": 1
}
```
* DELETE http://localhost:1234/api/employee/:id (Elimina un empleado con base en su ID)
* PATCH http://localhost:1234/api/employee/:id (Actualiza un empleado con base en su ID)
```
{
    "name": "santiagoooo",
    "nif": "123455",
    "surname": "largo",
    "second_surname": "diaz"
}
```

### Más información
_Se levantó un contenedor con PostgreSQL. Para poder correr el docker-compose, diríjase a la carpeta /postgreSQL y escriba en la terminal: docker-compose up -d. El comando también generará un script con la creación de tablas y una inserción._



