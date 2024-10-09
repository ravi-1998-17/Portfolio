let logohover = document.querySelector('header nav .logo #hover-img');
let diveIn  = document.querySelector('#hover');
let cardhover  = document.querySelectorAll('.card');
let changeThemeBtn = document.querySelector('#change-theme');
let matterjs = document.querySelector('#matterJs');

// Nav Brand Profile Picture 
logohover.addEventListener('mouseover', ()=>{
    logohover.src = 'images/profile-2.png';
});
logohover.addEventListener('mouseout', ()=>{
    logohover.src = 'images/profile-1.png';
});

// Dive in icon turn into dark
diveIn.addEventListener('mouseover', ()=>{
    diveIn.setAttribute('class', 'bi bi-caret-down-fill');
});

diveIn.addEventListener('mouseout', ()=>{
    diveIn.setAttribute('class', 'bi bi-caret-down');
});

// Card Shadow adding
for (const card of cardhover) {
    card.addEventListener('mouseover', () => {
        card.classList.add('shadow');
        console.log('hello');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('shadow');
    });
}

// Change Theme with LocalStorage
changeThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        changeThemeBtn.textContent = 'LIGHT';
        matterjs.style.display = 'none'; 
        localStorage.setItem('theme', 'dark');  // Save dark theme in localStorage
    } else {
        changeThemeBtn.textContent = 'DARK';
        matterjs.style.display = ''; 
        localStorage.setItem('theme', 'light');  // Save light theme in localStorage
    }
});

// Load the saved theme from localStorage when the page loads
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';  // Default to light theme if none is saved
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        changeThemeBtn.textContent = 'LIGHT';
        matterjs.style.display = 'none'; 
    } else {
        changeThemeBtn.textContent = 'DARK';
        matterjs.style.display = ''; 
    }
});





// let logohover = document.querySelector('header nav .logo #hover-img');
// let diveIn  = document.querySelector('#hover');
// let cardhover  = document.querySelectorAll('.card');
// let changeThemeBtn = document.querySelector('#change-theme');
// let matterjs = document.querySelector('#matterJs');

// // Nav Brand Profile Picture 
// logohover.addEventListener('mouseover', ()=>{
//     logohover.src = 'images/profile-2.png';
// })
// logohover.addEventListener('mouseout', ()=>{
//     logohover.src = 'images/profile-1.png';
// })

// // Dive in icon turn into dark
// diveIn.addEventListener('mouseover', ()=>{
//     diveIn.setAttribute('class', 'bi bi-caret-down-fill');
// })

// diveIn.addEventListener('mouseout', ()=>{
//     diveIn.setAttribute('class', 'bi bi-caret-down');
// })

// // Card Shadow adding
// for (const card of cardhover) {
//     card.addEventListener('mouseover', () => {
//         card.classList.add('shadow');
//         console.log('hello')
//       });
//     card.addEventListener('mouseout', () => {
//     card.classList.remove('shadow');
//     });
// }

// // Change Theme
// // let changeThemeBtn = document.querySelector('#change-theme');
// changeThemeBtn.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark-theme');
//     if(document.body.classList.contains('dark-theme')){
//         changeThemeBtn.textContent = 'LIGHT';
//         matterjs.style.display = 'none'; 
//     }else{
//         changeThemeBtn.textContent = 'DARK';
//         matterjs.style.display = ''; 
//     }
// })
// // Local Cashe Storage





