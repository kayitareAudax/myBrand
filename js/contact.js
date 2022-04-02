function validate(e){
    const error=document.getElementById("message");
    let body={success:false,message:""};
    e.preventDefault();
    console.log("called");
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const comment=document.getElementById("comment").value;
    let emailRegex=""
    if(!email || !name || !comment ){
        body={success:false,message:"please fill in all fields"};
    }
    else if(name.length<3 || name.length>30){
        body={success:false,message:"invalid name provided"}
    }
    
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        body={success:false,message:"invalid E-mail provided"}
    }
    else{
        body={success:true,message:"your comment is received"}
    }
    const validations=document.getElementById("validation");
    const {success,message}=body;
    error.innerHTML=message;
    if(success){
        const info={name,email,comment}
    localStorage.setItem("contactor",JSON.stringify(info));
        validations.style.display="block"
        validations.style.backgroundColor="#5cb85c"
    }
    else{
        localStorage.removeItem("contactor");
        validations.style.display="block"
    }
}