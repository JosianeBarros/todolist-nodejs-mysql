const db = require('./db')

// Cria uma tabela com as colunas especificadas
const Lista = db.sequelize.define('list', {
    tarefas: {
        type: db.Sequelize.STRING
    },
    completado: {
        type: db.Sequelize.BOOLEAN
    }

})

// Adiciona a tabela no banco de dados
//Lista.sync({force: true})

module.exports = Lista