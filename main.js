    'use strict';

    const switcher = document.querySelector('.modos');

    switcher.addEventListener('click', function() {
        document.body.classList.toggle('claro');
        document.body.classList.toggle('dark');

        const className = document.body.className;
        if(className == "claro") {
            this.textContent = "Dark";
        } else {
            this.textContent = "Light";
        }
        console.log('current class name: ' + className);
    });