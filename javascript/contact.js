document.getElementById('homebtn').addEventListener('click',()=>{
  if(!window.location.href.includes("home.html"))
    window.location.href="../home.html";
});

document.getElementById('savebtn').addEventListener('click',()=>{
if(!window.location.href.includes("../saved.html"))
  window.location.href="../saved.html";
});

document.querySelector('.reset').addEventListener('click',()=>{
window.location.href="../home.html";
});

          