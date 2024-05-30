1. Events types

# Mouse events:
click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
contextmenu – when the mouse right-clicks on an element.
mouseover / mouseout – when the mouse cursor comes over / leaves an element.
mousedown / mouseup – when the mouse button is pressed / released over an element.
mousemove – when the mouse is moved.

# Keyboard events:
keydown and keyup – when a keyboard key is pressed and released.

# Form element events:
submit – when the visitor submits a <form>.
focus – when the visitor focuses on an element, e.g. on an <input>.

# Document events:
DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

# CSS events:
transitionend – when a CSS-animation finishes.


2. Event handlers

# To react on events we can assign a handler – a function that runs in case of an event.
# Handlers are a way to run JavaScript code in case of user actions.
# We can assign a handler using a DOM property on<event>.
<input id="elem" type="button" value="Click me">
<script>
  elem.onclick = function() {
    alert('Thank you');
  };
</script>


# addEventListener 
The fundamental problem of the aforementioned ways to assign handlers is that we can’t assign multiple handlers to one event.

Multiple calls to addEventListener allow it to add multiple handlers, like this:
<input id="elem" type="button" value="Click me"/>

<script>
  function handler1() {
    alert('Thanks!');
  };

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert("Hello");
  elem.addEventListener("click", handler1); // Thanks!
  elem.addEventListener("click", handler2); // Thanks again!
</script>


3. Bubbling and capturing

# This handler is assigned to <div>, but also runs if you click any nested tag like <em> or <code>:
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>

# Bubbling: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

A click on the inner <p> first runs onclick:

On that <p>.
Then on the outer <div>.
Then on the outer <form>.
And so on upwards till the document object.

So if we click on <p>, then we’ll see 3 alerts: p → div → form.
The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.


# event.target vs event.currentTarget
The most deeply nested element that caused the event is called a target element, accessible as event.target.
The “current” element, the one that has a currently running handler on it is called currentTarget.


# Stopping bubbling
The method for it is event.stopPropagation().
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>

If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

# capturing 
The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

That is: for a click on <td> the event first goes through the ancestors chain down to the element (capturing phase), then it reaches the target and triggers there (target phase), and then it goes up (bubbling phase), calling handlers on its way.


4. Event delegation

# Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.
# The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

Our task is to highlight a cell <td> on click.
<table>
  <tr>
    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="n">...</td>
    <td class="ne">...</td>
  </tr>
  <tr>...2 more lines of this kind...</tr>
  <tr>...2 more lines of this kind...</tr>
</table>

// solutions
let selectedTd;

table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
};

function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}


