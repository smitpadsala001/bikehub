const registerForm=document.getElementById("registerForm");
if(registerForm){registerForm.addEventListener("submit",function(event){event.preventDefault();let valid=true;
const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim(),password=document.getElementById("password").value,confirmPassword=document.getElementById("confirmPassword").value,terms=document.getElementById("terms").checked;
document.querySelectorAll("small").forEach(e=>e.textContent="");
if(name===""){document.getElementById("nameError").textContent="Name is required.";valid=false;}
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){document.getElementById("emailError").textContent="Enter a valid email address.";valid=false;}
if(password.length<6){document.getElementById("passwordError").textContent="Password must contain at least 6 characters.";valid=false;}
if(password!==confirmPassword){document.getElementById("confirmError").textContent="Passwords do not match.";valid=false;}
if(!terms){document.getElementById("termsError").textContent="Please accept the terms.";valid=false;}
if(valid){localStorage.setItem("userName",name);localStorage.setItem("userEmail",email);alert("Registration successful!");window.location.href="login.html";}});}

const loginForm=document.getElementById("loginForm");
if(loginForm){loginForm.addEventListener("submit",function(event){event.preventDefault();const email=document.getElementById("loginEmail").value.trim(),password=document.getElementById("loginPassword").value;let valid=true;
document.getElementById("loginEmailError").textContent="";document.getElementById("loginPasswordError").textContent="";
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){document.getElementById("loginEmailError").textContent="Enter a valid email.";valid=false;}
if(password.length<6){document.getElementById("loginPasswordError").textContent="Password must contain at least 6 characters.";valid=false;}
if(valid){alert("Login successful!\\nWelcome to MotoVerse.");window.location.href="index.html";}});}
const showPassword=document.getElementById("showPassword");
if(showPassword){showPassword.addEventListener("click",function(){const password=document.getElementById("loginPassword");if(password.type==="password"){password.type="text";showPassword.textContent="🙈";}else{password.type="password";showPassword.textContent="👁";}});}
