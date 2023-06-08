import { Sequelize } from "sequelize";

const db = new Sequelize('blogs', 'root', '26734078', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db