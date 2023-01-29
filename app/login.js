var Info = {}
var checklogin ={}
var userInfo

function goRegister(){
    window.location.replace("register.html");
}
function postRequestRegister(){
    const options ={
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(Info)
    }
    fetch('api/users/',options)
        .then(res => res.json())
        .then(data => console.log(data))
    userInfo.Name  = data.name
    userInfo.Token = data.token
}

function getLocation(){
    const successCallback = (position) => {
        console.log(position);
        var coords = [position.coords.latitude, position.coords.longitude]
        Info.location = coords
        postRequestRegister();
        
    };
      
    const errorCallback = (error) => {
        console.log(error);
    };
      
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)    
}

function takeName(){
    Info.name = document.getElementById('Name').value;
}



function takePassword(){

    var string1 = document.getElementById('Pass').value
    var string2 = document.getElementById('CPass').value

    if( string1.localeCompare(string2) == 0){
        Info.password = document.getElementById('Pass').value
        errorMes.classList.remove("openErrorMessage")
    }else{
        errorMes.classList.add("openErrorMessage")
    }
}

function takeEmail(){
    Info.email = document.getElementById('newEmail').value
}

function checkEmail(){
    checklogin.email = document.getElementById('email').value
}
function checkPass(){
    checklogin.password = document.getElementById('password').value
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

function postLogin(){
    var status = 0
    const options ={
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(checklogin)

    }
    fetch('api/users/login',options)
        .then(res => {
            status = res.status
            console.log(status)
            if(status == 200){
                console.log("hi")
                window.location.replace("dashboard.html")
                rightPass()
                
            }else{
                wrongPass()
            }
            res.json() .then(data => console.log(data))
            userInfo.Name = data.name
            userInfo.Token = data.token
        })
            
        

    

    

}

function wrongPass(){
    loginErrorMessage.classList.add("openErrorMessage")
}


function rightPass(){
    loginErrorMessage.classList.remove("openErrorMessage")
}

 