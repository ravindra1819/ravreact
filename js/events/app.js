// Events :
    // An event is an action or occurance that happens in the browser that javascript can respond to.
    
    // Why / Where Used :
        // - Handling User Interactions
        // - Building dynamic and interactive UI
        // - Validating Forms
        // - Navigation Menus
        // - Animations.....etc

// Types of Events :

    // 1. Mouse Events
        // click, dblclick, mouseover, mousemove....etc
    // 2. Keyboard Events
        // keydown, keypress, keyup...etc
    // 3. Form Events
        // submit, change, focus, blur, input, reset...etc
    // 4. Window Events
        // load, resize, scroll, unload, DOMContentLoaded...etc
    // 5. Clipboard Events
        // copy, cut, paste
    // 6. Touch Events(Mobile)
        // touchStart, touchmove, touchend

// Implementation of events : 
    // a. Inline HTML events 
    // b. DOM Property Method
    // c. addEventListener Method (Preffered Method)
            // Why :
            // can attach Multiple events
            // Supports event capturing/bubling phases

// Event Handling : The process of responding to events is called event handling.
// Event Listening : The process of detecting and waiting for events to occur is called event listening.

// Event Object : When an event occurs, the browser creates an event object that contains information about the event.


// Which one to use :
// Inline Events : Poor scalability, mixes HTML and JS
// DOM Prop Method : Only one event per element (can be overwritten)
// addEventListener : Most flexible and powerful, recommended for modern web development
//    Benefits : 
        // Can attach multiple events to a single element
        // Supports event capturing and bubbling


// Event Flow : (Phases)
    // 1. Capturing Phase
    // 2. Target Phase
    // 3. Bubbling Phase


// Event Bubbling : When an event occurs on an element, it first triggers the event on that element and then propagates (bubbles) up to its parent elements. This allows parent elements to listen for events that occur on their child elements.

// Event Capturing : The opposite of bubbling, where the event is first captured by the outermost element and then propagated down to the target element. This phase is less commonly used but can be useful in certain scenarios.

// Event Delegation : A technique where a single event listener is added to a parent element to manage events for its child elements. This is efficient for handling events on dynamically added elements.


