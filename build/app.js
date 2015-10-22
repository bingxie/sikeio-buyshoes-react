"use strict";

var products = {
  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man"
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man"
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man"
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman"
  }
};

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      React.createElement(
        "div",
        { className: "bg" },
        React.createElement("div", { className: "bg__img" })
      ),
      React.createElement(
        "div",
        { className: "site__main" },
        React.createElement(
          "div",
          { className: "site__left-sidebar" },
          React.createElement(SiteTitle, null)
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          React.createElement(Products, null)
        )
      ),
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        React.createElement(Cart, null),
        React.createElement(Checkout, null)
      ),
      React.createElement(
        "a",
        { className: "site__right-sidebar-toggle" },
        React.createElement("img", { src: "img/arrow-icon.svg" })
      )
    );
  }
});

var SiteTitle = React.createClass({
  displayName: "SiteTitle",

  render: function render() {
    return React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h2",
        null,
        "Buy Me Shoes"
      ),
      React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
    );
  }
});

var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var productNodes = [];

    for (var productId in products) {
      if (products.hasOwnProperty(productId)) {
        productNodes.push(React.createElement(Product, { key: productId, product: products[productId] }));
      }
    }

    return React.createElement(
      "div",
      { className: "products" },
      productNodes
    );
  }
});

var Product = React.createClass({
  displayName: "Product",

  productControl: function productControl(id) {
    console.log(cartItems[id]);
    if (cartItems[id]) {
      return React.createElement(QuantityControl, { quantity: cartItems[id].quantity, variant: "gray" });
    } else {
      return React.createElement(
        "a",
        { className: "product__add" },
        React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
      );
    }
  },

  render: function render() {
    var _props$product = this.props.product;
    var id = _props$product.id;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;

    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "product__display" },
        React.createElement(
          "div",
          { className: "product__img-wrapper" },
          React.createElement("img", { className: "product__img", src: imagePath })
        ),
        React.createElement(
          "div",
          { className: "product__control" },
          this.productControl(id)
        ),
        React.createElement(
          "div",
          { className: "product__price" },
          '$' + price
        )
      ),
      React.createElement(
        "div",
        { className: "product__description" },
        React.createElement(
          "div",
          { className: "product__name" },
          name
        ),
        React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
      )
    );
  }
});

var cartItems = {
  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2
  }
};

var Cart = React.createClass({
  displayName: "Cart",

  render: function render() {
    var cartItemNodes = [];
    for (var productId in cartItems) {
      if (cartItems.hasOwnProperty(productId)) {
        cartItemNodes.push(React.createElement(CartItem, { key: productId, item: cartItems[productId] }));
      }
    }

    return React.createElement(
      "div",
      { className: "cart" },
      React.createElement(
        "h3",
        { className: "cart__title" },
        "Shopping Cart"
      ),
      React.createElement(
        "div",
        { className: "cart__content" },
        React.createElement(
          "h3",
          { className: "cart__title cart__title--spacer" },
          "Shopping Cart"
        ),
        cartItemNodes
      )
    );
  }
});

var CartItem = React.createClass({
  displayName: "CartItem",

  priceString: function priceString(price, quantity) {
    if (quantity > 1) {
      return "$" + price + " x " + quantity;
    } else {
      return "$" + price;
    }
  },

  render: function render() {
    var _props$item = this.props.item;
    var id = _props$item.id;
    var quantity = _props$item.quantity;

    return React.createElement(
      "div",
      { className: "cart-item" },
      React.createElement(
        "div",
        { className: "cart-item__top-part" },
        React.createElement(
          "div",
          { className: "cart-item__image" },
          React.createElement("img", { src: products[id].imagePath })
        ),
        React.createElement(
          "div",
          { className: "cart-item__top-part__middle" },
          React.createElement(
            "div",
            { className: "cart-item__title" },
            products[id].name
          ),
          React.createElement(
            "div",
            { className: "cart-item__price" },
            this.priceString(products[id].price, quantity)
          )
        ),
        React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
      ),
      React.createElement(
        "div",
        { className: "cart-item__qty" },
        React.createElement(QuantityControl, { quantity: quantity })
      )
    );
  }
});

var QuantityControl = React.createClass({
  displayName: "QuantityControl",

  render: function render() {
    var style = this.props.variant ? 'adjust-qty--' + this.props.variant : '';

    return React.createElement(
      "div",
      { className: "adjust-qty " + style },
      React.createElement(
        "a",
        { className: "adjust-qty__button" },
        "-"
      ),
      React.createElement(
        "div",
        { className: "adjust-qty__number" },
        this.props.quantity
      ),
      React.createElement(
        "a",
        { className: "adjust-qty__button" },
        "+"
      )
    );
  }
});

var Checkout = React.createClass({
  displayName: "Checkout",

  caculateSubtotal: function caculateSubtotal() {
    var subtotal = 0;
    for (var productId in cartItems) {
      if (cartItems.hasOwnProperty(productId)) {
        subtotal += products[productId].price * cartItems[productId].quantity;
      }
    }
    return subtotal;
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "checkout" },
      React.createElement(
        "div",
        null,
        React.createElement("hr", { className: "checkout__divider" }),
        React.createElement(
          "div",
          { className: "checkout__line" },
          React.createElement(
            "div",
            { className: "checkout__line__label" },
            "Subtotal"
          ),
          React.createElement(
            "div",
            { className: "checkout__line__amount checkout__line__amount--strikeout" },
            this.caculateSubtotal()
          )
        ),
        React.createElement(
          "a",
          { className: "checkout__button" },
          React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
          React.createElement(
            "div",
            { className: "checkout__button__label" },
            "Checkout"
          )
        )
      )
    );
  }
});

window.onload = function () {
  React.render(React.createElement(App, null), document.querySelector("#root"));
};
