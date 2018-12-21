var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();

//tiny can be used for less information
//combined for more information
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '..','public')));
app.use('/css',express.static(path.join(__dirname, '..','node_modules', 'bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname, '..','node_modules', 'bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname, '..','node_modules', 'jquery/dist')));

/**
 * 
 */
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    // res.send('hello from my library');
})

app.listen(3000, function(){
    debug('listening on a port '+chalk.green('3000'));
});