currentUser = localStorage.getItem("currentUser");
if(currentUser == null){
    window.location.replace("index.html");
}
else{
    currentUser = JSON.parse(currentUser);
    if(currentUser.email != localStorage.getItem("adminEmail") ||
       currentUser.password != localStorage.getItem("adminPassword")){
            window.location.replace("index.html");
    }
}
