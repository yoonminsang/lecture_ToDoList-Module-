function Head({ $app, initialState }) {
  this.$target = document.createElement('div');
  this.$target.className = 'content_head';
  this.$target.innerHTML = `<h1>To Do List</h1><div class='clock'></div>`;
  $app.appendChild(this.$target);
  this.$clock = this.$target.querySelector('.clock');
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    this.$clock.innerHTML = this.state;
  };
}
export default Head;
