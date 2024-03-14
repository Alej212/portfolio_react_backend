import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const PostgresConnection = new Sequelize(`${process.env.URI}`, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

export default PostgresConnection;