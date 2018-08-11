//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//EXPRESS
var app = express();
var PORT = process.env.PORT || 3000;

//Handles parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//CURRENT RESERVATION DATA
var reservations =[
   {
       name: "",
       phoneNum: "",
       email: "",
       username: ""
   },
   {
       name: "",
       phoneNum: "",
       email: "",
       username: ""
   },
   {
       name: "",
       phoneNum: "",
       email: "",
       username: ""
   },
   {
       name: "",
       phoneNum: "",
       email: "",
       username: ""
   },
   {
       name: "",
       phoneNum: "",
       email: "",
       username: ""
   }
];

//WAITING LIST DATA
var waitingList = [
   {
       name: "",
       phoneNum: "",
       email: "",
       username: ""
   }
];

// ROUTES FOR AJAX
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
})


//DISPLAY ALL DATA FOR RESERVATIONS (5 SEATED AT ONCE)
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
})

//DISPLAY ALL DATA FOR WAITING LIST
app.get("/api/waitingList", function(req, res) {
    return res.json(waitingList);
});

//ADD DATA TO TABLES (JSON INPUT)
app.post("/api/waitingList", function(req, res) {
    var newguest = req.body;

    newguest.routeName = newguest.name.replace(/\s+/g, "").toLowerCase();

    console.log(newguest);

    waitingList.push(newguest);

    res.json(newguest);
});

//START SERVER TO LISTEN
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
});