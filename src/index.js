import './styles.css';

window.EmailsInput = function EmailsInput(rootNode) {
  if (!rootNode) {
    throw new Error('No root node provided to EmailsInput');
  }
  if (rootNode.nodeType !== Node.ELEMENT_NODE) {
    throw new Error('Root node provided to EmailsInput is not a node element');
  }

  rootNode.innerHTML = `<div class="emails-input">
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
          <textarea
            class="emails-input__text-input"
            placeholder="add more people..."
          ></textarea>
        </div>
      </div>
      <div class="emails-input__action-container">
          <button type="button" class="emails-input__button">Add email</button>
          <button type="button" class="emails-input__button">
            Get emails count
          </button>
        </div>

    </div>`;
  rootNode.classList.add('');
};
