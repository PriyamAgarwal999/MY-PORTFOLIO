const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

$(window).scroll(function() {
if($(this).scrollTop()>400){
    $('.goTop').fadeIn();
}
else{
    $('.goTop').fadeOut();   
}
});

// var typed=new Typed(".typing",{
//     strings:["Developer","Designer"],
//     typeSpeed:100,
//     backSpeed:60,
//     startDelay:5000,
//     loop:true,
//     showCursor:false,
// });

$('.goTop').click(function(){
    $('html , body').animate({scrollTop:0},1000);
});

$('.icon-scroll').click(function(){
    window.scrollBy(0,800);
});

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }
    else{
        header.style.backgroundColor="transparent";
    }
})