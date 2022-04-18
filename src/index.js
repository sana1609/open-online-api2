const mysql = require('mysql');
const express = require('express');

const app = express();

app.use(bodyParse().json());

const connection = mysql.createConnection({
    host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user     : 'bsale_test',
    password : 'bsale_test',
    database : 'bsale_test'
});


connection.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log('succesful connection');
    }
});

connection.query('SELECT * from product', function(error, result, fields) {
    if(error)
    throw error;

    result.forEach(res => {
        console.log(res);
    });
})

connection.end();