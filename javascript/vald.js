document.addEventListener('DOMContentLoaded',()=>{
const savedpassword=localStorage.getItem("masterpassword");
const title1=document.querySelector('.pass-title');
const submit=document.querySelector('.submit-butn');

if(!savedpassword){
  title1.innerText='Set 4-Digit Password';
  submit.addEventListener('click',setpass);
}
else{
  title1.innerText='Enter Your Saved Password';
  submit.addEventListener('click',vaildpass);
}
});

function setpass(){
  const password =document.querySelector('.password-input').value;
  if(password.length===4){
    localStorage.setItem('masterpassword',password);
    window.location.reload();
  }
  else{
    document.querySelector('.alert-msg').innerText='Enter a vald 4-digit password';
  }

}

function vaildpass(){
  const inputpassword=document.querySelector('.password-input').value;
  const savedpassword=localStorage.getItem('masterpassword');
  if(inputpassword===savedpassword){
    window.location.href="../home.html";

  }
  else{
    document.querySelector('.alert-msg').innerText="Incorrect Passord";
  }
}