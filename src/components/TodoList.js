// TodoList.js
import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.props.todoContext.subscribe(() => this.update());
  }

  render() {
    const ul = document.createElement("ul");
    ul.className = "todo-list";

    const todos = this.props.todoContext.getTodos();
    todos.forEach((todo) => {
      const item = new TodoItem({
        todo,
        todoContext: this.props.todoContext,
      });
      ul.appendChild(item.render());
    });

    return ul;
  }
}
