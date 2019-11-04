var domData = {
    menuIcon: document.querySelector('.container p'),
    menuWrapper: document.querySelector('.menu'),
    close: document.querySelector('#close'),
    select: document.querySelector('#direction'),
}


//main function
const toggleMenu = (e) => {
    switch(e.target.value){
        case 'down':
            domData.menuWrapper.style.transform = 'translateY(200%)'            
            break;

        case 'left':
            domData.menuWrapper.style.transform = 'translateX(-100%)'           
            break;

        case 'right':
                domData.menuWrapper.style.transform = 'translateX(100%)'                
            break;

        default:
            domData.menuWrapper.style.transform = 'translateY(-200%)'          

    }
}


// get select value
domData.select.addEventListener('change', toggleMenu);

const showmenu = (e) => {
    const classL = domData.menuWrapper.classList;
    if(classL.contains('show')){
        classL.remove('show')
    } else {
        classL.add('show')
    }
}

const closeMenu = (e) => {
    domData.menuWrapper.classList.remove('show')
}

domData.menuIcon.addEventListener('click', showmenu);
domData.close.addEventListener('click', closeMenu);

























