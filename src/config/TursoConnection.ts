// db.ts
import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://projects-portfolio-alej212.turso.io",
  authToken: "73c46c5d-551b-4ece-8ad8-78922e520fbe",
});

// Prueba la conexión a la base de datos
client.execute('SELECT 1')
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));

export default client;