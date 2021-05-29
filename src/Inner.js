function Inner({ $app, initialState, addToDo, deleteToDo }) {
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
    this.$list.innerHTML = this.state
      .map((toDo) => {
        const { id, value, date, done, check } = toDo;
        return `
      <div id='${id}' class='${
          done ? 'toDo_list_item done' : 'toDo_list_item'
        }'>
        <input type="checkbox" ${check ? 'checked' : ''}/>
        <div class="text">${value}</div>
        <div class="date">${date}</div>
        <input class="delete" type="button" value="❌"/>
      </div>
      `;
      })
      .join('');
  };
  const $form = this.$target.querySelector('form');
  const $input = this.$target.querySelector('.toDo_input');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo($input.value);
    $input.value = '';
  });
  this.$list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') deleteToDo(+e.target.parentNode.id);
  });
}
export default Inner;
