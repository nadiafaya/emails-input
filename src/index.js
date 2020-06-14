import './styles.css';

window.EmailsInput = function EmailsInput(rootNode) {
  if (!rootNode) {
    throw new Error('No root node provided to EmailsInput');
  }
  if (rootNode.nodeType !== Node.ELEMENT_NODE) {
    throw new Error('Root node provided to EmailsInput is not a node element');
  }

  rootNode.innerText = 'Email Input';
  rootNode.classList.add('email-input');
};
