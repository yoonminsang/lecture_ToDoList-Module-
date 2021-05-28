function Inner({ $app, initialState }) {
  this.$target = document.createElement('div');
  this.$target.className = 'content_inner';
  this.$target.innerHTML = `
  <div class="content_inner">
    <div class="contnet_menu">
      <form>
        <input
          class="toDo_input"
          type="text"
          placeholder="write to do list"
        />
        <input class="toDo_add btn" type="submit" value="add" />
        <input
          class="toDo_multi_delete btn"
          type="button"
          value="delete"
        />
      </form>
    </div>
    <div class="toDo_list"></div>
  </div>`;
  $app.appendChild(this.$target);
  this.$list = this.$target.querySelector('.toDo_list');
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    this.$list.innerHTML = this.state;
  };
}
export default Inner;
