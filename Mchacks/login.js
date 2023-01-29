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

"ab".lo

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



function checkInfo(){
    console.log(Info)
}

function checkCheck(){
    console.log(checklogin)
}

/*function subLogin(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", /*filename, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText

}*/
