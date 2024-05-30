1. Mouse event types

# mousedown/mouseup
Mouse button is clicked/released over an element.
# mouseover/mouseout
Mouse pointer comes over/out from an element.
# mousemove
Every mouse move over an element triggers that event.
# click
Triggers after mousedown and then mouseup over the same element if the left mouse button was used.
# dblclick
Triggers after two clicks on the same element within a short timeframe. Rarely used nowadays.
# contextmenu
Triggers when the right mouse button is pressed.


# Events order
In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order mousedown → mouseup → click.

# Preventing selection on mousedown
<b ondblclick="alert('Click!')" onmousedown="return false">
  Double-click me
</b>

# Preventing copying
<div oncopy="alert('Copying forbidden!');return false">
  Dear user,
  The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>


# Events mouseover/mouseout, relatedTarget

For mouseover:

event.target – is the element where the mouse came over.
event.relatedTarget – is the element from which the mouse came (relatedTarget → target).


For mouseout the reverse:

event.target – is the element that the mouse left.
event.relatedTarget – is the new under-the-pointer element, that mouse left for (target → relatedTarget).


