
/**
 * Define Global Variables
 * 
*/

const navMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
*/

// build the nav

const addNav = () =>{
    let list = "";
    // looping over all sections to make list items equal to the number of sections
    sections.forEach((section)=> {
    list +=`<li><a class ="menu__link" href ="#${section.id} "data-nav="${section.id}">${section.dataset.nav} </a>`;
});
// Append the list itmes to the navigation menu
navMenu.insertAdjacentHTML("afterbegin",list);
};
addNav();


// Using intersection observer API to distinguish the section in the view

const Options = {
    rootMargin: "-10px",
    threshold: 0.6,
}
const observer = new IntersectionObserver( 
    function(entries){       
        //Looping over entries (sections)
        entries.forEach((entry) => { 
        
            //Highlighting the section in the view and its link in the navigation menu
            let items = navMenu.querySelector(`[data-nav=${entry.target.id}]`);
            if (entry.isIntersecting){
                entry.target.classList.add('your-active-class');
                items.classList.add('active__item');
                location.hash = `${entry.target.id}`;
                console.log(entry.target)
            }else {
                entry.target.classList.remove("your-active-class");
                items.classList.remove('active__item');
            }
        })
    },Options);
    //observe all sections
    sections.forEach((section) =>{
        observer.observe(section)
    });

navMenu.addEventListener('click',(e) => {

e.preventDefault()
if (e.target.dataset.nav){
    document
    .getElementById( `${e.target.dataset.nav}`)
    .scrollIntoView({behavior: 'smooth'});
}});


