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
    if (!this.isValidEmail()) {
      this.element.classList.add('emails-input__email--invalid');
    }

    this.element.innerHTML = `<span>${this.text}</span> <span class="emails-input__email-close"></span>`;
    const inputElement = this.parent.element.querySelector('.emails-input__text-input');
    this.parent.element.insertBefore(this.element, inputElement);
  }

  isValidEmail() {
    return /^.+@.+\..+$/.test(this.text);
  }

  initializeHandlers() {
    const closeButton = this.element.querySelector('.emails-input__email-close');
    closeButton.addEventListener('click', this.delete.bind(this));
  }

  delete() {
    this.parent.deleteEmail(this);
    this.element.parentNode.removeChild(this.element);
  }
}

export default Email;
