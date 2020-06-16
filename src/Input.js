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
    this.element.addEventListener('focusout', this.createEmail.bind(this));
  }

  onKeyDown(event) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.createEmail();
    }
  }

  onFocusOut() {
    this.parent.addEmail(this.element.value);
    this.element.value = '';
  }

  createEmail() {
    if (this.element.value) {
      this.parent.addEmail(this.element.value);
      this.element.value = '';
    }
  }
}

export default Input;
