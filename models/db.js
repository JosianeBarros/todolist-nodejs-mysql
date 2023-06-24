const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', '012145', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw: true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
