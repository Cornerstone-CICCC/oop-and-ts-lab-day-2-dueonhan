// App.js
import { Component } from "../common/Component.js";
import { AddTodo } from "./AddTodo.js";
import { TodoList } from "./TodoList.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.todoContext = new TodoContext();
  }

  render() {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <h1>My To Dos</h1>
      <div id="wrapper-add"></div>
      <div id="wrapper-todos"></div>
    `;

    const add = new AddTodo({ todoContext: this.todoContext });
    add.mount(container.querySelector("#wrapper-add"));

    const list = new TodoList({ todoContext: this.todoContext });
    list.mount(container.querySelector("#wrapper-todos"));

    return container;
  }
}
