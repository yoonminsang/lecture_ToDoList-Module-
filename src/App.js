import Head from './Head.js';
const DATE = 'date';
const TODOS = 'todos';
function App($app) {
  this.state = {
    date: '',
    toDos: [],
  };
  const head = new Head({ $app, initialState: this.state.toDos });
  setInterval(
    () => this.setState(DATE, { ...this.state, date: getDate() }),
    1000
  );
  function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + String(month);
    let datee = date.getDate();
    if (datee < 10) datee = '0' + String(datee);
    const day = date.toString().slice(0, 3);
    const dateArr = [year, month, datee, day];
    const time = date.toString().slice(16, 24);
    return dateArr.join(' ') + '  ' + time;
  }

  this.setState = (type, nextstate) => {
    this.state = nextstate;
    switch (type) {
      case DATE:
        return head.setState(this.state.date);
    }
  };
  const init = () => {
    this.setState(DATE, { ...this.state, date: getDate() });
  };
  init();
}

export default App;
