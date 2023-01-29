const form = [...document.querySelector('.form').children];

form.ForEach((item,i)=>{
    setTimeout(()=>{
        item.style.opacity = 1;
    }, i*100);
})


//const usrName = document.quertSelector('.usrName') || null;
//const password = document.querySelector('.password');
//const address = document.querySelector('.address');
//const submit = document.querySelector('.submit');
//const {mongo} = require('index.js')


if(usrName == null){

}else{
    submit.addEventListener('click', () => {
        fetch('/register', {
            method:'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                usrName: usrName.value,
                password: password.value,
                address: address.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            const collection = mongo.db("GatherDB").collection("Users");
            collection.insertOne({
                usrName: usrName


            })
            
          
        })
    })
    }
    
