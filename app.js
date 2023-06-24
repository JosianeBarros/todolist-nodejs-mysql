const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Lista = require('./models/lista');


// Template Engine
app.engine('handlebars',handlebars.engine({defautLayout: 'main',
    runtimeOptions: {
              allowProtoPropertiesByDefault: true,
        
              allowProtoMethodsByDefault: true,
            }}))
    app.set('view engine', 'handlebars')


// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    Lista.findAll({order: [['id', 'DESC']]}).then(function(listas){
        res.render('index', {listas: listas})
    })
    })

app.post('/tarefas', function(req, res){
    Lista.create({
        tarefas: req.body.tarefas
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Aconteceu um erro: ' + erro)
    })
})


app.post('/editar/:id', function(req, res){
    Lista.update({tarefas: req.body.atualizar}, {where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        console.log(erro)
    })
})


app.get('/apagar/:id', function(req, res){
    Lista.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Esta postagem não existe')
    })
})

app.listen(8083, function(){
    console.log('Servidor rodando')
})
