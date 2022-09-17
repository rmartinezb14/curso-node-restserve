const express = require('express');
var cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosPath="/api/usuarios";
        //Middleware: Es una funcion que siempre se ejecuta cuando levantamos nuestro servidor
        this.middleware();
        // Rutas de mi app
        this.routes();
    }
    middleware() {
        //CORS
        this.app.use(cors());
        // lectura y parseo del body
        /*Cualquier info que venga en el body de un post, put, o delete, la va a
        serializar en JSON*/
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }
    routes() {
      this.app.use(this.usuariosPath,require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port,()=>{
            console.log("Servidor corriendo en puerto",this.port);
        })
    }
}
module.exports = Server;