1. DOM (Document Object Model)

# The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

# The document object is the main “entry point” to the page. We can change or create anything on the page using it.
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);


2. BOM (Browser Object Model)

# The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

# The navigator object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: navigator.userAgent – about the current browser, and navigator.platform – about the platform (can help to differentiate between Windows/Linux/Mac etc).

# The location object allows us to read the current URL and can redirect the browser to a new one.


3. DOM Tree

# According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.


4. Searching: getElement*, querySelector*

# If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.

# By far, the most versatile method, elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>


# The call to elem.querySelector(css) returns the first element for the given CSS selector.


5. Node properties: type, tag and contents

# innerHTML: The innerHTML property allows to get the HTML inside the element as a string.
<body>
  <p>A paragraph</p>
  <div>A div</div>
  <script>
    alert( document.body.innerHTML );           // read the current contents
    document.body.innerHTML = 'The new BODY!';  // replace it
  </script>
</body>

# Beware: “innerHTML+=” does a full overwrite. We can append HTML to an element by using elem.innerHTML+="more html".
# In other words, innerHTML+= does this:
The old contents is removed.
The new innerHTML is written instead (a concatenation of the old and the new one).

chatDiv.innerHTML += "<div>Hello<img src='smile.gif'/> !</div>";
chatDiv.innerHTML += "How goes?";


# outerHTML: full HTML of the element


6. DOM properties

# When the browser loads the page, it “reads” (another word: “parses”) the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.

# For instance, if the tag is <body id="page">, then the DOM object has body.id="page".

# DOM properties : DOM nodes are regular JavaScript objects. We can alter them.
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator

# we can add method as well
document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)

# We can also modify built-in prototypes like Element.prototype and add new methods to all elements:
# So, DOM properties and methods behave just like those of regular JavaScript objects:
Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY



7. DOM Attributes

# In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them.

# So when an element has id or another standard attribute, the corresponding property gets created. But that doesn’t happen if the attribute is non-standard.

<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // non-standard attribute does not yield a property
    alert(document.body.something); // undefined
  </script>
</body>

# So, All attributes are accessible by using the following methods:
elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute.