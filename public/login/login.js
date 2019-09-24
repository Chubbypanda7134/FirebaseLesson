let signUpBtn = document.getElementById("signUpBtn");
let loginBtn = document.getElementById("loginBtn");
let signOutBtn = document.getElementById("signOutBtn");

signUpBtn.addEventListener('click', function(){
    let email = document.getElementById("signUpEmail").value;
    let pw = document.getElementById("signUpPw").value;
    firebase.auth().createUserWithEmailAndPassword(email, pw).then(function(){
        console.log("success");
    }).catch(function(error){
        console.log(error);
    })
})

loginBtn.addEventListener('click', function(){
    let email = document.getElementById("LoginEmail").value;
    let pw = document.getElementById("loginPw").value;
    firebase.auth().signInWithEmailAndPassword(email, pw).then(function(){
        console.log("success");
    }).catch(function(error){
        console.log(error);
    })
})

signOutBtn.addEventListener('click', function(){
    firebase.auth().signOut().catch(function(error){
        console.log(error);
    }).then(function(){
        console.log("success");
    })
})

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        console.log(user.uid);
    }
    else{
        console.log("no current user");
    }
})

let user = firebase.auth().currentUser;