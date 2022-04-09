let body={success:false,message:""};
const error=document.getElementById("message");
function validate(e){
    e.preventDefault();
    const dummyCredentials={username:"kayitaredax",password:"kayitare123"}
    const username=document.getElementById("username").value
    const password=document.getElementById("pass").value
    console.log(username);
    if(!username || !password){
        body={success:false,message:"please fill in all fields"};
    }
    else if(username!=dummyCredentials.username){
        body={success:false,message:"incorrect username given"};
    }
    else if(password!=dummyCredentials.password){
        body={success:false,message:"incorrect password provided"}
    }
    else{
        body={success:true,message:"you are now logged in"}
    }
    const validations=document.getElementById("validation");
    const {success,message}=body;
    error.innerHTML=message;
    if(success){
        const info={username}
    localStorage.setItem("userInfo",JSON.stringify(info));
        validations.style.display="block"
        validations.style.backgroundColor="#5cb85c"
        window.location.replace("/dashboard.html")
    }
    else{
        localStorage.removeItem("userInfo");
        validations.style.display="block"
    }
}
function signup(e){
    e.preventDefault();
    console.log("reached");
    const email=document.getElementById("email").value
    const username=document.getElementById("username").value
    const password=document.getElementById("password").value
    const comfirm=document.getElementById("comfirmPassword").value
    console.log(password,comfirm);
    if( !email || !username || !password || !comfirm){
        body={success:false,message:"fill in all fields"};
    }
    else if(password !=comfirm){
        body={success:false,message:"passwords do not match"};
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        body={success:false,message:"invalid E-mail provided"}
    }
    else if(password.length<6){
        body={success:false,message:"weak password given"};
    }
    else if(username.length<3){
        body={success:false,message:"a weak username is provided"}
    }
    else if(username.length>30){
        body={success:false,message:"a long username is provided"};
    }
    else{
        body={success:true,message:"u have signed up"}
    }
    const validations=document.getElementById("validation");
    const {success,message}=body;
    error.innerHTML=message;
    if(success){
        const info={username,email}
        localStorage.setItem("userInfo",JSON.stringify(info));
        validations.style.display="block"
        validations.style.backgroundColor="#5cb85c"
        window.location.replace("/dashboard.html")
    }
    else{
        localStorage.removeItem("userInfo");
        validations.style.display="block"
    }
}