class Email {
  constructor(text, parent) {
    this.parent = parent;
    this.text = text;
    this.createElement();
  }

  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('emails-input__email');
    this.element.innerHTML = `<span>${this.text}</span> <span class="emails-input__email-close"></span>`;
    const containerElement = this.parent.element.querySelector('.emails-input__input');
    const inputElement = this.parent.element.querySelector('.emails-input__text-input');
    containerElement.insertBefore(this.element, inputElement);
  }
}

export default Email;
