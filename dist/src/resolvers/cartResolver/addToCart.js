"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = exports.calPrice = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const lodash_1 = require("lodash");
const calPrice = ({ product, size, toppings, quantity, }) => {
    const sizePrice = product?.details.size.find((i) => i.name === size)?.price || 0;
    let toppingPrice = 0;
    toppings.forEach((item) => {
        toppingPrice += product?.details.topping.find((i) => i.name === item)?.price || 0;
    });
    const price = (product?.price || 0) * quantity + sizePrice + toppingPrice;
    return {
        sizePrice,
        toppingPrice,
        totalPrice: price,
    };
};
exports.calPrice = calPrice;
const addToCart = async (_, { items }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    let cart = await _models_1.CartModel.findOne({ user: context.userId })
        .populate('items.product')
        .populate('user');
    const _items = [];
    let totalPrice = 0;
    const existingItem = [];
    for (let index = 0; index < items.length; index++) {
        const { productId, quantity, size, toppings } = items[index];
        const product = await _models_1.ProductModel.findById(productId);
        if (!product) {
            throw new _config_1.Error('Product not found', '404');
        }
        const _existingItem = cart?.items.find(
        // @ts-ignore
        (i) => i.product?.id === productId && i.size === size && (0, _utils_1.arraysEqual)(i.toppings, toppings));
        const _calPrice = (0, exports.calPrice)({ product, quantity, size, toppings });
        const item = {
            product,
            quantity,
            size,
            toppings,
            price: _calPrice.totalPrice,
        };
        _items.push(item);
        if (_existingItem) {
            existingItem.push(item);
        }
        totalPrice += _calPrice.totalPrice;
    }
    if (!cart) {
        cart = await _models_1.CartModel.create({ user: context.userId, items: _items, totalPrice });
    }
    else {
        if (existingItem.length) {
            //   let _totalPrice = 0;
            const itemsClone = (0, lodash_1.cloneDeep)(existingItem);
            cart.items.forEach((item1) => {
                const item2 = itemsClone.find((item) => 
                // @ts-ignore
                item.product.id === item1.product.id &&
                    item.size === item1.size &&
                    (0, _utils_1.arraysEqual)(item.toppings, item1.toppings));
                if (item2) {
                    item1.quantity += item2.quantity;
                    item1.price += item2.price;
                    // @ts-ignore
                    cart.totalPrice += item2.price;
                }
            });
        }
        else {
            cart.totalPrice += totalPrice;
            cart.items = [...cart.items, ..._items];
        }
    }
    await cart.save();
    return cart;
};
exports.addToCart = addToCart;
//# sourceMappingURL=addToCart.js.map