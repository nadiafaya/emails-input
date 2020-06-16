class Input {
  constructor(parent) {
    this.parent = parent;
    this.createElement();
    this.initializeHandlers();
  }

  createElement() {
    this.element = document.createElement('textarea');
    this.element.classList.add('emails-input__text-input');
    this.element.placeholder = 'add more people...';
    const containerElement = this.parent.element.querySelector('.emails-input__input');
    containerElement.appendChild(this.element);
  }

  initializeHandlers() {
    this.element.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(event) {
    this.changed = true;
    if (event.key === 'Enter') {
      event.preventDefault();
      this.parent.addEmail(this.element.value);
      this.element.value = '';
    }
  }
}

export default Input;
