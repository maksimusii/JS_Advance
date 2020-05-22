const add = (cart, req) => {
    cart.contents.push(req.body);
    cart.amount += req.body.price;
    cart.contents.quantity = req.body.quantity
    return { name: req.body.product_name, newCart: JSON.stringify(cart, null, 4), };
};

const change = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    if (req.body.quantity === -1) {
        find.quantity += req.body.quantity;
        cart.amount -= req.body.price;
    } else {
        let deltaQuantity = req.body.quantity - find.quantity;
        if(req.body.isCard) {
            find.quantity = req.body.quantity;
        } else {
            find.quantity++;
        }
        cart.amount += deltaQuantity * req.body.price;
    }
       
    return { name: find.product_name, newCart: JSON.stringify(cart, null, 4), };
};

/**
 * Добавили новый метод удаления
 * @param cart
 * @param req
 * @returns {{newCart: *, name: *}}
 */
const remove = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.amount -= req.body.price;
    return { name: find.product_name, newCart: JSON.stringify(cart, null, 4), };
};

module.exports = {
    add,
    change,
    remove,
};
