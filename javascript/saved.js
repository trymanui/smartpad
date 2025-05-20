let saveddata=JSON.parse(localStorage.getItem('savedpass'))||[];

//switchng blw pages
document.getElementById('homebtn').addEventListener('click',()=>{
  if(!window.location.href.includes("home.html"))
    window.location.href="home.html";
});

document.getElementById('savebtn').addEventListener('click',()=>{
if(!window.location.href.includes("../saved.html"))
  window.location.href="saved.html";
});

document.querySelector('.fa-headset').addEventListener('click',()=>{
window.location.href="contact.html";
});

function renderelist(){
let listhtml=' ';
for(let i=0;i<saveddata.length;i++){
  const saved=saveddata[i];
  const html=`<div class="box">
  <div class="main">
 <div class="name">${saved.user}</div>
  <p>
  <i class="fa fa-trash-o",
  onclick="confirm1(${i});"
  ></i>
  <i class="fa fa-pencil",
  onclick="confirm2(${i})"
  ></i>
  </p>
  </div>
  <div class="code">${saved.password}</div>
  ${saved.desp!==''? `<div class="desp">${saved.desp}</div>`
    :''}
  
  </div>`;
listhtml+=html;
}
document.querySelector('.store-display').innerHTML=listhtml;

}

window.confirm1=function(index) {
  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';

  const box = document.createElement('div');
  box.className = 'confirm-box';
  box.innerHTML = `
    <div>Are you sure you want to delete this item?</div>
    <div class="confirm-buttons">
      <button class="ok-btn">OK</button>
      <button class="cancel-btn">Cancel</button>
    </div>
  `;
  box.onclick=(e) => e.stopPropagation();
overlay.onclick=(e)=>{
  e.stopPropagation();
  e.preventDefault();
}
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // Now buttons definitely exist
  const okBtn = box.querySelector('.ok-btn');
  const cancelBtn = box.querySelector('.cancel-btn');

  okBtn.onclick = () => {
    delete1(index);
    document.body.removeChild(overlay);
  };
  cancelBtn.onclick = () => {
    document.body.removeChild(overlay);
  };
}

window.delete1=function(i){
 saveddata.splice(i,1);
 localStorage.setItem('savedpass',JSON.stringify(saveddata));
renderelist();
console.log(saveddata);
}



window.confirm2=function(index) {
  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';

  const box = document.createElement('div');
  box.className = 'confirm-box';
  box.innerHTML = `
    <div>Once You Enter Edit Tab You Have To Store Again Bcz Stored Value Get Deleted</div>
    <div class="confirm-buttons">
      <button class="ok-btn">EDIT</button>
      <button class="cancel-btn">Cancel</button>
    </div>
  `;
  box.onclick=(e) => e.stopPropagation();
overlay.onclick=(e)=>{
  e.stopPropagation();
  e.preventDefault();
}
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // Now buttons definitely exist
  const okBtn = box.querySelector('.ok-btn');
  const cancelBtn = box.querySelector('.cancel-btn');

  okBtn.onclick = () => {
    editentry(index);
    document.body.removeChild(overlay);
  };
  cancelBtn.onclick = () => {
    document.body.removeChild(overlay);
  };
}


/*EDIT BUTTON */

window.editentry=function(i){
  const entry=saveddata.splice(i,1)[0];
  localStorage.setItem('savedpass',JSON.stringify(saveddata));
  renderelist();
  localStorage.setItem('editentry',JSON.stringify(entry));
  window.location.href='home.html';
}
/*SEARCH*/

document.getElementById('search').addEventListener('input',(event)=>{
const value=event.target.value.toLowerCase();
saveddata.forEach((ele,index) => {
  const isvisible=ele.user.toLowerCase().includes(value)||
  ele.password.toLowerCase().includes(value) ||
  ele.desp.toLowerCase().includes(value);

  const element=document.querySelectorAll('.box')[index];
  if(element)
  element.classList.toggle("hide",!isvisible)
  
});
});
window.onload=renderelist;
