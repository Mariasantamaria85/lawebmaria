
     
// función parallax

let text2 = document.getElementById('titulo2');
let img2para2 = document.getElementById('img2para2');
let img2para3 = document.getElementById('img2para3');
let img2para4 = document.getElementById('img2para4');
let img2para5 = document.getElementById('img2para5');
let img2para6 = document.getElementById('img2para6');
let img2para7 = document.getElementById('img2para7');
let img2para8 = document.getElementById('img2para8');
let img2para9 = document.getElementById('img2para9');





window.addEventListener('scroll', () => {
  let value = window.scrollY;
  if (value > 3333) {
    window.scrollTo(0, 3333);
    return;
  }

  text2.style.marginBottom = value * -1 + 'px';
  img2para3.style.marginTop = value * -0.5 + 'px';//se va hacia arriba
  img2para2.style.marginLeft = value * -0.8 + 'px';//se va por la izquierda
  img2para4.style.marginLeft = value * 2 + 'px';//se va a la derecha
  img2para5.style.marginLeft = value * 1.5 + 'px';//se va a la derecha
  img2para5.style.marginBottom = value * -2 + 'px';//se va a la derecha
  img2para6.style.marginTop = value * 3 + 'px';//se va para bajo mas rapido
  img2para7.style.marginTop = value * -1.5 + 'px';
  img2para8.style.marginLeft = value * 1.5 + 'px';//se va a la derecha
  img2para8.style.marginTop = value * 1 + 'px';//se va para abajo
  img2para9.style.marginTop = value * 5 + 'px'; //se va para abajo
  
});






