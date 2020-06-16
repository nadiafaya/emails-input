class Email {
  constructor(text, parent) {
    this.parent = parent;
    this.text = text;
    this.createElement();
    this.initializeHandlers();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('emails-input__email');
    this.element.innerHTML = `<span>${this.text}</span> <span class="emails-input__email-close"></span>`;
    const containerElement = this.parent.element.querySelector('.emails-input__input');
    const inputElement = this.parent.element.querySelector('.emails-input__text-input');
    containerElement.insertBefore(this.element, inputElement);
  }

  initializeHandlers() {
    const closeButton = this.element.querySelector('.emails-input__email-close');
    closeButton.addEventListener('click', this.delete.bind(this));
  }

  delete() {
    this.parent.deleteEmail(this);
    this.element.remove();
  }
}

export default Email;
