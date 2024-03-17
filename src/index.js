"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PostgresConnetion_1 = __importDefault(require("./config/PostgresConnetion"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('hello friend');
});
app.listen(PORT, () => {
    console.log(`This server is runing in http://localhost:${PORT}`);
});
PostgresConnetion_1.default.authenticate()
    .then(() => {
    console.log('conexion a la base de datos establecida con exito');
    return PostgresConnetion_1.default.sync();
})
    .then(() => console.log('tablas creadas con exito'))
    .catch(err => console.log('no se pudo conectar a la base de datos'));
