// TodoItem.js
import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  render() {
    const { todo, todoContext } = this.props;

    const li = document.createElement("li");
    li.className = "todo-item";

    const text = document.createElement("span");
    text.textContent = todo.text;
    if (todo.completed) {
      text.style.textDecoration = "line-through";
      text.style.opacity = "0.5";
    }

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = todo.completed
      ? "Mark Incomplete"
      : "Mark Complete";
    toggleBtn.addEventListener("click", () => {
      todoContext.toggleComplete(todo.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todoContext.deleteTodo(todo.id);
    });

    li.appendChild(text);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    return li;
  }
}
