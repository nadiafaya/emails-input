import './styles.css';
import EmailsInput from './EmailsInput';

window.EmailsInput = function createEmailsInput(rootNode) {
  if (!rootNode) {
    throw new Error('No root node provided to EmailsInput');
  }
  if (rootNode.nodeType !== Node.ELEMENT_NODE) {
    throw new Error('Root node provided to EmailsInput is not a node element');
  }

  return new EmailsInput(rootNode);
};
