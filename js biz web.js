   searchForm = document.querySelector('.search-form');

 document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
 }

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
   loginForm.classList.remove('active');
}  

 window.onscroll = () => {

    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
   } else{
    document.querySelector('.header .header-2').classList.remove('active');
     
   }
  }
  window.onload  = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
   } else{
    document.querySelector('.header .header-2').classList.remove('active');
     
   }
   
  }

  

  function loader(){  
    document.querySelector('.loader-container').classList.add('active');  
}  

// Hide loader after a timeout or when content is fully loaded  
function fadeOut(){  
    const loaderContainer = document.querySelector('.loader-container');  

    // Wait for 4 seconds (or until your content is loaded)  
    setTimeout(() => {  
        loaderContainer.classList.remove('active'); // Hide loader  
    }, 4000);  
}  

  var swiper = new Swiper(".books-slider", {
 loop:true,
   
 centeredSlides: true,
 autoplay:{
   delay:9500,
   disableOnInteraction: false,
 },
 breakpoints: {
    0: {
       slidesPerView: 1,
     
     },
   768: {
       slidesPerView: 2,
      
     },
     1024: {
       slidesPerView: 3,
       
     },

   },
 });

 var swiper = new Swiper(".featured-slider ", {
  spacebetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay:{
    delay:9500,
    disableOnInteraction: false,
  },
  
    navigation: {
      nextEl:  ".swiper-button-next",
      prevEl:  ".swiper-button-prev",
    },
  breakpoints: {
     0: {
        slidesPerView: 1,
      
      },
      450: {
        slidesPerView: 2,
       
      },


    768: {
        slidesPerView: 3,
       
      },
      1024: {
        slidesPerView: 4,
        
      },
 
    },
  });





  var swiper = new Swiper(".arrivals-slider ", {
    spacebetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay:{
      delay:9500,
      disableOnInteraction: false,
    },
   
    breakpoints: {
       0: {
          slidesPerView: 1,
        
        },
      
  
      768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
          
        },
   
      },
    });

    var swiper = new Swiper(".reviews-slider ", {
      spacebetween: 10,
      grabCursor:true,
      loop:true,
      centeredSlides: true,
      autoplay:{
        delay:9500,
        disableOnInteraction: false,
      },
     
      breakpoints: {
         0: {
            slidesPerView: 1,
          
          },
        
    
        768: {
            slidesPerView: 2,
           
          },
          1024: {
            slidesPerView: 3,
            
          },
     
        },
      });   


     // Get all links that start with #modal
const modalLinks = document.querySelectorAll('a[href^="#modal"]');

modalLinks.forEach(function (modalLink, index) {
  // Get modal ID to match the modal
  const modalId = modalLink.getAttribute('href');
  
  // Click on link
  modalLink.addEventListener('click', function (event) {
    
    // Get modal element
    const modal = document.querySelector(modalId);
    // If modal with an ID exists
    if(modal){
      // Get close button
      const closeBtn = modal.querySelector('.dialog__close');
      event.preventDefault();
      modal.showModal(); // Open modal
      
      // Close modal on click
      closeBtn.addEventListener('click', function (event) {
        modal.close();
      });
      
      // Close modal when clicking outside modal
      document.addEventListener('click', function (event) {
        
        const dialogEl = event.target.tagName;
        const dialogElId = event.target.getAttribute('id');
        if(dialogEl == 'DIALOG'){
          // Close modal
          modal.close();
        }
      }, false);
      
    // If modal ID not exists
    } else {
      console.log('Modal doesn\'t exist');
    }
  });
});