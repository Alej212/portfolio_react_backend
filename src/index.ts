import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import PostgresConnection from "./config/PostgresConnetion";
import router from "./routes";

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.send('hello friend')
})

app.listen(PORT, () => {
    console.log(`This server is runing in http://localhost:${PORT}`)
})

PostgresConnection.authenticate()
    .then(() => {
        console.log('conexion a la base de datos establecida con exito')
        return PostgresConnection.sync();
    })
    .then(() => console.log('tablas creadas con exito'))
    .catch(err => console.log('no se pudo conectar a la base de datos'))
