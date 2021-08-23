let signup = ()=>{

    let resturantname = document.getElementById("resturantname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let country = document.getElementById("Country").value
    let city = document.getElementById("City").value
 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log("login Successful");
      // ...
      firebase.firestore().collection("resturant").doc(user.uid).set({
         resturantname:resturantname,
         email:email,
         uid:user.uid,
         password:password
      })
      .then(function(){
        console.log("Data Successfull");
      })
      .catch(function(error) {
        console.log(error)
      })
      swal({
       title: "Good job!",
       text: "Successfully sign up",
       icon: "success",
       button: "next",
    }).then(() =>{
      location.href ="./login.html"
    })
    }) 
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error",errorMessage)
      swal("Oops!", errorMessage, "error");
      // ..
    });
   } 
 
 
 let login = () => {
     let email = document.getElementById("login-email").value
     let password = document.getElementById("login-password").value
 
     // console.log(email.value)
     // console.log(password.value)
 
     firebase.auth().signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
     // Signed in
     var user = userCredential.user;
     console.log("Login Successsfully")
     location.href = ("./dashboard.html")
     // ...
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log("error",errorMessage)
   });
 }