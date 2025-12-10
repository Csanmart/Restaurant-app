const {Sequelize} = require('sequelize');
import 'dotenv.config';

const sequelize = new Sequelize(
    process.env.DB, 
    process.env.ROOT, 
    process.env.PASSWORD,
    {
        host: process.env.LOCAL,
        dialect: "mysql",
        port: Number(process.env.PORT),
        logging: false
    }
);

export default sequelize;
