function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('contact-ph-number');
    phoneNumber.textContent = '📞 123 456 789'

    const address = document.createElement('p');
    address.classList.add('contact-address');
    address.textContent = '🏠 575 1st Ave Fairbanks Alaska 99701'

    const location = document.createElement('img');
    location.classList.add('contact-location');
    location.src = 'images/location.png';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

function loadContact() {
    const main = document.querySelector('#main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export default loadContact;