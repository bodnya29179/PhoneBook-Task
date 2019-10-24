var express = require("express");    //include express module

var bodyParser = require("body-parser");    //include body-parser module

var mysql = require('mysql');    //include mysql module

var cors = require('cors');    //include cors module

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

var mySqlConnection = mysql.createConnection({    //create a connection variable with the required details
	host: "localhost",
	user: "root",
	password: "",
	database: "phone_numbers"
});

mySqlConnection.connect((error) => {    //make to connection to the database
    if (!error) {
        console.log('[Contact_Info_Table] Database connection succeeded!');
    } else {
        console.log('[Contact_Info_Table] Database connection failed \n Error: ' + JSON.stringify(error, undefined, 2));
    }
});

app.post('/create', (req, res) => {    //create a new user's phone number in database
    let phonenumber = req.body;
    mySqlConnection.query('CALL CreateContact(?, ?, ?);', [phonenumber.user_name, phonenumber.user_surname, phonenumber.phone_number], (error, results, fields) => {
        if(!error) {
            res.send('Created successfully!');
        }
        else {
            return res.status(400).send({ message: error });
        }
    });
});

app.get('/', (req, res) => {    //get all user's phone numbers from database
    mySqlConnection.query('SELECT * FROM contact_info;', (error, results, fields) => {
        if(!error) {
            res.send(results);
        }
        else {
            return res.status(400).send({ message: error });
        }
    });
});

app.get('/:id', (req, res) => {    //get phone number by contact id from database
    mySqlConnection.query('SELECT * FROM contact_info WHERE contact_id = ?;', [req.params.id], (error, results, fields) => {
        if(!error) {
            res.send(results);
        }
        else {
            return res.status(400).send({ message: error });
        }
    });
});

app.put('/update', (req, res) => {    //update by id performer service in database
    let phonenumber = req.body;
    mySqlConnection.query('UPDATE contact_info SET user_name = ?, user_surname = ?, phone_number = ? WHERE contact_id = ?;', [phonenumber.user_name, phonenumber.user_surname, phonenumber.phone_number, phonenumber.contact_id], (error, results, fields) => {
        if(!error) {
            res.send('Updated successfully!');
        }
        else {
            return res.status(400).send({ message: error });
        }
    });
});

app.delete('/delete/:id', (req, res) => {    //delete by id service from database
    mySqlConnection.query('DELETE FROM contact_info WHERE contact_id = ?;', [req.params.id], (error, results, fields) => {
        if(!error) {
            res.send('Deleted successfully!');
        }
        else {
            return res.status(400).send({ message: error });
        }
    });
});

module.exports = app;    //export app object with CRUD functions
