


// Función para mostrar/ocultar el menú al hacer clic en el icono de menú
function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
     
// función parallax

let text = document.getElementById('titulo');
let imgpara2 = document.getElementById('imgpara2');
let imgpara3 = document.getElementById('imgpara3');
let imgpara4 = document.getElementById('imgpara4');
let imgpara5 = document.getElementById('imgpara5');
let imgpara6 = document.getElementById('imgpara6');
let imgpara7 = document.getElementById('imgpara7');
let imgpara8 = document.getElementById('imgpara8');
let imgpara9 = document.getElementById('imgpara9');
let imgpara10 = document.getElementById('imgpara10');
let imgpara11 = document.getElementById('imgpara11');
let imgpara12 = document.getElementById('imgpara12');
let imgpara13 = document.getElementById('imgpara13');
let imgpara14 = document.getElementById('imgpara14');
let imgpara15 = document.getElementById('imgpara15');
let imgpara16 = document.getElementById('imgpara16');





window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * -1 + 'px';
  imgpara3.style.marginTop = value * -0.5 + 'px';//se va hacia arriba
  imgpara2.style.marginLeft = value * -0.8 + 'px';//se va por la izquierda
  imgpara4.style.marginLeft = value * 2 + 'px';//se va a la derecha
  imgpara5.style.marginLeft = value * 1.5 + 'px';//se va a la derecha
  imgpara5.style.marginBottom = value * -2 + 'px';//se va a la derecha
  imgpara6.style.marginTop = value * 3 + 'px';//se va para bajo mas rapido
  imgpara7.style.marginTop = value * -1.5 + 'px';
  imgpara8.style.marginLeft = value * 1.5 + 'px';//se va a la derecha
  imgpara8.style.marginTop = value * 1 + 'px';//se va para abajo
  imgpara9.style.marginTop = value * 5 + 'px'; //se va para abajo
  imgpara10.style.marginTop = value * -2 + 'px'; //seva hacia arriba
  imgpara11.style.marginTop = value * -2 + 'px'; //se va hacia arriba
  // imgpara12.style.marginTop = value * 2 + 'px';
  imgpara13.style.marginLeft = value * -2 + 'px';
 
  // imgpara14.style.marginTop = value * 2.5 + 'px';//se va para abajo
  // imgpara15.style.marginTop = value * 1 + 'px';//se va para abajo
  // imgpara15.style.marginLeft = value * 2.5 + 'px';
  // imgpara16.style.marginTop = value * 3 + 'px';

});


// Maneja el evento mousemove en el contenedor de parallax
document.querySelector('.parallax').addEventListener('mousemove', function(e) {
  // Calcula la posición del ratón dentro del contenedor
  var mouseX = e.clientX - this.offsetLeft;
  var mouseY = e.clientY - this.offsetTop;
  
  // Calcula los desplazamientos para cada imagen
  var offsetX = (mouseX - (this.offsetWidth / 2)) / this.offsetWidth * 30;
  var offsetY = (mouseY - (this.offsetHeight / 2)) / this.offsetHeight * 30;
  
  // Aplica los desplazamientos a cada imagen con un efecto de transición suave
  imgpara1.style.transform = 'translate(' + offsetX * 9+ 'px, ' + offsetY * 3 + 'px)';

  imgpara2.style.transform = 'translate(' + offsetX * 0.6 + 'px, ' + offsetY * 0.1 + 'px)';
  imgpara3.style.transform = 'translate(' + offsetX * 0.4 + 'px, ' + offsetY * 2 + 'px)';
  imgpara4.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.3 + 'px)';
  imgpara5.style.transform = 'translate(' + offsetX * 0.2 + 'px, ' + offsetY * 0.3 + 'px)';
  imgpara6.style.transform = 'translate(' + offsetX * 0 + 'px, ' + offsetY * 2 + 'px)';
  imgpara7.style.transform = 'translate(' + offsetX * 2 + 'px, ' + offsetY * 0.3 + 'px)';
  imgpara8.style.transform = 'translate(' + offsetX * 0.1+ 'px, ' + offsetY * 1.5 + 'px)';
  imgpara9.style.transform = 'translate(' + offsetX * 4 + 'px, ' + offsetY * 2 + 'px)';
  imgpara10.style.transform = 'translate(' + offsetX * 5 + 'px, ' + offsetY * 0.3 + 'px)';
  imgpara11.style.transform = 'translate(' + offsetX * 0.2 + 'px, ' + offsetY * 0.2 + 'px)';
  imgpara12.style.transform = 'translate(' + offsetX * 5 + 'px, ' + offsetY * 0.2 + 'px)';
  imgpara13.style.transform = 'translate(' + offsetX * 0.3 + 'px, ' + offsetY * 1 + 'px)';
  imgpara14.style.transform = 'translate(' + offsetX * 0.2 + 'px, ' + offsetY * 1 + 'px)';
  imgpara15.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.5 + 'px)';
  imgpara16.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.5 + 'px)';


 });






