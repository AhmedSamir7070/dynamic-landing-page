/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// change the background-color
const box= document.querySelectorAll('section');
window.onscroll = function PassesThroughSection() {
    box.forEach (function (onActive){
        if (onActive.getBoundingClientRect().top>=-400 && onActive.getBoundingClientRect().top<=150) {
            onActive.classList.add('your-active-class');
        } else{
            onActive.classList.remove('your-active-class')
        }
    });
};



// Build menu 
const AllSection = Array.from(document.getElementsByTagName("section"));
const theMenu = document.getElementById('navbar__list');

for(mySection of AllSection) {
    const theMembers = document.createElement('li');
    const theContact=document.createElement('a');
    // use the section data-nav to fill the <a> tag
    theContact.textContent= mySection.dataset.nav;
    theMembers.appendChild(theContact);
    theMenu.appendChild(theMembers);
}


// Scroll to section on link click
//GO TO section 1
const mySection1= document.querySelectorAll('li');
//const theMembers = document.querySelectorAll('li');
mySection1[0].addEventListener('click',goToSection1);

function goToSection1(event) {
    event.preventDefault();
    const yourSection=document.getElementById('section1');
    yourSection.scrollIntoView({behavior:'smooth'});
    //const theMember1 = document.querySelectorAll('li');
    mySection1[0].classList.add('highlight');
    mySection1[1].classList.remove('highlight');
    mySection1[2].classList.remove('highlight');
    mySection1[3].classList.remove('highlight');
};


//GO TO section 2
const mySection2= document.querySelectorAll('li');
mySection2[1].addEventListener('click',goToSection2);

function goToSection2(event) {
    event.preventDefault();
    const yourSection=document.getElementById('section2');
    yourSection.scrollIntoView({behavior:'smooth'});
    //const theMember1 = document.querySelectorAll('li');
    mySection1[1].classList.add('highlight');
    mySection1[0].classList.remove('highlight');
    mySection1[2].classList.remove('highlight');
    mySection1[3].classList.remove('highlight');
};

//GO TO section 3
const mySection3= document.querySelectorAll('li');
mySection3[2].addEventListener('click',goToSection3);

function goToSection3(event) {
    event.preventDefault();
    const yourSection=document.getElementById('section3');
    yourSection.scrollIntoView({behavior:'smooth'});
    mySection1[2].classList.add('highlight');
    mySection1[1].classList.remove('highlight');
    mySection1[0].classList.remove('highlight');
    mySection1[3].classList.remove('highlight');
};

//GO TO section 4
const mySection4= document.querySelectorAll('li');
mySection4[3].addEventListener('click',goToSection4);

function goToSection4(event) {
    event.preventDefault();
    const yourSection=document.getElementById('section4');
    yourSection.scrollIntoView({behavior:'smooth'});
    mySection1[3].classList.add('highlight');
    mySection1[2].classList.remove('highlight');
    mySection1[1].classList.remove('highlight');
    mySection1[0].classList.remove('highlight');
};

