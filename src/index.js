import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';

const navButtons = document.querySelectorAll('.navigation-btn');

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch(button.textContent) {
            case 'Home':
                loadHome();
                break;
            case 'Menu':
                loadMenu();
                break;
            case 'Contact':
                loadContact();
                break;
            default:
                loadHome();
        }
    })
})

loadHome();
