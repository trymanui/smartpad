
const saver=JSON.parse(localStorage.getItem("savedpass"))||[];
window.onload=()=>{
  const editentry=JSON.parse(localStorage.getItem('editentry'));
  if(editentry){
    document.getElementById('user').value=editentry.user||" ";
    document.getElementById('password').value=editentry.password||" ";
    document.getElementById("desp").value=editentry.desp||"";
    localStorage.removeItem("editentry");
  }
};

document.querySelector('.store').addEventListener("click",()=>{
const user=document.getElementById('user').value;
const password=document.getElementById('password').value;
const desp=document.getElementById('desp').value;
//const desp=desp1.trim==="" ? "NO DESCRIPTION" : desp1;
if(!user || !password) 
  document.querySelector(".alert").innerHTML="! Please Enter Values For Storing";
else{
saver.push({
user,
password,
desp
});
localStorage.setItem("savedpass",JSON.stringify(saver));
document.getElementById('user').value='';
document.getElementById('password').value='';
document.getElementById('desp').value='';
console.log(saver);
}
});

document.getElementById('homebtn').addEventListener('click',()=>{
  if(!window.location.href.includes("home.html"))
    window.location.href="home.html";
});

document.getElementById('savebtn').addEventListener('click',()=>{
if(!window.location.href.includes("saved.html"))
  window.location.href="saved.html";
});


