

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');




    burger.addEventListener('click',()=>{
         // toggle nav
        nav.classList.toggle('nav-active');
    });
        //animate links
        navLinks.forEach((link, index) => {
           if(link.style.animation){
               link.style.animation= ''
           }else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.7}s`;
           }

     });


    }


navSlide();

// scroll reveal
// window.sr = ScrollReveal();

// sr.reveal('.animate-left',{
//    origin:'left',
//    duration:1000,
//    distance: '25rem',
//    delay:300
// });
// sr.reveal('.animate-right',{
//     origin:'right',
//     duration:1000,
//     distance: '25rem',
//     delay:300
//  });
//  sr.reveal('.animate-top',{
//     origin:'top',
//     duration:1000,
//     distance: '25rem',
//     delay:300,
    
//  });
//  sr.reveal('.animate-bottom',{
//     origin:'bottom',
//     duration:1000,
//     distance: '25rem',
//     delay:300
//  });
//  sr.reveal('.work',{
//     origin:'bottom',
//     delay:600
   
//  });
 sr.reveal('.explore',{
    delay:600
 });

 