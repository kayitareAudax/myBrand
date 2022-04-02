function handleComment(e){
    e.preventDefault();
    if(!localStorage.getItem("userInfo")){
        return window.location.replace("/login.html")
    }
    const comment=document.getElementById("comment").value;
    const error=document.getElementById("error")
    console.log(comment);
        if(comment.length<5){
            error.innerHTML="invalid comment given"
        }
        else{
            localStorage.setItem("comment",)
        }
}