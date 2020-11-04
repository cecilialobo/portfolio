//variables
const arrowBtn = document.getElementById('arrowBtn');
const section2 = document.getElementsByClassName('section2')[0];

//event listeners
arrowBtn.addEventListener('click', scrollIntoView); 

//functions
// function toggleDisplay(){
//     section2.style.display = 'block';
//     scrollIntoView();
// };

function scrollIntoView () {
    section2.scrollIntoView({behavior: "smooth"});
};
