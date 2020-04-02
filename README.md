# GeeksHubs-P5-ToDo

_El proyecto es un Backend, que estructura un ToDo, que consta de una metodología para la organización y designación de tareas, se podrán realizar:
 * consultas de las tareas y sus estados,
 * generar nuevas tareas,
 * eliminar tareas,
 * asignación de la tarea a un usuario._

## Comenzando 🚀

_Para obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas, necesitaras descargarlo y descomprimirlo. También te será necesario una herramienta que permita el envio de peticiones HTTP REST, como puede ser Postman._


### Pre-requisitos 📋

_Te será necesario descargar el proyecto y una herramienta que te permita el envio de peticiones HTTP REST, aunque si solo vas a realizar consutas GET podrás utilizar un navegardor web._


### Tecnologías🛠️

Programas utilizados para el desarrollo y pruebas del proyecto:

* [VSCode] - Editor de código usado - (https://code.visualstudio.com/).
* [Sequelize-cli] - Es un ORM Node.js.
* [Mysql] - Sistema de gestión de bases de datos relacional.
* [node.js] - Entorno multiplataforma para la capa del servidor.
* [Express-Generator] - Proporciona herramientas para servidores HTTP.
* [Postman] - Herramienta para el envio de peticiones HTTP REST.
* [GitHub] - Control de versiones.


### Instalación 🔧

Requiere [Node.js](https://nodejs.org/) v12+ para ejecutarse.

Una vez descargado, descomprimido y ubicado en el directorio del proyecto, instale las dependencias y devDependencies.

```sh
$ npm install -d
```

Inicie el servidor

```sh
$ npm start
```

Las instrucciones sobre cómo usarlas en su propia aplicación están vinculadas a continuación.
GitHub  [plugins/github/README.md][PlGh] 


#### Código

Conexión Base de Datos
```sh
{
  "development": {
    "username": "root",
    "password": null,
    "database": "dbtodo",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
```


Modelo tabla tarea
```sh
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    statusId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    //Una tarea pertenece a un estado
    Task.belongsTo(models.Status);

    //Una tarea pertenece a una categoria
    Task.belongsTo(models.Category);

    //Una tarea pertenece a un usuario
    Task.belongsTo(models.User);
  };
  return Task;
};
```



Controlador de la ruta que muestra todas las tareas
```sh
const TaskController = {
    getAll(req, res) {
        Task.findAll()
            .then(tasks => res.send(tasks))
            .catch(err => {
                console.log(err)
                res.status(500).send({
                    message: 'Ha habido un problema al cargar las tareas'
                });
            });
    }
}
```


Rutas para tarea
```sh
//Mostrar todas las tareas
router.get('/', TaskController.getAll);

//Mostrar una tarea por id
router.get('/id/:id', TaskController.getId);

//Crear una tarea
router.post('/', TaskController.insert );

//Modificar una tarea
router.put('/update/:id', TaskController.updateId);
```



## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/jocamo00/GeeksHubs-P5-ToDo.git)

## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/jocamo00/GeeksHubs-P5-ToDo.git).

## Autores ✒️

* **Jose Carreres** - *Todo el trabajo* - [jocamo00](https://github.com/jocamo00)

## Licencia 📄

Este proyecto está bajo la Licencia http://www.apache.org/licenses/LICENSE-2.0









