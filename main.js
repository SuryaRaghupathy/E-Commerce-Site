const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove    ('active');
    })
}

window,addEventListener('scroll',reveal);
 

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

for(var i =0;i< reveals.length ; i++){
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint =50;

    if(revealtop < windowHeight - revealpoint){
        reveals[i].classList.add('active');

    }
    else{
        reveals[i].classList.remove('active');

    }
}
}

// Get all images with the class "lazy"
const lazyImages = document.querySelectorAll('.lazy');

// Define the intersection observer options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Create the intersection observer instance
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load the image if it's in view
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
      observer.unobserve(lazyImage);
    }
  });
}, options);

// Observe all images with the class "lazy"
lazyImages.forEach(lazyImage => {
  observer.observe(lazyImage);
});


