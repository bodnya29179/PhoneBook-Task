/* Include modules. */

var express = require("express");

var app = express();

var cors = require("cors");

var bodyParser = require("body-parser");

/* Loading route module. */

const contactInfoRoutes = require("./Routes/routes_contact_info");

/* Using included modules. */

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

/* Add catalog route to middleware chain. */

app.use("/contactinfo", contactInfoRoutes);

/* App listening on port. */

app.listen(3000, function() {
	console.log('API app started on localhost:3000!');
});