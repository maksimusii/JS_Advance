const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

// Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций? 
const renderProduct = (title='New_prod', price=9999) => {
  return `<div class="product-item">
            <a><img src="https://placeimg.com/240/120/any" alt="${title}"></a>
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((good) => {
    return renderProduct(good.title, good.price);
  });
  // const productList = [];
  // list.forEach(good => {
  //   productList.push(renderProduct(good.title, good.price));
  // });
  //  3. Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? - Это происходит из-за того что мы выводим весь массив элементов и массив включает разделители запятые после каждого элемента 
  // Как это исправить ? - Это можно исправить сборкой строки из элементов массива. 

  for (let i = 0; i < productList.length; i++) {
    document.querySelector('.products').innerHTML += productList[i];
  }
  
};

renderProducts(products);