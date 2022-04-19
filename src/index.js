const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3050

app.use(bodyParser.json());

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connection.end();