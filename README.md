What is JSX, and why is it used?

##@ JSX is a JavaScript syntax extension that enables you to have HTML-like syntax in JavaScript. JSX renders React code readable and writable by combining UI structure and logic into one. JSX is not natively supported by browsers, so it gets converted into regular JavaScript first before running.

What is the difference between State and Props?
##@ In React, **state** is internal component data and can change over time, usually with `useState`. **Props** are external inputs passed from parent to child components. State is local and can change, but props are immutable, enabling components to communicate and be reusable across an app.

What is the useState hook, and how does it work?
##@ useState is a React Hook that enables functional components to maintain and update values. It returns a state variable and a setter function. React re-renders the component when the setter updates the state with the new value. It's essential to dynamic, interactive data in React apps.

How can you share state between components in React?

##@ In React, you can achieve sharing of state between components by lifting state up to a common parent and then passing it down as props. This way, both child components have access to the same data. Otherwise, for larger applications, you can use React Context API or third-party state management libraries like Redux or Zustand, which provide centralized state, so sharing and managing data across several components in a consistent manner is a breeze.

How is event handling done in React?

##@ Handling events in React is done through camelCase property names, like onClick or onChange, instead of their lowercase HTML counterparts. You pass in a function as the event handler, not a string. React events are processed within SyntheticEvent in order to make them cross-browser compatible so that they're uniform and better performing across the environment.
