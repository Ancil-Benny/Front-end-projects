document.addEventListener('DOMContentLoaded', () => {
  const ingredients = [
    { name: 'patty', price: 70 },
    { name: 'lettuce', price: 10 },
    { name: 'cheese', price: 20 },
    { name: 'tomato', price: 10 },
    { name: 'onion', price: 10 },
    { name: 'bacon', price: 30 },
    { name: 'pickles', price: 15 }
  ];
  const selectedIngredients = [];
  const basePrice = 200;
  let totalPrice = basePrice;

  const ingredientsList = document.getElementById('ingredients-list');
  const burgerImage = document.getElementById('burger-image');
  const burgerList = document.getElementById('burger-list');
  const createBurgerButton = document.getElementById('create-burger');
  const totalPriceElement = document.getElementById('total-price');

  
  ingredientsList.innerHTML = '';

  // ingredients list
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.dataset.ingredient = ingredient.name;
    li.dataset.price = ingredient.price;
    li.textContent = `${ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)} - ₹${ingredient.price}`;
    ingredientsList.appendChild(li);
  });

  
  ingredientsList.addEventListener('click', event => {
    if (event.target && event.target.nodeName === 'LI') {
      const ingredient = event.target.dataset.ingredient;
      const price = parseFloat(event.target.dataset.price);
      addIngredient(ingredient, price);
    }
  });

  createBurgerButton.addEventListener('click', () => {
    renderBurger();
  });

 
  function addIngredient(ingredient, price) {
    if (!selectedIngredients.some(item => item.name === ingredient)) {
      selectedIngredients.push({ name: ingredient, price: price });
      totalPrice += price;
      updateBurgerList();
      renderBurger();
      updateTotalPrice();
    }
  }

  // Render
  function renderBurger() {
    burgerImage.innerHTML = '<img src="hero3.png" alt="Burger" class="img-fluid">';
    selectedIngredients.forEach(ingredient => {
      const label = document.createElement('div');
      label.className = `ingredient-label ${ingredient.name}`;
      label.textContent = ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);

      const line = document.createElement('div');
      line.className = 'line';
      const dot = document.createElement('div');
      dot.className = 'dot';

      // label for ingredient name
      switch (ingredient.name) {
        case 'lettuce':
          label.style.top = '20%';
          label.style.left = '70%';
          line.style.top = '20%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        case 'pickles':
          label.style.top = '30%';
          label.style.left = '70%';
          line.style.top = '30%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        case 'patty':
          label.style.top = '64%';
          label.style.left = '70%';
          line.style.top = '64%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        case 'tomato':
          label.style.top = '74%';
          label.style.left = '70%';
          line.style.top = '74%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        case 'bacon':
          label.style.top = '38%';
          label.style.left = '70%';
          line.style.top = '38%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        case 'onion':
          label.style.top = '45%';
          label.style.left = '70%';
          line.style.top = '45%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        case 'cheese':
          label.style.top = '53%';
          label.style.left = '70%';
          line.style.top = '53%';
          line.style.left = '50%';
          line.style.height = '2px';
          line.style.width = '20%';
          break;

        default:
          break;
      }

      burgerImage.appendChild(line);
      burgerImage.appendChild(dot);
      burgerImage.appendChild(label);
    });
  }

 
  function updateBurgerList() {
    burgerList.innerHTML = '';
    selectedIngredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.className = 'list-group-item selected';
      li.dataset.ingredient = ingredient.name;
      li.innerHTML = `${ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)} - ₹${ingredient.price} <span class="remove-btn">&times;</span>`;
      burgerList.appendChild(li);
    });

 
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', event => {
        const ingredient = event.target.parentElement.dataset.ingredient;
        removeIngredient(ingredient);
      });
    });
  }


  function removeIngredient(ingredient) {
    const index = selectedIngredients.findIndex(item => item.name === ingredient);
    if (index > -1) {
      totalPrice -= selectedIngredients[index].price;
      selectedIngredients.splice(index, 1);
      updateBurgerList();
      renderBurger();
      updateTotalPrice();
    }
  }

  function updateTotalPrice() {
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }
});

// Hide preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.classList.remove('preloader-active');
    document.documentElement.classList.remove('preloader-active');
  }, 1000); 
});

document.body.classList.add('preloader-active');
document.documentElement.classList.add('preloader-active');