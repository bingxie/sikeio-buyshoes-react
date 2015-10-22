"use strict";

var App = React.createClass({
  displayName: "App",

  renderTitle: function renderTitle() {
    return React.createElement(
      "h1",
      null,
      "Buy Some Shoes!!!"
    );
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      this.renderTitle()
    );
  }
});

window.onload = function () {
  React.render(React.createElement(App, null), document.querySelector("#root"));
};
