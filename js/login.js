function checkInput(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = [];
    user = JSON.parse(window.localStorage.getItem("listUsers"));

    let indexLogin = user.findIndex(function (item){
        return item.email == email && item.password == password
    })
    console.log(indexLogin);
    if(indexLogin >= 0){
        alert("Login Success")
        window.location.href="../Home.html";
    }else{
        document.getElementById("errorpassword").innerText = "Sai tài khoản hoặc mật khẩu";
    }
    
    console.log(user)
}