Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer: getElementsByClassName('className'): Returns live HTMLCollection.
           where getElementById('id'): Returns a single element with the specific ID.

           querySelector(selector): Returns the first matching element.
           Where querySelectorAll(selector): Returns a static NodeList of all matches.
2. How do you create and insert a new element into the DOM?
  Answer: const parentNode = document.getElementById('id');
          const h1 = document.createElement('h1');
          h1.innerText = 'Eva';
          parentNode.appendChild(h1);
3. What is Event Bubbling? And how does it work?
   Answer: Events bubble up from the target element to its ancestors.
            <div id="parent">
              <button id="child">Click Me</button>
           </div>
              document.getElementById('child').addEventListener('click', () => {
                console.log('Child clicked');
              });

             document.getElementById('parent').addEventListener('click', () => {
              console.log('Parent clicked');
            });
          when button clicked , then child => parent => parent => parent .... =>document.
4. What is Event Delegation in JavaScript? Why is it useful?
    Answer: A technique where a parent handles events of child elements using bubbling.
            It is useful because it
             Reduces number of event listeners.
             1.Handles dynamically added elements.
             2.Learn multiple ways to handle events.
             3.Use addEventListener for flexibility.
             4.Understand bubbling & delegation to manage events cleanly.
5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:  preventDefault() use to prevent browser default action where stopPropagation() used to stop event bubbling.