// document.addEventListener("DOMContentLoaded", function() {
//   const cursor = document.querySelector(".cursor");
  
//   document.addEventListener("mousemove", function(e) {
//       console.log("JavaScript ejecutado");
//       cursor.style.left = e.pageX + "px";
//       cursor.style.top = e.pageY + "px";
//   });
// });

// function moveImage(event, imageId) {
//   var img = document.getElementById(imageId);
//   var boundingRect = img.getBoundingClientRect();

//   var mouseX = event.clientX - boundingRect.left;
//   var mouseY = event.clientY - boundingRect.top;

//   var imgCenterX = boundingRect.width / 2;
//   var imgCenterY = boundingRect.height / 2;

//   var offsetX = (mouseX - imgCenterX) / 10;
//   var offsetY = (mouseY - imgCenterY) / 10;

//   img.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
// }

// function resetImage(imageId) {
//   var img = document.getElementById(imageId);
//   img.style.transform = 'translate(0px, 0px)' ;
// }


  // Parallax Code
  // var scene = document.getElementById('paralax');
  // var parallax = new Parallax(scene);

  // $(window).on('mousemove', function(e) {
  //   sketch.mouse.x = e.pageX;
  //   sketch.mouse.y = e.pageY;
  // });


//   (function() {
//     // Add event listener
// document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector('#paralax');
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }
// })();

// (function() {
//   // Add event listener

//   document.addEventListener("mousemove", parallax);
//   const elem = document.querySelector('#paralax');
//   // Magic happens here
//   function parallax(e) {
//       let _w = window.innerWidth/2;
//       let _h = window.innerHeight/2;
//       let _mouseX = e.clientX;
//       let _mouseY = e.clientY;
//       let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//       let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//       let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//       let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//       console.log(x);
//       elem.style.backgroundPosition = x;
//   }
// })();

// var options = {
//   invertX: false,
//   invertY: false,
//   limitX: 40,
//   limitY: 40,
// }

// var emoji = document.getElementById('.paralax');
// var parallax = new Parallax(emoji, options);




// window.addEventListener('scroll', function() {
//   // Calcula la distancia entre el tope del documento y el tope de la ventana visible
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   // Calcula la altura total del contenido (incluido el contenido fuera de la ventana visible)
//   var totalHeight = document.documentElement.scrollHeight;

//   // Calcula la altura de la ventana visible
//   var visibleHeight = window.innerHeight;

//   // Si el scroll ha llegado al final del contenido
//   if (scrollTop + visibleHeight >= totalHeight) {
//       // Desactiva el scroll
//       document.body.style.overflow = 'hidden';
//   } else {
//       // Vuelve a activar el scroll
//       document.body.style.overflow = '';
//   }
// });







// ------------------------------------------------------------------------------------------------
// // Función para mostrar/ocultar el menú al hacer clic en el icono de menú
// function toggleMenu() {
//   var menu = document.getElementById('menu');
//   menu.classList.toggle('active');
// }

// // Controlador de evento para el scroll que aplica efectos parallax y limita el scroll
// window.addEventListener('scroll', () => {
//   let value = window.scrollY;
 
//   // Limita el desplazamiento a no más de 3333px
//   if (value > 3333) {
//     window.scrollTo(0, 3333);
//     return;
//   }

//   // Aplica transformaciones para el efecto parallax
//   text.style.marginTop = value * -1 + 'px';
//   imgpara2.style.marginLeft = value * -0.8 + 'px';
//   imgpara3.style.marginTop = value * -0.5 + 'px';
//   imgpara4.style.marginLeft = value * 2 + 'px';
//   imgpara5.style.marginLeft = value * 1.5 + 'px';
//   imgpara5.style.marginBottom = value * -2 + 'px';
//   imgpara6.style.marginTop = value * 3 + 'px';
//   imgpara7.style.marginTop = value * -1.5 + 'px';
//   imgpara8.style.marginLeft = value * 1.5 + 'px';
//   imgpara8.style.marginTop = value * 1 + 'px';
//   imgpara9.style.marginTop = value * 5 + 'px';
//   imgpara10.style.marginTop = value * -2 + 'px';
//   imgpara11.style.marginTop = value * -2 + 'px';
//   imgpara12.style.marginTop = value * 2 + 'px';
//   imgpara13.style.marginLeft = value * -2 + 'px';
//   imgpara14.style.marginTop = value * 2.5 + 'px';
//   imgpara15.style.marginTop = value * 1 + 'px';
//   imgpara15.style.marginLeft = value * 2.5 + 'px';
//   imgpara16.style.marginTop = value * 3 + 'px';
// });

// // Maneja el evento mousemove en el contenedor de parallax
// document.querySelector('.parallax').addEventListener('mousemove', function(e) {
//   var mouseX = e.clientX - this.offsetLeft;
//   var mouseY = e.clientY - this.offsetTop;

