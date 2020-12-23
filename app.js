
const signup = () => {

    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value
    var userName = document.getElementById("name").value


    let obj = {
        userEmail: userEmail,
        userPassword: userPassword,
        userName: userName,
    };


    console.log(obj);

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.1.101:3000/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    window.location.href = "login.html";
    return false;
}

const check = () => {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value

    obj = {
            email : email,
            password : password,
    }
    console.log(obj);

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.1.101:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    // window.location.href = "dashboard.html";
    return false;

}

const signupSuccesfully = ()=>{


    console.log("its running")
    let userData;

    
    const Http = new XMLHttpRequest();
    const url = "http://192.168.1.101:3000/successfullSignup";
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

    // document.getElementById("loginemail").innerHTML = userData[index].userEmail;
    // document.getElementById("name").innerHTML = userData[index].userName;
    
}


const logout = () => {
    window.location.href = "login.html";
}
// DONE WITH IT