const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//guardamos la conexion
let connection;
//creamos la conexión
mysql
    .createConnection({
        host: "sql.freedb.tech",
        database: "freedb_Proyectos molones",
        user: "freedb_root adalab",
        password: "Bxatj4QVAK%g#CH",
})
    .then((conn) => {
        connection = conn;
    connection
        .connect()
        .then(() => {
        console.log("Conectado con el identificador " + connection.threadId);
        })
        .catch((err) => {
        console.error("Error de conexion: " + err.stack);
        });
    })
    .catch((err) => {
    console.error("Error de configuración: " + err.stack);
    });

// create and config server
const server = express();
server.use(cors());
//para especificar el tamañ de intercambio de archivos
server.use(express.json({limit:"10mb"}));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

//Endpoints
//server.metodo(ruta,funcion)
//listar proyectos
//req:información de la petición
//res:enviar una repuesta del endpoint
server.get("/api/projects/all", (req, res) => {
    console.log("Pidiendo a la base de datos información de los proyectos.");
    let sql = 'SELECT * FROM projects, autors WHERE projects.fkAutor = autors.idautors'
    connection
        .query(sql)
        .then(([results, fields]) => {
        console.log("Información recuperada:");
        results.forEach((result) => {
            console.log(result);
        });
        res.json(results);
    })
        .catch((err) => {
        throw err;
    });
});

server.post("/api/projects/add", (req, res) => {
    const data = req.body;
    console.log(data);

    let sqlAutor="INSERT INTO autors (autor,job,image) values (?,?,?)";
    let valuesAutor = [data.autor, data.job, data.image];
    
    connection
        .query(sqlAutor, valuesAutor)
        .then(([results]) => {
            let sqlProjects = "INSERT INTO projects (name,slogan,technologies,demo,repo,`desc`,photo,fkAutor) VALUES(?,?,?,?,?,?,?,?)";
            let valuesProject = [data.name,data.slogan,data.technologies,data.demo,data.repo,data.desc,data.photo,results.insertId];
            connection
                .query(sqlProjects, valuesProject)
                .then(([results, fields]) => {
                    let response ={
                        success:true,
                        cardURL:`http://localhost:4000/api/projects/${results.insertId}`
                    }
                    res.json(response);
            })
        })
        .catch((err) => {
            throw err;
        });
})