function  handleCreate(e){
    console.log("reached there");
    const error=document.getElementById("message");
    e.preventDefault();
    const title=document.getElementById("title").value
    const details=document.getElementById("details").value
    const content=document.getElementById("content")
    const image=document.getElementById("image").value
    console.log(title);
    if(!title || !details || !content || !image){
        body={success:false,message:"please fill in all fields"};
    }
    else if(title.length<3 || title.length>30){
        body={success:false,message:"invalid title provided"}
    }
    else if(details.length<10 || details.length>60){
        body={success:false,message:"invalid description provided"}

    }
    else if(content.length<30){
        body={success:false,message:"provide a descriptive blog"}
    }
    else{
        body={success:true,message:"your blog is written"}
    }
    const validations=document.getElementById("validation");
    const {success,message}=body;
    error.innerHTML=message;
    if(success){
        const info={title,details,content}
    localStorage.setItem("blog",JSON.stringify(info));
        validations.style.display="block"
        validations.style.backgroundColor="#5cb85c"
    }
    else{
        localStorage.removeItem("blog");
        validations.style.display="block"
    }
}