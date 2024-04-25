"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    // DO some database operation
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // DO some database operation
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
