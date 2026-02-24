# Author
Oliverio Francesca

# Assignment
** 2. Validation **
Validate the user input from the previous exercise
○ Validate as much user input as you can. 
■ Checking before sending the data is always a good practice
○ Check if your validation works in Chrome, Firefox, Edge, Android
■ Testing that validation works is always mandatory
○ Try different techniques to make sure your validation works on the browsers above
■ Make a list of which built-in validators don’t work on which browsers(useful in future)
○ If some HTML5 inputs from the previous exercise don't work on a particular browser, either 
replace them, or find other ways to validate
○ Bonus: test your form and validation on Safari (using a Mac)
Important
○ Make sure you read Client-side form validation before starting this exercise
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
○ Always check from element compatibility on "Can I use"
https://caniuse.com/
○ See the links in references for more help

# Solution
Ho cercato di implementare la validazione dell'input lato client con i tipi disponibili in HTML5.
Per esempio:
- required per nome e cognome
- campi numerici con minimo, massimo e step
- checked opzione default per gender (non rischio di non assegnare un valore)
- tipo email richiede formato *@* (si potrebbe fare più validazione con JS o con librerie)
- campo telefono tipo tel (utile per UX -> tastiera numerica) + min/max length + pattern accetta solo cifre
- default per mission non selezionabile
- biografia max length 255 caratteri
* bonus: slider + output