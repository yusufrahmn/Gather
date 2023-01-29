var Info = {}
var checklogin ={}

function goRegister(){
    window.location.replace("register.html");
}

function getLocation(){
    const successCallback = (position) => {
        console.log(position);
        var coords = [position.coords.latitude, position.coords.longitude]
        Info.location = coords
        
    };
      
    const errorCallback = (error) => {
        console.log(error);
    };
      
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)    
}

function takeName(){
    Info.Name = document.getElementById('Name').value;
}



function takePassword(){

    var string1 = document.getElementById('Pass').value
    var string2 = document.getElementById('CPass').value

    if( string1.localeCompare(string2) == 0){
        Info.Password = document.getElementById('Pass').value
        errorMes.classList.remove("openErrorMessage")
    }else{
        errorMes.classList.add("openErrorMessage")
    }
}

function checkEmail(){
    checklogin.Email = document.getElementById('email').value
}
function checkPass(){
    checklogin.Password = document.getElementById('password').value
}

function backLogin(){
    window.location.replace("login.html");
}

function checkInfo(){
    console.log(Info)
}

function checkCheck(){
    console.log(checklogin)
}

function postRequest(){
    const options ={
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(Info)
    }
    fetch('api/users/',options);
}

function getRequest(){
    fetch('api/users/login')
  .then((response) => response.json())
  .then((data) => console.log(data));
}

/*function postRequest(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/users/login");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("RegisterInfo", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    let data = Info

    xhr.send(data);

}*/
