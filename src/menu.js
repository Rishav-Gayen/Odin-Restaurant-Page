function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('Spaghetti Bolognese', 'Spaghetti, ground beef, onions, garlic, carrots, celery, tomato sauce, red wine, olive oil, salt, pepper, and Parmesan cheese.'))
    menu.appendChild(createMenuItem('Chicken Tikka Masala', 'Chicken breast, yogurt, lemon juice, ginger, garlic, garam masala, turmeric, cumin, coriander, tomato puree, cream, and fresh cilantro'))
    menu.appendChild(createMenuItem('Sushi Rolls', 'Sushi rice, nori sheets, cucumber, avocado, crab, soy sauce, wasabi, and pickled ginger.'))
    menu.appendChild(createMenuItem('Cheeseburger', 'Ground beef, burger buns, cheese slices, lettuce, tomatoes, onions, pickles, ketchup, mustard, and mayonnaise.'))
    menu.appendChild(createMenuItem('Vegetable Stir fry', 'Mixed vegetables (bell peppers, broccoli, carrots, snap peas), tofu or chicken, soy sauce, garlic, ginger, sesame oil, and cornstarch.'))
    menu.appendChild(createMenuItem('Margherita Pizza', ' Pizza dough, tomato sauce, mozzarella cheese, fresh basil, olive oil, salt, and pepper.'))
    menu.appendChild(createMenuItem('Caesar Salad', 'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing (mayonnaise, anchovies, garlic, Dijon mustard, lemon juice, Worcestershire sauce).'))
    menu.appendChild(createMenuItem('Beef Stroganoff', 'Beef strips, onions, mushrooms, beef broth, sour cream, egg noodles, butter, flour, and salt.'))
    return menu;

}

function createMenuItem(dish, ingredients) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item')

    const foodImg = document.createElement('img');
    foodImg.classList.add('menu-item-img')
    foodImg.src = `images/Food/${dish.toLowerCase()}.png`;

    const foodName = document.createElement('h2');
    foodName.classList.add('menu-item-name');
    foodName.textContent = dish;

    const foodIngredients = document.createElement('p');
    foodIngredients.classList.add('menu-item-ingredients');
    foodIngredients.textContent = ingredients;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodIngredients);

    return menuItem;
    
}

function loadMenu() {
    const main = document.querySelector('#main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export default loadMenu;