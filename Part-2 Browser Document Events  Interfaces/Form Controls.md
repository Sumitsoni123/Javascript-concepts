1. Forms: event and method submit

# Event: submit
There are two main ways to submit a form:

The first – to click <input type="submit"> or <input type="image">.
The second – press Enter on an input field.

<form onsubmit="alert('submit!');return false">
  First: Enter in the input field <input type="text" value="text"><br>
  Second: Click "submit": <input type="submit" value="Submit">
</form>


# Method: submit
To submit a form to the server manually, we can call form.submit().
Then the submit event is not generated. It is assumed that if the programmer calls form.submit(), then the script already did all related processing.
Sometimes that’s used to manually create and send a form, like this:


let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name="q" value="test">';

// the form must be in the document to submit it
document.body.append(form);

form.submit();
