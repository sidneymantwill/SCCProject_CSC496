const mysql = require('mysql');
const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const app = express();

/*
fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(req, res) {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    }).listen(PORT);
    console.log('Connected');
});
*/

app.listen(PORT, () =>{
    console.log('Server Started');
});

// connect to database
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Dragon!1073',
    database : 'pa_area_codes'
});
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected');
});
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));

    var search;
    var prompt;
    var cont = true;
        readline.question('Enter PA area code: ', (search) => {
            db.query('SELECT area FROM area_codes WHERE code = ' + search, (err, result) => {
                if(err) throw err;
                console.log(result); 
            });
            readline.close();
        });
});


/*
app.get('/aaa', (req, res) => {
    var objs = [];
    var json;
    sql = 'SELECT * FROM area_codes';
    db.query(sql, (err, results) => {
        if(err) throw err;
        for(var i=0; i<results.length; i++){
            objs.push({code: results[i].code, area: results[i].area});
            //objs.push({code: results[i].code});
            //console.log(results[i].code + ' ' + results[i].area);
        }
        //console.log(JSON.stringify(objs));
        //console.json
        //res.send(objs);

        fs.exists('areacodes.json', (exists) => {
            if(exists){
                //console.log('json exists');
                fs.readFile('areacodes.json', function readFileCallback(err, result){
                    if(err) throw err;
                    //objs = JSON.parse(result);
                    json = JSON.stringify(objs);
                    fs.writeFile('areacodes.json', json, function(err, result) {
                        if(err) throw err;
                        //res.send('json modified');
                        //console.log(json);
                    });
                })
            }
            else{
                console.log('json not exist');
                json = JSON.stringify(objs);
                fs.writeFile('areacodes.json', json, function(err, result) {
                    if(err) throw err;
                    //res.send('json created');
                });
            }
        })
    })
    $.each(json, function(i, option) {
        $('#dropdown').append($('</option/>').attr("value", json[i]).text(option.code));
    });

    
});
*/

// testing
app.get('/listcodes', (req, res) => {
    let sql = 'SELECT code FROM area_codes';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    })
});
app.get('/listareas', (req, res) => {
    let sql = 'SELECT area FROM area_codes';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    })
});
app.get('/listboth', (req, res) => {
    let sql = 'SELECT * FROM area_codes';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    })
});

