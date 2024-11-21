document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const toggleButton = document.getElementById('color-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('header, .intro, .ai-section, .education-section, .contact-section, .get-quote').forEach(element => {
            element.classList.toggle('dark-mode');
        });
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:["&#8249;","&#8250;"],
        responsive:{
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});