function Inner({ $app, initialState, addToDo }) {
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
    this.$list.innerHTML = this.state.map((toDo) => {
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
    });
    /*
        <div
      id={id}
      className={done ? 'toDo_list_item done' : 'toDo_list_item'}
      onClick={(e) => doneChange(e, id)}
    >
      <input type="checkbox" checked={check} onChange={() => checkChange(id)} />
      <div className="text">{value}</div>
      <div className="date">{date}</div>
      <input
        className="delete"
        type="button"
        value="❌"
        onClick={() => deleteToDo(id)}
      />
    </div>
    */
  };
  const $form = this.$target.querySelector('form');
  const $input = this.$target.querySelector('.toDo_input');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo($input.value);
    $input.value = '';
  });
}
export default Inner;
