function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const description = document.createElement('p') 
    description.classList.add('home-description');
    description.textContent = 'Best in the world.';

    const age = document.createElement('p');
    age.classList.add('home-age');
    age.textContent = "Made with passion since 1920";

    const chefImg = document.createElement('img');
    chefImg.classList.add('home-img');
    chefImg.src = 'images/Chef.png';

    const cta = document.createElement('p');
    cta.classList.add('home-cta');
    cta.textContent = 'Order Online or Visit Us!';

    home.appendChild(description);
    home.appendChild(age);
    home.appendChild(chefImg);
    home.appendChild(cta);

    return home;
}

function loadHome() {
    const main = document.querySelector('#main');
    main.innerHTML = '';
    main.appendChild(createHome());
}

export default loadHome;