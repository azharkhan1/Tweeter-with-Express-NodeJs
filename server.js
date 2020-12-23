
let usersData = [
{
    userEmail: "azhar40@live.co.uk",
    userPassword: "azharkhan",
    userName: "Azhar khan",
},
]
var currentUser;

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


server.post("/signup", (req, res, next) => {

    var currEmail = req.body.userEmail;
    var found = false;

    for (var i = 0; i < usersData.length; i++) {
        if (usersData[i].userEmail === currEmail) {
            found = true;
            break;
        }
    }
    if (found) {
        res.send("User Already Exist")
    }
    else {
        usersData.push(req.body);
        res.send("Signup Successully");
    }
    console.log(usersData);

});

server.post("/login", function (req, res, next) {

    let obj = req.body;
    let found = false;

 for (var i = 0; i < usersData.length; i++) {
        if (usersData[i].userEmail === obj.email) {
            found = i;
            currentUser = found;
            break;
        }
    }
    if (found === false) {
        res.send("Email or password is wrong")
    }
    else if (usersData[found].userPassword === obj.password ){
         res.status(200).send("Signed in  Succesfully");
    }
    else{
            res.send("Email or password is wrong");
    }
})

server.get("/successfullSignup", (req,res,next)=>{

    res.send("signed up succesfully" + JSON.stringify(usersData));

});



server.listen(PORT, () => {
    console.log("server is runnin on port " + PORT);

})
