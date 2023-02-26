let phones = document.getElementById('phones');
let laptop = document.getElementById('laptop');
let computers = document.getElementById('computers');

let iphone = document.getElementById('Iphone13');
let samsung = document.getElementById('Samsung20');
let meizu = document.getElementById('MeizuNode10');
let aser = document.getElementById('Acer');
let lenovo = document.getElementById('Lenovo');
let hp = document.getElementById('HP');
let asus = document.getElementById('Asus');
let artline = document.getElementById('Artline');

let discriptionIphone = document.getElementById('discriptionIphone');
let discriptionSamsung = document.getElementById('discriptionSamsung');
let discriptionMeizu = document.getElementById('discriptionMeizu');
let discriptionAser = document.getElementById('discriptionAser');
let discriptionLenovo = document.getElementById('discriptionLenovo');
let discriptionHp = document.getElementById('discriptionHp');
let discriptionAsus = document.getElementById('discriptionAsus');
let discriptionArtline = document.getElementById('discriptionArtline');

let modelPhone = document.querySelector('.modelPhone');
let modelLaptop = document.querySelector('.modelLaptop');
let modelComputer = document.querySelector('.modelComputer');

let catogoryList = document.querySelector('.category');
let modelList = document.querySelector('.chooseModel');
let discriptionlList = document.querySelector('.discription');

catogoryList.addEventListener('click', addClass);
modelList.addEventListener('click', addClass1);


function addClass (event) {
    if (event.target.tagName === 'P') {
      const activeEl = document.querySelector('.active');
      if(activeEl) {
        activeEl.classList.remove('active')
      }    
        if(event.target.id === 'phones') {
            modelPhone.classList.add('active');
    } else if ( event.target.id === 'laptop') {
        modelLaptop.classList.add('active');
    }
    else if (event.target.id === 'computers') {
        modelComputer.classList.add('active');
    } 
}}
function addClass1 (event) {
    if (event.target.tagName === 'P') {
      const activeEl1 = document.querySelector('.active1');
      if(activeEl1) {
        activeEl1.classList.remove('active1')
      }     
      if (event.target.id === 'Iphone13') {
        discriptionIphone.classList.add('active1');
    }
    else if (event.target.id === 'Samsung20') {
        discriptionSamsung.classList.add('active1');
    }  else if (event.target.id === 'MeizuNode10') {
        discriptionMeizu.classList.add('active1');
    } else if (event.target.id === 'Acer') {
        discriptionAser.classList.add('active1');
    } else if (event.target.id === 'Lenovo') {
        discriptionLenovo.classList.add('active1');
    } else if (event.target.id === 'HP') {
        discriptionHp.classList.add('active1');
    } else if (event.target.id === 'Asus') {
        discriptionAsus.classList.add('active1');
    } else if (event.target.id === 'Artline') {
        discriptionArtline.classList.add('active1');
    }
    }
 }
const btn = document.querySelectorAll('.buy');
btn.forEach(elem => elem.addEventListener('click', (event)=>{
    event = window.alert('Good shoise!');
    document.location.href = 'index.html'
}))