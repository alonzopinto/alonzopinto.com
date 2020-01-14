
const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
} )


var input = document.getElementsByClassName('formulario__input'); 
for (var i = 0; i < input.length; i++) { 

input[i].addEventListener ('keyup', function() {if(this.value.length>=1) {
this.nextElementSibling.classList.add('fijar');}
else{this.nextElementSibling.classList.remove('fijar'); } } ) }

btnToggle.addEventListener('click', function () {console.log('clicked')} )

jQuery('document').ready(function($){

    var menuBtn = $('.menu-icom'),
    menu = $('.navegacion ul');

    menuBtn.click(function(){
        menu.addClass('show');
    })
});







jQuery('document').ready ( function($){

    var menuBtn = $('.menu-icon'), menu = $('.navegation ul');

    menuBtn.click ( function ( ) { 
            
        if(menu.hasClass("show")) {
            menu.removeClass('show'); 
        }         
        else { 
            menu.addClass('show'); 
        }  
    }) ; 
        
} ) ;


// //almacenando slider en una variable
// var slider = $('#slider');
// //almacenar botones
// var siguiente = $('#btn-next');
// var anterior = $('#btn-prev');

// //mover ultima imagen al primer lugar
// $('#slider li:last').insertBefore('#slider li:first');
// //mostrar la primera imagen con un margen de -100%
// slider.css('margin-left', '-'+100+'%');

// function moverD() {
//     slider.animate({ marginLeft:'-'+200+'%'} ,700, 
//     function() { ('#slider li:first').insertAfter('#slider li:last');
//     slider.css('margin-left', '-'+100+'%'); 
// });
// }

// siguiente.on('click',function() {moverD(); } ) ;