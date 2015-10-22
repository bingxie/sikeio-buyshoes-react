let App = React.createClass({
  renderTitle() {
    return (
      <h1>Buy Some Shoes!!!</h1>
    );
  },

  render() {
    return (
      <div className="site">
        {this.renderTitle()}
      </div>
    );
  },
});

window.onload = () => {
  React.render(<App/>, document.querySelector("#root"));
}
