class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
    
    // 2. Добавьте для ProductsList метод, определяющий суммарную стоимость всех товаров.
    this.allPriceSum = 0;
    this._allProductsSum();

  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ]
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  // Метод, определяющий суммарную стоимость всех товаров
  _allProductsSum() {
    for (let i = 0; i < this.allProducts.length; i++){
      this.allPriceSum += Number(this.allProducts[i].price);
    }
    console.log(this.allPriceSum);
}
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }

}
new ProductList();


// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
class ProductCart {
  constructor() {

  }
  renderProductInBasket() { 
    // Метод рендеринга продукта в корзине
  }
  
  getTotalSumPriceProductInBasket () {
  // Метод получения общей стоимости продуктов в корзине
  }

  renderetTotalSumPriceProductInBasket() { 
    // Метод рендеринга общей стоимости продуктов в корзине
  }
}

class ProductCartItem {
  constructor() {

  }

  addProductToBacket() {
    // Метод добавление продукта в корзину
  }

  removeProductFromBacket() {
    // Метод удаление продукта из корзины
  }

 
}

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => document.querySelector('.products')
//     .insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
//
// renderProducts(products);
