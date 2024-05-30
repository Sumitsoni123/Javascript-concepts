1. The lifecycle of an HTML page has three important events:

# DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.

load – not only HTML is loaded, but also all the external resources: images, styles etc.
beforeunload/unload – the user is leaving the page.

# Each event may be useful:

DOMContentLoaded event – DOM is ready, so the handler can lookup DOM nodes, initialize the interface.
load event – external resources are loaded, so styles are applied, image sizes are known etc.
beforeunload event – the user is leaving: we can check if the user saved the changes and ask them whether they really want to leave.
unload – the user almost left, but we still can initiate some operations, such as sending out statistics.


2. DOMContentLoaded

# The DOMContentLoaded event happens on the document object.
# In the example, the DOMContentLoaded handler runs when the document is loaded, so it can see all the elements, including <img> below.
# But it doesn’t wait for the image to load. So alert shows zero sizes.

<script>
  function ready() {
    alert('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">


# DOMContentLoaded and scripts
When the browser processes an HTML-document and comes across a <script> tag, it needs to execute before continuing building the DOM. That’s a precaution, as scripts may want to modify DOM, and even document.write into it, so DOMContentLoaded has to wait.

So DOMContentLoaded definitely happens after such scripts:

<script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM ready!");
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>

<script>
  alert("Library loaded, inline script executed");
</script>


# DOMContentLoaded and styles
External style sheets don’t affect DOM, so DOMContentLoaded does not wait for them.
But there’s a pitfall. If we have a script after the style, then that script must wait until the stylesheet loads:

The reason for this is that the script may want to get coordinates and other style-dependent properties of elements, like in the example above. Naturally, it has to wait for styles to load.

<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // the script doesn't execute until the stylesheet is loaded
  alert(getComputedStyle(document.body).marginTop);
</script>


# window.onload
The load event on the window object triggers when the whole page is loaded including styles, images and other resources. This event is available via the onload property.

The example below correctly shows image sizes, because window.onload waits for all images:

<script>
  window.onload = function() { // can also use window.addEventListener('load', (event) => {
    alert('Page loaded');

    // image is loaded at this time
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">


# window.onunload
Naturally, unload event is when the user leaves us, and we’d like to save the data on our server.
There exists a special navigator.sendBeacon(url, data) method for such needs.

let analyticsData = { /* object with gathered data */ };

window.addEventListener("unload", function() {
  navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
});

When the sendBeacon request is finished, the browser probably has already left the document, so there’s no way to get server response. 
There’s also a keepalive flag for doing such “after-page-left” requests in fetch method for generic network requests.


# window.onbeforeunload
If a visitor initiated navigation away from the page or tries to close the window, the beforeunload handler asks for additional confirmation.

window.onbeforeunload = function() {
  return false;
};


# readyState
The document.readyState property tells us about the current loading state.

There are 3 possible values:

"loading" – the document is loading.
"interactive" – the document was fully read.
"complete" – the document was fully read and all resources (like images) are loaded too.

function work() { /*...*/ }

if (document.readyState == 'loading') {
  // still loading, wait for the event
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!
  work();
}


3. Scripts: async, defer

When the browser loads HTML and comes across a <script>...</script> tag, it can’t continue building the DOM. It must execute the script right now. The same happens for external scripts <script src="..."></script>: the browser must wait for the script to download, execute the downloaded script, and only then can it process the rest of the page.

That leads to two important issues:

Scripts can’t see DOM elements below them, so they can’t add handlers etc.
If there’s a bulky script at the top of the page, it “blocks the page”. Users can’t see the page content till it downloads and runs:


# defer
The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

Scripts with defer never block the page.
Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

<p>...content before script...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- visible immediately -->
<p>...content after script...</p>


DOMContentLoaded event handler waits for the deferred script. It only triggers when the script is downloaded and executed
Deferred scripts keep their relative order, just like regular scripts.

<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
</script>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<p>...content after scripts...</p>


# async
It loads in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything

# Dynamic scripts
Dynamic scripts behave as “async” by default.

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

// long.js runs first because of async=false
loadScript("/article/script-async-defer/long.js");
loadScript("/article/script-async-defer/small.js");


4. Crossorigin policy

# There’s a rule: scripts from one site can’t access contents of the other site. So, e.g. a script at https://facebook.com can’t read the user’s mailbox at https://gmail.com.

To allow cross-origin access, the <script> tag needs to have the crossorigin attribute, plus the remote server must provide special headers.

# There are three levels of cross-origin access:
No crossorigin attribute – access prohibited.

crossorigin="anonymous" – access allowed if the server responds with the header Access-Control-Allow-Origin with * or our origin. Browser does not send authorization information and cookies to remote server.

crossorigin="use-credentials" – access allowed if the server sends back the header Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. Browser sends authorization information and cookies to remote server.

