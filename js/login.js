function validate(e){
    e.preventDefault();
    const dummyCredentials={password:"kayitare@123",username:"kayitare123"}
    const error=document.getElementById("message");
    let body={success:false,message:""};
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