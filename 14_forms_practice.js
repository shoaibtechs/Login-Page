let form = document.querySelector("form");
let body =  document.querySelector('body');

form.addEventListener("submit", function(event){

    event.preventDefault();

    let user =  this.elements[0];
    let pass =  this.elements[1];

    if( user.value === "shoaib"   && pass.value === "1234")
    {
        console.log("Login Sucessfull");
        document.body.innerHTML = "";

        body.style.backgroundColor = "red";


        let h1 = document.createElement("h1");
        h1.classList.add("h1-center");
        h1.innerText = "Login Sucessfull ";
        
        body.appendChild(h1);

        
        





    }
    

    else{

        console.log("Wrong Password");
         document.body.innerHTML = "";

        body.style.backgroundColor = "red";


        let h1 = document.createElement("h1");
        h1.classList.add("h1-center");
        h1.innerText = "OOps Worong username or Password ";
        
        body.appendChild(h1);

    }
    
    

    
    
    
    
    
    
    
    console.log("Form Submitted");



});