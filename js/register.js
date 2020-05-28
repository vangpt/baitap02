function checkInput(){

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;

    let filterUsername =   /[A-Za-z]{6,}/;
	let filterEmail =  /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
	let filterPhone = /[0-9\+]{10,11}/
	let filterPassword = /([\w_\.-/@^]+){6,24}$/;

    if(username == ""){
        document.getElementById("errorusername").innerText = "Vui lòng nhập username";
        return false;
    }else{
        if(!filterUsername.test(username)){
            document.getElementById("errorusername").innerText = "Username phải là chữ tối thiểu 6 kí tự";
            return false;
        }else{
            document.getElementById("errorusername").innerText = "";
        }
    }
    if(email == ""){
        document.getElementById("erroremail").innerText = "Vui lòng nhập email";
        return false;
    }else{
        if(!filterEmail.test(email)){
            document.getElementById("erroremail").innerText = "Email không đúng định dạng";
            return false;
        }else{
            document.getElementById("erroremail").innerText = "";
        }
    }
    if(phone == ""){
        document.getElementById("errorphone").innerText = "Vui lòng nhập phone";
        return false;
    }else{
        if(!filterPhone.test(phone)){
            document.getElementById("errorphone").innerText = "SDT phải là số từ 10 - 11 kí tự có bao gồm +";
            return false;
        }else{
            document.getElementById("errorphone").innerText = "";
        }
    }
    if(password == ""){
        document.getElementById("errorpassword").innerText = "Vui lòng nhập password";
        return false;
	}
	else{
		if(!filterPassword.test(password)){
            document.getElementById("errorpassword").innerText = "Password phải là chữ dùng (. - / @ ^) dài từ 6-24";
            return false;
        }else{
            document.getElementById("errorpassword").innerText = "";
        }
	}
    if(repassword == ""){
        document.getElementById("errorrepassword").innerText = "Vui lòng nhập repassword";
        return false;
    }else{
		if(!filterPassword.test(password)){
            document.getElementById("errorrepassword").innerText = "Password phải là chữ dùng (. - / @ ^) dài từ 6-24";
            return false;
        }else{
			if(repassword != password){
				document.getElementById("errorrepassword").innerText = "Password không khớp";
				return false;
				
			}
            document.getElementById("errorrepassword").innerText = "";
            alert('Register Success')
            let user = {
               username,
               email,
               phone,
               password
            }
            let listUsers = [];
            listUsers = localStorage.getItem('listUsers') ? JSON.parse(localStorage.getItem('listUsers')) : [];
            
            listUsers.push(user)
            localStorage.setItem('listUsers', JSON.stringify(listUsers));
        }
    }
    
    


}