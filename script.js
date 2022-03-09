$('.multiple-items').slick({
                      infinite: true,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      autoplaySpeed: 2000,
                      dots:true,
                      arrows:false,
                    });
                
 $(function(window){
  $('.mazga').click(function(){
    $('ul').toggleClass('mainstream')
  })
});


 // Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
const mediaQuery = window.matchMedia('(min-width: 768px)')

if (mediaQuery.matches) {
  $('.mazga').click(function(){
    $('ul').toggleClass('men')
  })
};

function myFunction(){
  let ul = document.querySelector('.dropdown-content');
  ul.style.display = 'block';
}
function antiFunction(){
  let ul = document.querySelector('.dropdown-content');
  ul.style.display = 'none'; 
}
function myFunctions(){
  let ul = document.querySelector('.dropdown-contents');
  ul.style.display = 'block';
}
function antiFunctions(){
  let ul = document.querySelector('.dropdown-contents');
  ul.style.display = 'none'; 
}
function myFunctione(){
  let ul = document.querySelector('.dropdown-contente');
  ul.style.display = 'block';
}
function antiFunctione(){
  let ul = document.querySelector('.dropdown-contente');
  ul.style.display = 'none'; 
}
function myFunctiona(){
  let ul = document.querySelector('.dropdown-contenta');
  ul.style.display = 'block';
}
function antiFunctiona(){
  let ul = document.querySelector('.dropdown-contenta');
  ul.style.display = 'none'; 
}


// let off = document.querySelector('.offlcick');
function clickFunction() {
   let pop = document.querySelector('.pop');
   pop.style.display = 'block';
}

function secondFunction(){
   let pop = document.querySelector('.pop');
   pop.style.display = 'none'; 
}

function sendFunction(){
let n = document.querySelector('.name').value;
let s = document.querySelector('.number').value;
let e = document.querySelector('.email').value;
let o = document.querySelector('.optom').value;
let t = document.querySelector('.trubin').value;
let c = document.querySelector('.comment').value;

  if(n == '') {
    alert("Пожалуйста, напишите ваше имя");
    return false;
  }
  if(s == '') {
    alert("Пожалуйста, напишите ваш номер");
    return false;
  }
  if(e == '') {
    alert("Пожалуйста, напишите вашу почту");
    return false;
  }
  if(o == '') {
    alert("Пожалуйста, напишите ваше ");
    return false ;
  }
  if(t == '') {
    alert("Пожалуйста, напишите вашу хотелку ");
    return false ;
  }
  if(c == '') {
    alert("Пожалуйста, напишите ваш комментарии ");
    return false ;
  }
   alert("Валидация прошла успешно, все данные отправлены в сервер")
     
             window.location.reload();
             return true;
}

 



// $('.multiple-items').slick({
//                       infinite: true,
//                       slidesToShow: 1,
//                       slidesToScroll: 1,
//                       autoplay: true,
//                       autoplaySpeed: 2000,
//                       dots:true,
//                       arrows:false,
//                     });
                
//  $(function(window){
//   $('.mazga').click(function(){
//     $('ul').toggleClass('mainstream')
//   })
// });


//  // Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
// const mediaQuery = window.matchMedia('(min-width: 768px)')

// if (mediaQuery.matches) {
//   $('.mazga').click(function(){
//     $('ul').toggleClass('men')
//   })
// };
