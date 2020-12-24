

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
    const url = 'https://azharregisterform.herokuapp.com/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    // window.location.href = "login.html";
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
    const url = 'https://azharregisterform.herokuapp.com/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    window.location.href = "dashboard.html";
    return false;

}

const signupSuccesfully = ()=>{

    console.log("its runningahaha");
    const Http = new XMLHttpRequest();

    const url = 'https://azharregisterform.herokuapp.com/successfullSignup';
    Http.open("POST", url);
    Http.send("jhjha");
    Http.onreadystatechange = (e) => {
       let data = JSON.parse((Http.responseText));
        console.log(data);
        document.getElementById("name").innerHTML= data.userName;
        document.getElementById("loginemail").innerHTML= data.usersEmail;


    }


    
}


const logout = () => {
    window.location.href = "login.html";
}
// DONE WITH IT