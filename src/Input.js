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
    this.parent.element.appendChild(this.element);
  }

  initializeHandlers() {
    this.element.addEventListener('keydown', this.onKeyDown.bind(this));
    this.element.addEventListener('focusout', this.createEmail.bind(this));
    this.element.addEventListener('paste', this.onPaste.bind(this));
  }

  onKeyDown(event) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.createEmail();
    }
    if (event.key === 'Backspace' && !this.element.value) {
      this.parent.deleteLastEmail();
    }
  }

  onFocusOut() {
    this.parent.addEmail(this.element.value);
    this.element.value = '';
  }

  onPaste(event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    const emails = pastedText.split(',');
    emails.forEach((email) => email && this.parent.addEmail(email));
  }

  createEmail() {
    if (this.element.value) {
      this.parent.addEmail(this.element.value);
      this.element.value = '';
    }
  }
}

export default Input;
