import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS, 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        underscored: true,
        timestamps: true,
        underscoredAll: true
    }
});

export default sequelize;
