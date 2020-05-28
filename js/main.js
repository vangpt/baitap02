console.log(document.forms["register"]);
console.log(document.forms["register"]["username"].value);

document.forms["register"].addEventListener("submit", function (e) {
  e.preventDefault();
  const fields = {
    'username': this["username"].value,
    'email': this["email"].value,
    'phone': this["phone"].value,
    'password': this["password"].value,
    'repassword': this["repassword"].value,
  }
  let username = this["username"].value;
  let email = this["email"].value;
  let phone = this["phone"].value;
  let password = this["password"].value;
  let repassword = this["repassword"].value;
  const fieldRequired = ['username', 'email', 'phone','password','repassword']

  fieldRequired.forEach((value, key) => {
    if(!isRequired(fields[value])) {
      showAlert(value + ' không được để trống')
    }
  })

});
function isRequired(str) {
  if (str == "") {
    return false;
  } 
  return true;
}

function showAlert(mes) {
  alert(mes)
}

// function getValue(){
//   let username1 = document.getElementsByName("username").value;
//   if(username1 == ""){
//     document.getElementById("errorname").innerHTML = "Vui Lòng Nhập Giá Trị"
//   }
// }