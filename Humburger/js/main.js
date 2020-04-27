
class Hamburger {
    constructor() { 
        this.stuffing = [];
        this.priceEl = document.getElementById('price');
        this.caloriesEl = document.getElementById('calories');
        this.blockEl = document.querySelector('.humburgerIngredient');
        this.humburgerEl = document.querySelectorAll('.humburger');
        this.ingredients = document.querySelectorAll('.humburgers > div, .ingredients > div');
        this.ingredientsEl = document.querySelectorAll('.ingredients');
        this.ingredientLegend = document.querySelectorAll('.ingredientLegend');
        this.setEventListenerIngredient();
        
        
        
    }
    // Добавить ингридиент
    addIngredient(data) {
        let item = document.querySelector(`[data-type="${data.type}"]`);
        this.stuffing.push(data);
        this.blockEl.insertAdjacentHTML('beforeend', item.outerHTML);
        this.calculatePrice();
        this.calculateCalories();
        this.hiddingSize();
        this.setEventListenerNewIngredient();

    }
    // Удалить ингридиент
    removeIngredient(data) {
        if (data.type != undefined) {
            if (this.stuffing[0].type == data.type) {
                this.cleaIngredient();
            } else {
                document.querySelector(`.humburgerIngredient > [data-type="${data.type}"]`).remove();
                this.stuffing.splice(this.stuffing.findIndex(type => type === data.type), 1);
            }
            this.calculatePrice();
            this.calculateCalories();
            
        }
    }
    // Очистка списка ингридиентов
    cleaIngredient() {
        this.stuffing = [];
        document.querySelector('.sizeLegend').classList.remove('hidden');
        for (let i = 0; i < 2; i++) {
            this.humburgerEl[i].classList.remove('hidden');
            this.ingredientsEl[i].classList.add('hidden');
            this.ingredientLegend[i].classList.add('hidden');
        }
        
        while (this.blockEl.firstChild) {
            this.blockEl.removeChild(this.blockEl.firstChild);
        }
    }
    // Установка прослушивания событий на добовляемые ингридиенты
    setEventListenerNewIngredient() {
        let ingredientAll = document.querySelectorAll('.humburgerIngredient > div');
        if (ingredientAll.length != 0 || undefined) {
                ingredientAll[ingredientAll.length-1].addEventListener('click', () => {
                    this.removeIngredient(event.srcElement.parentNode.dataset); 
                    });
                
            }
        }
    // Установка прослушивания событий на ингридиенты
    setEventListenerIngredient() {
        for (let i = 0; i < this.ingredients.length; i++) {
            this.ingredients[i].addEventListener('click', () => {
                this.addIngredient(event.srcElement.parentNode.dataset);
            });
        }
    }
    // Выбора размера скрывается 
    hiddingSize() {
        document.querySelector('.sizeLegend').classList.add('hidden');
        for (let i = 0; i < 2; i++){
            this.ingredientsEl[i].classList.remove('hidden');
            this.humburgerEl[i].classList.add('hidden');
            this.humburgerEl[i].classList.add('hidden');
            this.ingredientLegend[i].classList.remove('hidden');
        }
    }
    // Посчитать и вывести стоимость
    calculatePrice() {
        let allPrice = 0;
        for (let i = 0; i < this.stuffing.length; i++){
            allPrice += Number(this.stuffing[i].price);
        }
        this.priceEl.innerText = `Стоимость продукта: ${allPrice} \u20bd`;
    }
       // Посчитать и вывести калорийность 
    calculateCalories() {
        let allCalories = 0;
        for (let i = 0; i < this.stuffing.length; i++){
            allCalories += Number(this.stuffing[i].calories);
        }
        this.caloriesEl.innerText = `Калорийность продукта: ${allCalories} ккалорий`;
        
    }
  }
new Hamburger();