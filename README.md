# Emails input library

**emails-input** is a pure js library to generate an input for multiple emails in your application.

[Check out the demo here](https://nadiafaya.github.io/emails-input/)

## How to use

1. Add the emails-input library (you can find the latest version in [dist/bundle.js](https://github.com/nadiafaya/emails-input/blob/master/dist/bundle.js))

```HTML
<script src="emails-input.js"></script>
```

2. Add a container element somewhere in your applicatoin

```HTML
<div id="emails-input"></div>
```

3. Initialize the component

```javascript
var inputContainerNode = document.querySelector('#emails-input');
var emailsInput = EmailsInput(inputContainerNode);
```

### Full example:

```html
<div id="emails-input"></div>
<script src="emails-input.js"></script>
<script>
  const containerNode = document.querySelector('#emails-input');
  const emailsInput = EmailsInput(containerNode);
</script>
```

## Available methods

### .addEmail(email)

Adds a new email with the provided text to the input.

```javascript
const emailsInput = EmailsInput(containerNode);
emailsInput.addEmail('email@email.com');
```

### .deleteEmail(email)

Deletes an email with the provided text from the input.

```javascript
const emailsInput = EmailsInput(containerNode);
emailsInput.deleteEmail('email@email.com');
```

### .deleteLastEmail()

Deletes the last email in the input. No action is done if no emails are found.

```javascript
const emailsInput = EmailsInput(containerNode);
emailsInput.deleteLastEmail();
```

### .getValidEmails()

Returns an array with the list of valid emails in the input.

```javascript
const emailsInput = EmailsInput(containerNode);
const validEmails = emailsInput.getValidEmails();
console.log(validEmails.length);
// 2
```
