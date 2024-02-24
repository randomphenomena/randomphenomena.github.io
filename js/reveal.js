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

const toggleMenuElement = document.getElementById('menu-button')
const mainMenuElement = document.getElementById('nav-dropdown')


function toggleDisplay () {
    if (mainMenuElement.style.display === 'none') {
        mainMenuElement.style.display = 'block' ;
    } else {
        mainMenuElement.style.display = 'none' ;
    }
}


toggleMenuElement.addEventListener('click', toggleDisplay);
