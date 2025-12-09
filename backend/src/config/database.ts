const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    "restaurante", 
    "root", 
    "",
    {
        host: "localhost",
        dialect: "mysql",
        port: Number(3306),
        logging: false
    }
);

export default sequelize;
