const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navs = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const active = document.querySelectorAll(".nav-active")
    const container = document.querySelector('.container')
    

    // document.onclick = function(e) {
    //     if (e.target.className !== "burger" && e.target.className !== "nav-links")
    //     {
    //         navs.classList.remove("nav-active");
    //         burger.classList.remove('change')
            
    //     }
    // }
    container.addEventListener('click', () => {
        navs.classList.remove("nav-active")
        burger.classList.remove('change')
        

 
    });

    navs.addEventListener('click', () => {
        navs.classList.remove("nav-active")
        burger.classList.remove('change')
        

 
    });

    burger.addEventListener('click', () => {
        navs.classList.toggle("nav-active")
        burger.classList.toggle('change')

 

        
        


        navLinks.forEach((link, index) => {
            if (!link.style.animation) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
    });

   
}

navSlide()

var scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible')
        } else {
            element.classList.remove('is-visible')
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document
            .documentElement.clientHeight) && 
        rect.top <= (window.innerHeight || document.documentElement
            .clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document
            .documentElement.clientHeight))
    );
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
})