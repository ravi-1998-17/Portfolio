let logohover = document.querySelector('header nav .logo #hover-img');
let diveIn  = document.querySelector('#hover');
let cardhover  = document.querySelectorAll('.card');
let changeThemeBtn = document.querySelector('#change-theme');
let matterjs = document.querySelector('#matterJs');

// Nav Brand Profile Picture 
logohover.addEventListener('mouseover', ()=>{
    logohover.src = 'images/profile-2.png';
})
logohover.addEventListener('mouseout', ()=>{
    logohover.src = 'images/profile-1.png';
})

// Dive in icon turn into dark
diveIn.addEventListener('mouseover', ()=>{
    diveIn.setAttribute('class', 'bi bi-caret-down-fill');
})

diveIn.addEventListener('mouseout', ()=>{
    diveIn.setAttribute('class', 'bi bi-caret-down');
})

// Card Shadow adding
for (const card of cardhover) {
    card.addEventListener('mouseover', () => {
        card.classList.add('shadow');
        console.log('hello')
      });
    card.addEventListener('mouseout', () => {
    card.classList.remove('shadow');
    });
}

// Change Theme
// let changeThemeBtn = document.querySelector('#change-theme');
changeThemeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        changeThemeBtn.textContent = 'LIGHT';
        matterjs.style.display = 'none'; 
    }else{
        changeThemeBtn.textContent = 'DARK';
        matterjs.style.display = ''; 
    }
})





