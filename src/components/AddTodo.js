// AddTodo.js
import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  render() {
    const div = document.createElement("div");
    div.className = "add-todo";

    div.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details..." />
      <button id="todo-add-btn">Add To Do</button>
    `;

    const input = div.querySelector("#todo-input");
    const button = div.querySelector("#todo-add-btn");

    button.addEventListener("click", () => {
      const value = input.value.trim();
      if (value) {
        this.props.todoContext.addTodo(value);
        input.value = "";
      }
    });

    return div;
  }
}
