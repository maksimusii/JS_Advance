const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//Переделать в ДЗ
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };

// 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
let getRequest = (url)  => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.status);
      }
    }
    xhr.send();
  })
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
   // Метод render() вызывается в обработчике этого промиса
    this._fetchProducts()
        .then(data => {
        this.goods = [...data];
        this._render();
        })
        .catch(error => {
          console.log(error);
        });
  }

// 3.* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.
  _fetchProducts() {
    return getRequest(`${API}/catalogData.json`)
      .then(response => JSON.parse(response))
      .catch(error => {
        console.log(error);
      });
  
  }

  // _getProducts() {
  //   return getRequest(`${API}/catalogData.json`)
  //       .then(response => console.log(response))
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }

  _render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}


class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
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


// 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.

class ProductCart {
  constructor() {
    this.allProducts = [];
    this.goods = [];
    this.catalog = [];
    this._getBasket()
      .then(data => {
        this.goods = [...data.contents];
        this._render();
        })
      .catch(error => console.log(error));
    this._getCatalog()
      .then(data => this.catalog = [...data])
      .catch(error => console.log(error));
    new ProductList();
    setTimeout(() => this.setEventListenerToBuyButton(), 1500);
  }

  calcSum() {
    return this.goods.reduce((sum, good) => sum + (good.price * good.quantity), 0);
  }
  _render() {
    const block = document.querySelector(".menu-cart");
    const totalSumBlock = `<div class="totalPrice"><p class="totalPrice_p">Всего:</p><p class="totalPrice_p_price"></p></div>`;
    block.insertAdjacentHTML('beforeend', totalSumBlock );
    this.renderetTotalSumPriceProductInBasket();
    for (let product of this.goods) {
      const productObject = new ProductCartItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('afterbegin', productObject.renderProductInBasket());
      this.setEventListenerToCardButton(product);
    }
  }

  setEventListenerToCardButton(id) {
    let removeProductBtn = document.querySelector(`[data-idr="${id.id_product}"]`);
    removeProductBtn.addEventListener('click', () => this.removeProductFromBacket(event.srcElement.parentNode.parentNode.dataset.id));
  }

  setEventListenerToBuyButton() {
    let buyButton = document.querySelectorAll('.buy-btn');
    for (let i = 0; i < buyButton.length; i++) {
      buyButton[i].addEventListener('click', () => this.addProductToBacket(event.srcElement.parentNode.parentNode.dataset.id));
    }
  }
  
  _getBasket() {
    return getRequest(`${API}/getBasket.json`)
      .then(response => JSON.parse(response))
      .catch(error => console.log(error));
  }
  _getCatalog() {
    return getRequest(`${API}/catalogData.json`)
      .then(response => JSON.parse(response))
      .catch(error => console.log(error));
  }
  addProductToBacket(id) {
    // Метод добавление продукта в корзину
    if (this.goods.findIndex(product => product.id_product === +id) == -1) {
      let productObject = this.catalog.find(product => product.id_product === +id);
      let productQuantity = { quantity: 0 };
      productObject = Object.assign(productObject, productQuantity);
      this.goods.push(productObject);
    } 
    this.goods.find(product => product.id_product === +id).quantity++
    this._clearBacket();
    this._render();
  }

  _clearBacket() {
    let allProductInBacket = document.querySelector('.menu-cart');
    while (allProductInBacket.firstChild) {
      allProductInBacket.removeChild(allProductInBacket.firstChild);
  }
  }
  removeProductFromBacket(id) {
    // Метод удаление продукта из корзины
    let quantityProduct = this.goods.find(product => product.id_product === +id).quantity;
    if (quantityProduct == 1) {
      document.querySelector(`.menu-cart > [data-id="${id}"]`).remove();
      this.goods.splice(this.goods.findIndex(product => product.id_product === +id), 1);
    } else {
      this.goods.find(product => product.id_product === +id).quantity--;
      this._clearBacket();
      this._render();
    }
    this.renderetTotalSumPriceProductInBasket();
  }
  

  renderetTotalSumPriceProductInBasket() { 
    const totalPrice = document.querySelector(".totalPrice_p_price");
    totalPrice.innerText = `${this.calcSum()} \u20bd`;
    // Метод рендеринга общей стоимости продуктов в корзине
  }
}

class ProductCartItem {
  constructor(product, img = 'https://placehold.it/50x30') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
    this.quantity = product.quantity; 
  }

  renderProductInBasket() { 
    return `<div class="productCart" data-id="${this.id}">
          <img class="productImg" src="${this.img}" alt="">
          <div>
              <p class="productName">${this.title}</p>
              <div class="price">
                  <p class="productPrice">${this.price} \u20bd</p>
                  <p class="productMultSign">x</p>
                  <p class="productCount">${this.quantity}</p>
              </div>
          </div>
          <div class="removeProductBtn" data-idr="${this.id}"><i class="far fa-times-circle"></i></div>
          </div>`
    // Метод рендеринга продукта в корзине
  }
}
new ProductCart();



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
