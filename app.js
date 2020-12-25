

  const url = 'https://azharregisterform.herokuapp.com';
// const url = "http://localhost:3000";
let currentUser;

if (currentUser===undefined || currentUser === null)
{
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
}



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
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        let jsonRes = JSON.parse(Http.responseText)
        
        if (jsonRes.status === 200)
        {
                alert(jsonRes.message);
                window.location.href = "login.html";
        }
        else {
                alert(jsonRes.message);
        }
    }
   
    return false;
}

const check = () => {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value

    obj = {
        email: email,
        password: password,
    }
    console.log(obj);

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange = (e) => {

        if (Http.readyState === 4)
        {

        
        console.log(Http.responseText);
        let jsonRes = JSON.parse(Http.responseText);

        if (jsonRes.status === 200) {
            alert(jsonRes.message);
            localStorage.setItem("currentUser",jsonRes.currentUser);
            console.log(currentUser);
            window.location.href = "dashboard.html";
        }
        else{
                alert(jsonRes.message);
        }
    }
}
    return false;

}

const signupSuccesfully = () => {

    console.log("its runningahaha");
    const Http = new XMLHttpRequest();


    Http.open("GET", url + "/successfullSignup");
    Http.send();
    Http.onreadystatechange = (e) => {

        let data = JSON.parse((Http.responseText));
        console.log(data);
        document.getElementById("loginemail").innerHTML = data[currentUser].userEmail;
        document.getElementById("name").innerHTML = data[currentUser].userName;
    }



}


const logout = () => {
    window.location.href = "login.html";
}
// DONE WITH IT