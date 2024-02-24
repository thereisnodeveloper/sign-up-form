

//TODO:make a hover popup


const matchPassword = function(e){
    const password = document.querySelector("#pwd")
    const passwordConfirm = document.querySelector("#pwd-confirm")
 
 
    const basicInfoForm = document.querySelector(".basic-info")
   //  e.preventDefault()
 if(password.value === passwordConfirm.value){
 console.log("passwords  match");
 //FIXME:
 basicInfoForm.submit()
 return "match"
 }else{
    alert("passwords dont match")
 }
 }
 
 
 
 
 //Event Listener
 
 
 const submitButton = document.querySelector(".submit-button")
 submitButton.addEventListener("click", matchPassword)
 
 
 