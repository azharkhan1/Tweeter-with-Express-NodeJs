
let userData = [];
let currentUser = [];


var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var morgan = require("morgan");

var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(cors());
server.use(morgan('dev'))


const PORT = process.env.PORT || 3000;



server.post("/signup", function (req, res, next) {
    let obj = req.body;
    console.log("body: ", req.body);
    res.send("Sign Up Successfully" + JSON.stringify(req.body));
    userData.push(obj);
});


server.get("/get", function (req, res, next) {
    res.send(userData);
});

server.post("/login", function (req, res, next) {

    let obj = req.body;
    // let found = false;

    res.send("" + JSON.stringify(userData[0].email) + "haha" + JSON.stringify(obj.email))
//     for (let i = 0; i < userData.length; i++) {
//         if (userData[i].email === obj.email) {
//             found = i;
//         }
//     }
//     if (found === false) {
//         res.send("Wrong password or email");
//     }
//     else if (userData[found] === obj.password) {
//         res.send("Login succesfully");
//     }
//     else {
//         res.send("Wrong password or email" );
//     }
})



server.listen(PORT, () => {
    console.log("server is runnin on port " + PORT);

})
