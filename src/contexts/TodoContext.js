export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener());
  }

  getTodos() {
    return this.todos;
  }

  addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.todos.push(newTodo);
    this.notify();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notify();
  }

  toggleComplete(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.notify();
  }
}
