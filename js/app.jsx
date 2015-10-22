let App = React.createClass({
  render: function() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>
        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
          </div>
          <div className="site__content">
            <Products/>
          </div>
        </div>
        <div className="site__right-sidebar">
          <Cart/>
          <Checkout/>
        </div>
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  }
});

let SiteTitle = React.createClass({
  render() {
    return (
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img className="title__heart" src="img/heart.svg" />
      </div>
    );
  }
});

let Products = React.createClass({
  render() {
    return (
      <div className="products">
        Products
      </div>
    );
  }
});

let Cart = React.createClass({
  render() {
    return (
      <div className="cart">Cart</div>
    );
  }
});

let Checkout = React.createClass({
  render() {
    return (
      <div className="checkout">Checkout</div>
    );
  }
});

window.onload = () => {
  React.render(<App/>, document.querySelector("#root"));
}
