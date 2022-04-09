const userInfo=localStorage.getItem("userInfo");
if(!userInfo){
    window.location.replace("./login.html");
}
else{
    const json=JSON.parse(userInfo)
    const desk=document.getElementById("desk");
    desk.innerHTML=`${json.username}'s desk`;
}