//   var offsetX = (mouseX - (this.offsetWidth / 2)) / this.offsetWidth * 30;
//   var offsetY = (mouseY - (this.offsetHeight / 2)) / this.offsetHeight * 30;

//   imgpara1.style.transform = 'translate(' + offsetX * 9 + 'px, ' + offsetY * 3 + 'px)';
//   imgpara2.style.transform = 'translate(' + offsetX * 0.6 + 'px, ' + offsetY * 0.1 + 'px)';
//   imgpara3.style.transform = 'translate(' + offsetX * 0.4 + 'px, ' + offsetY * 2 + 'px)';
//   imgpara4.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.3 + 'px)';
//   imgpara5.style.transform = 'translate(' + offsetX * 0.2 + 'px, ' + offsetY * 0.3 + 'px)';
//   imgpara6.style.transform = 'translate(' + offsetX * 0 + 'px, ' + offsetY * 2 + 'px)';
//   imgpara7.style.transform = 'translate(' + offsetX * 2 + 'px, ' + offsetY * 0.3 + 'px)';
//   imgpara8.style.transform = 'translate(' + offsetX * 0.1 + 'px, ' + offsetY * 1.5 + 'px)';
//   imgpara9.style.transform = 'translate(' + offsetX * 4 + 'px, ' + offsetY * 2 + 'px)';
//   imgpara10.style.transform = 'translate(' + offsetX * 5 + 'px, ' + offsetY * 0.3 + 'px)';
//   imgpara11.style.transform = 'translate(' + offsetX * 0.2 + 'px, ' + offsetY * 0.2 + 'px)';
//   imgpara12.style.transform = 'translate(' + offsetX * 5 + 'px, ' + offsetY * 0.2 + 'px)';
//   imgpara13.style.transform = 'translate(' + offsetX * 0.3 + 'px,' + offsetY * 1 + 'px)';
//   imgpara14.style.transform = 'translate(' + offsetX * 0.2 + 'px, ' + offsetY * 1 + 'px)';
//   imgpara15.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.5 + 'px)';
//   imgpara16.style.transform = 'translate(' + offsetX * 0.9 + 'px, ' + offsetY * 0.5 + 'px)';
// });


// ------------------------------------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function() {
//   const cursor = document.querySelector(".cursor");
  
//   document.addEventListener("mousemove", function(e) {
//       console.log("JavaScript ejecutado");
//       cursor.style.left = e.pageX + "px";
//       cursor.style.top = e.pageY + "px";
//   });
// });

// function moveImage(event, imageId) {
//   var img = document.getElementById(imageId);
//   var boundingRect = img.getBoundingClientRect();

//   var mouseX = event.clientX - boundingRect.left;
//   var mouseY = event.clientY - boundingRect.top;

//   var imgCenterX = boundingRect.width / 2;
//   var imgCenterY = boundingRect.height / 2;

//   var offsetX = (mouseX - imgCenterX) / 10;
//   var offsetY = (mouseY - imgCenterY) / 10;

//   img.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
// }

// function resetImage(imageId) {
//   var img = document.getElementById(imageId);
//   img.style.transform = 'translate(0px, 0px)' ;
// }


  // Parallax Code
  // var scene = document.getElementById('paralax');
  // var parallax = new Parallax(scene);

  // $(window).on('mousemove', function(e) {
  //   sketch.mouse.x = e.pageX;
  //   sketch.mouse.y = e.pageY;
  // });


//   (function() {
//     // Add event listener
// document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector('#paralax');
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }
// })();

// (function() {
//   // Add event listener

//   document.addEventListener("mousemove", parallax);
//   const elem = document.querySelector('#paralax');
//   // Magic happens here
//   function parallax(e) {
//       let _w = window.innerWidth/2;
//       let _h = window.innerHeight/2;
//       let _mouseX = e.clientX;
//       let _mouseY = e.clientY;
//       let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//       let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//       let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//       let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//       console.log(x);
//       elem.style.backgroundPosition = x;
//   }
// })();

// var options = {
//   invertX: false,
//   invertY: false,
//   limitX: 40,
//   limitY: 40,
// }

// var emoji = document.getElementById('.paralax');
// var parallax = new Parallax(emoji, options);




// window.addEventListener('scroll', function() {
//   // Calcula la distancia entre el tope del documento y el tope de la ventana visible
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   // Calcula la altura total del contenido (incluido el contenido fuera de la ventana visible)
//   var totalHeight = document.documentElement.scrollHeight;

//   // Calcula la altura de la ventana visible
//   var visibleHeight = window.innerHeight;

//   // Si el scroll ha llegado al final del contenido
//   if (scrollTop + visibleHeight >= totalHeight) {
//       // Desactiva el scroll
//       document.body.style.overflow = 'hidden';
//   } else {
//       // Vuelve a activar el scroll
//       document.body.style.overflow = '';
//   }
// });



