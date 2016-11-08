// Missing:
//    1. FadeIn WORKING SO HAPPY!

var instaimages = document.getElementsByClassName('instaimages');
var mainpage = document.querySelector('#mainpage');
var enlargeVar = document.querySelector('.enlarge');
var big = document.querySelector('#big');

// smear out function
var fadeOut = function fadeOut(section) {
    section.classList.remove('fadeIn');
    section.classList.add('fadeOut');
};

// smear in function
var fadeIn = function fadeIn(section) {
    section.classList.remove('fadeOut');
    section.classList.add('fadeIn');
};

// array for pictures
for(var i = 0; i < instaimages.length; i++) {
    instaimages[i].addEventListener('click', function(){
        big.setAttribute('src', this.getAttribute('src'));
        enlarge();
    });
}

big.addEventListener('click', function(){
    restore();
});

enlargeVar.addEventListener('click', function(){
    restore();
});

// function for enlarging
var enlarge = function enlarge() {
    fadeOut(mainpage);
    setTimeout(function(){
        document.getElementById('mainpage').style.display = 'none';  
        enlargeVar.style.display = 'block';
    }, 300);
    setTimeout(function(){
        fadeIn(enlargeVar);
    }, 400);
};

// function for restoring original page
var restore = function restore() {
    fadeOut(enlargeVar);
    setTimeout(function(){
        enlargeVar.style.display = 'none';
        document.getElementById('mainpage').style.display = 'block'; // This line can actually go up in there with the previous setTimeout
    }, 300);
    setTimeout(function(){
        fadeIn(mainpage);
    }, 400);
};