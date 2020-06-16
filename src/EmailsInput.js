import Input from './Input';
import Email from './Email';

function generateUuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class EmailsInput {
  constructor(containerNode) {
    this.containerNode = containerNode;
    this.id = `emails-input-${generateUuidv4()}`;
    this.emailList = [];
    this.initialize();
  }

  initialize() {
    this.element = document.createElement('div');
    this.element.id = this.id;
    this.element.classList.add('emails-input');
    this.element.innerHTML = `
      <div class="emails-input__container">
        <h1 class="emails-input__title">Share <strong>Board name</strong> with others</h1>
        <div class="emails-input__input">
          <div class="emails-input__email">
            john@miro.com <span class="emails-input__email-close"></span>
          </div>
          <div class="emails-input__email emails-input__email--invalid">
            invalid.email <span class="emails-input__email-close"></span>
          </div>
          <div class="emails-input__email">
            mike@miro.com <span class="emails-input__email-close"></span>
          </div>
          <div class="emails-input__email">
            alexander@miro.com <span class="emails-input__email-close"></span>
          </div>
        </div>
      </div>
      <div class="emails-input__action-container">
          <button type="button" class="emails-input__button">Add email</button>
          <button type="button" class="emails-input__button">
            Get emails count
          </button>
        </div>
    `;
    this.containerNode.appendChild(this.element);
    this.input = new Input(this);
  }

  addEmail(emailText) {
    const email = new Email(emailText, this);
    this.emailList.push(email);
  }
}

export default EmailsInput;
