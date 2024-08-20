import {navbar} from './navbar.js'

document.querySelector(`#contenedorNav`).innerHTML=navbar

import {footer} from './footer.js'

document.querySelector(`#contenedorFooter`).innerHTML=footer


const ingresarBtn = document.getElementById('ingresarBtn');


ingresarBtn.addEventListener('click', function() {
    ingresarBtn.style.display = 'none';
    newButtonsContainer.style.display = 'block';
});

    salirBtn.addEventListener('click', function() {
        newButtonsContainer.style.display = 'none';
    ingresarBtn.style.display = 'block';
   
});



