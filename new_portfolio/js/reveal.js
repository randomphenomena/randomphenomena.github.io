const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});


const hiddenElements = document.querySelectorAll ('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/* burger menu */
const burger = document.querySelector('nav .burger');

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
        gsap.to('.links', {x: '100%'});
        gsap.set("body", {overflow:"auto"});
        gsap.set("body", {overflowX: "hidden"});

    } else{
        gsap.to('.links', {x: '0%'});
        gsap.fromTo('.links a',
         {opacity: 0, y: 0},
         {opacity: 1, y: 20, delay:0.25, stagger:0.25});
        gsap.set("body", {overflow:"hidden"});

    }
    burger.classList.toggle("active");
})