const app = require("express").Router()

app.get('/', (req, res, next)=>{
    res.render('index', { title: 'Marx' });
  });

module.exports = app