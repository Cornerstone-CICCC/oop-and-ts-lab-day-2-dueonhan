export class Component {
  constructor(props = {}) {
    this.props = props;
    this.element = null;
    this.update = this.update.bind(this);
  }

  mount(parent) {
    if (!this.element) this.element = this.render();
    parent.appendChild(this.element);
  }

  update() {
    if (this.element) {
      const newEl = this.render();
      this.element.replaceWith(newEl);
      this.element = newEl;
    }
  }

  render() {
    return document.createElement("div");
  }
}
