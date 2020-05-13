const statsWrite = require('./statsWrite');

const add = (cart, req) => {
  cart.contents.push(req.body);
  statsWrite(req.body.product_name, 'Добавить');
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  statsWrite(find.product_name, 'Добавить еще один');
  find.quantity += req.body.quantity;
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id);
  statsWrite(find.product_name, 'Удалить');
  if (find.quantity > 1) {
    find.quantity -= req.body.quantity;
  } else {
    cart.contents.splice(cart.contents.indexOf(find), 1);
  }
  return JSON.stringify(cart, null, 4);
};


module.exports = {
  add,
  change,
  del,
};
