const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components in React?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to manage component state in React?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with the React state?",
    answer: "Controlled component",
  },
  {
    id: 8324,
    question: "What is the role of props.children in React components?",
    answer:
      "props.children in React components represents the content between the opening and closing tags when a component is used. It allows components to pass arbitrary children elements or content to other components for rendering.",
  },
  {
    id: 9244,
    question: "How to handle user authentication with tokens in React?",
    answer:
      "Handle user authentication with tokens in React by using libraries like JSON Web Tokens (JWT), storing tokens in localStorage or cookies, sending tokens with HTTP requests, and protecting routes with PrivateRoute components or middleware.",
  },
  {
    id: 1240,
    question: "What is the useContext hook in React?",
    answer:
      "The useContext hook in React allows functional components to consume context values without using a Consumer component. Use useContext to access and subscribe to context values within functional components.",
  },
  {
    id: 7793,
    question:
      "How to perform server-side rendering (SSR) with React and Next.js?",
    answer:
      "Server-side rendering (SSR) with React and Next.js involves using Next.js framework features like getServerSideProps or getStaticProps to pre-render React components on the server. SSR improves performance, SEO, and initial load time by sending pre-rendered HTML to the browser.",
  },
  {
    id: 6033,
    question: "What are hooks in React and why are they used?",
    answer:
      "Hooks in React are functions that allow you to use state and other React features in functional components. They replace class lifecycle methods and provide a more flexible and concise way to manage component state and side effects.",
  },
  {
    id: 4405,
    question:
      "What is the useLayoutEffect hook in React and when should you use it?",
    answer:
      "The useLayoutEffect hook in React is similar to useEffect, but it fires synchronously after all DOM mutations. Use useLayoutEffect when you need to read layout from the DOM and make changes synchronously before the browser paints.",
  },
  {
    id: 9043,
    question: "How to handle animations in React applications?",
    answer:
      "Handle animations in React applications using CSS transitions, CSS animations, or JavaScript libraries like React Spring or Framer Motion. Define animation styles, trigger animations based on state changes or user interactions, and optimize performance by minimizing layout thrashing.",
  },
  {
    id: 6705,
    question: "What are the benefits of using TypeScript with React?",
    answer:
      "TypeScript enhances React development by providing type safety, improved code navigation and refactoring, better tooling support, and enhanced developer experience. Use TypeScript in React projects to catch errors early, improve code quality, and scale development.",
  },
  {
    id: 7706,
    question:
      "What is the useCallback hook in React and when should you use it?",
    answer:
      "The useCallback hook in React memoizes event handlers and callbacks so that they are only recreated when their dependencies change. Use useCallback to optimize performance by avoiding unnecessary re-renders of child components.",
  },
  {
    id: 6748,
    question: "How to handle global state management in React applications?",
    answer:
      "Global state management in React applications can be handled using libraries like Redux or the React Context API. Define a global state, dispatch actions to update the state, and connect components to the global state using Provider and connect (for Redux) or useContext (for Context API).",
  },
  {
    id: 8705,
    question:
      "What is the difference between React.Component and React.PureComponent?",
    answer:
      "React.Component is the base class for class components in React. It implements shouldComponentUpdate to always return true, leading to potentially unnecessary re-renders. React.PureComponent, on the other hand, implements shouldComponentUpdate with a shallow prop and state comparison, optimizing performance by preventing re-renders when props and state haven't changed.",
  },
  {
    id: 7715,
    question: "How to handle stateful forms in React?",
    answer:
      "Handle stateful forms in React by managing form data with useState hook, controlling form inputs with value and onChange props, validating inputs, and handling form submission events. Use state to track form data changes and update the UI accordingly.",
  },
  {
    id: 6524,
    question: "What is the purpose of key prop in React lists?",
    answer:
      "The key prop in React lists is used to uniquely identify elements and optimize updates. Keys help React identify which items have changed, are added, or are removed. They are essential for efficient rendering of dynamic lists.",
  },
  {
    id: 7384,
    question: "How to handle lazy loading in React?",
    answer:
      "Handle lazy loading in React by using lazy and Suspense features introduced in React 16.6+. Lazy loading allows you to load components only when they are needed, improving performance by reducing initial bundle size and speeding up the application's load time.",
  },
  {
    id: 9876,
    question: "What is the useMemo hook in React and when should you use it?",
    answer:
      "The useMemo hook in React memoizes the result of a function, caching its return value until its dependencies change. Use useMemo to optimize performance by avoiding expensive calculations on every render.",
  },
  {
    id: 5678,
    question: "What are fragments in React?",
    answer:
      "Fragments in React allow you to group multiple children elements without adding extra nodes to the DOM. They improve component structure and performance by avoiding unnecessary wrapper elements.",
  },
  {
    id: 3456,
    question: "How to handle routing in React applications?",
    answer:
      "Handle routing in React applications using libraries like React Router. Define routes with <Route> components, navigate with <Link> components, and manage route parameters and nested routes for single-page applications.",
  },
  {
    id: 8765,
    question: "What is the useRef hook in React and how is it used?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef for accessing DOM elements, storing previous values, or triggering imperative actions in functional components.",
  },
  {
    id: 9834,
    question: "What is the useEffect hook in React and when should you use it?",
    answer:
      "The useEffect hook in React allows you to perform side effects in functional components. Use useEffect for data fetching, subscriptions, or manually changing the DOM. Specify dependencies to control when effects run and clean up after effects to prevent memory leaks.",
  },
  {
    id: 6743,
    question: "How to handle context in React?",
    answer:
      "Context in React provides a way to pass data through the component tree without having to pass props down manually at every level. Create a context with createContext, provide a value with Provider, and consume context values with useContext hook or Consumer component.",
  },
  {
    id: 1234,
    question: "What are controlled components in React?",
    answer:
      "Controlled components in React are form elements whose value is controlled by React. Manage controlled components with value and onChange props to update input values and handle form submission. Use controlled components to keep form state synchronized with React state.",
  },
  {
    id: 5679,
    question: "What are higher-order components (HOCs) in React?",
    answer:
      "Higher-order components (HOCs) in React are functions that accept a component and return a new component with enhanced functionality. Use HOCs to reuse component logic, share common functionality, and compose multiple behaviors into a single component.",
  },
  {
    id: 8732,
    question: "How to handle error boundaries in React?",
    answer:
      "Error boundaries in React catch JavaScript errors in the component tree and display fallback UI instead of crashing the entire application. Create error boundaries with componentDidCatch lifecycle method and static getDerivedStateFromError method. Use error boundaries to gracefully handle errors and provide better user experience.",
  },
  {
    id: 1122,
    question: "What is the useMemo hook in React and when should you use it?",
    answer:
      "The useMemo hook in React memoizes the result of a function, caching its return value until its dependencies change. Use useMemo to optimize performance by avoiding expensive calculations on every render.",
  },
  {
    id: 9988,
    question: "What is the useReducer hook in React and how is it used?",
    answer:
      "The useReducer hook in React manages state transitions in functional components. Use useReducer with a reducer function and initial state to dispatch actions, update state, and handle complex state logic. Use useReducer for managing component-level state with actions and reducer function.",
  },
  {
    id: 8844,
    question: "What are hooks in React and why are they used?",
    answer:
      "Hooks in React are functions that let you use state and other React features without writing a class component. They provide a more natural way to encapsulate stateful behavior and reuse code across components.",
  },
  {
    id: 8823,
    question: "What is the useContext hook in React and when is it used?",
    answer:
      "The useContext hook in React allows functional components to consume context values without using a Consumer component. Use useContext to access and subscribe to context values within functional components.",
  },
  {
    id: 8877,
    question: "How to handle form submissions in React?",
    answer:
      "Handle form submissions in React by managing form data with state, controlling form inputs with controlled components, and handling form submission events with onSubmit handler. Use state to track form data changes and update UI accordingly.",
  },
  {
    id: 7700,
    question: "What are keys in React and why are they important?",
    answer:
      "Keys in React help identify which items have changed, been added, or been removed. They are crucial for efficient updates of lists and children components. Always use unique and stable keys to maintain component state correctly during updates.",
  },
  {
    id: 7799,
    question: "What is the difference between state and props in React?",
    answer:
      "State in React is internal to a component and controlled by the component itself. Props are external inputs to a component that cannot be changed by the component itself. State is mutable, while props are immutable.",
  },
  {
    id: 6677,
    question: "How to handle side effects in React?",
    answer:
      "Use the useEffect hook in React to handle side effects such as data fetching, subscriptions, or manually changing the DOM. Specify dependencies to control when effects run and clean up after effects to prevent memory leaks.",
  },
  {
    id: 6666,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that let you use state and other React features without writing a class. They are functions which 'hook into' React state and lifecycle features from function components. They do not work in classes.",
  },
  {
    id: 1123,
    question: "How do you pass data between components in React?",
    answer:
      "You can pass data between React components using props. To send data down to a child component, you use props. To send data to a parent component, you use callback functions.",
  },
  {
    id: 9912,
    question:
      "What is the useLayoutEffect hook in React and when should you use it?",
    answer:
      "The useLayoutEffect hook in React is similar to useEffect, but it fires synchronously after all DOM mutations. Use useLayoutEffect when you need to read layout from the DOM and make changes synchronously before the browser paints.",
  },
  {
    id: 9889,
    question: "What is the useImperativeHandle hook in React?",
    answer:
      "The useImperativeHandle hook in React is used to customize the instance value that is exposed to parent components when using ref. It allows a parent component to interact imperatively with a child component's instance.",
  },
  {
    id: 6678,
    question: "How do you prevent re-renders in React?",
    answer:
      "To prevent re-renders in React, you can use memoization techniques such as React.memo for functional components or PureComponent for class components. Additionally, you can use shouldComponentUpdate lifecycle method for class components or useMemo hook for functional components to avoid unnecessary re-renders.",
  },
  {
    id: 2222,
    question:
      "What is the difference between controlled and uncontrolled components in React?",
    answer:
      "Controlled components in React are components where form data is controlled by React state. Uncontrolled components are components where form data is controlled by the DOM itself. Controlled components provide more control and maintain the state of form data efficiently.",
  },
  {
    id: 3333,
    question: "How do you optimize performance in React applications?",
    answer:
      "To optimize performance in React applications, you can use techniques such as memoization (e.g., useMemo), code splitting, lazy loading, minimizing re-renders (e.g., PureComponent or React.memo), using keys for lists, and optimizing data fetching (e.g., using useEffect with dependencies). Profile your application using React DevTools or performance tools to identify and address performance bottlenecks.",
  },
  {
    id: 4444,
    question: "What is the useContext hook in React and why is it used?",
    answer:
      "The useContext hook in React provides a way to pass data through the component tree without having to pass props down manually at every level. It allows you to consume context values in functional components and subscribe to changes in context.",
  },
  {
    id: 5555,
    question: "How do you handle asynchronous data fetching in React?",
    answer:
      "In React, you can handle asynchronous data fetching using techniques such as async/await with fetch or axios, promises, or libraries like React Query or SWR (stale-while-revalidate). Manage loading and error states, update component state with fetched data, and handle data synchronization with useEffect hook or custom hooks.",
  },
  {
    id: 7777,
    question: "What are React hooks and why are they used?",
    answer:
      "React hooks are functions that allow functional components to manage state, lifecycle, and other React features without writing a class component. They enable code reuse, separation of concerns, and cleaner component logic in React applications.",
  },
  {
    id: 9999,
    question: "How do you handle forms in React?",
    answer:
      "To handle forms in React, use controlled components to manage form data with state and controlled input elements (e.g., <input>, <textarea>, <select>). Control input values with value and onChange props, validate form data, handle form submission with onSubmit handler, and manage form state changes.",
  },
  {
    id: 1212,
    question: "What is the useRef hook in React?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef to access DOM elements, store previous values, or trigger imperative actions in functional components. useRef does not cause re-renders when its value changes.",
  },
  {
    id: 3434,
    question: "How do you handle state management in React applications?",
    answer:
      "In React applications, you can manage state using built-in state management tools like useState hook for local component state, Context API for global state management across components, or external libraries like Redux for complex state management. Choose the appropriate state management solution based on the size and complexity of your application.",
  },
  {
    id: 5656,
    question: "What are higher-order components (HOCs) in React?",
    answer:
      "Higher-order components (HOCs) in React are functions that take a component and return a new component with additional functionality. HOCs enable code reuse, cross-cutting concerns, and separation of concerns by adding behaviors to existing components without modifying their original implementation.",
  },
  {
    id: 7878,
    question: "What are React hooks?",
    answer:
      "React hooks are functions that enable functional components to manage state, lifecycle, and other React features without writing a class component. Hooks provide a more concise, readable, and maintainable way to compose and reuse component logic in React applications.",
  },
  {
    id: 8989,
    question: "What is the useReducer hook in React and how is it used?",
    answer:
      "The useReducer hook in React is a built-in hook used for state management in functional components. It accepts a reducer function and initial state, dispatches actions to update state, and encapsulates complex state logic. Use useReducer for managing component-level state with actions, reducer functions, and dispatch function.",
  },
  {
    id: 2323,
    question: "How do you handle side effects in React?",
    answer:
      "In React, handle side effects such as data fetching, subscriptions, or DOM manipulation using the useEffect hook. Use useEffect to perform cleanup, specify dependencies to control when effects run, and manage asynchronous operations to prevent memory leaks.",
  },
  {
    id: 4343,
    question:
      "What is the useCallback hook in React and when should you use it?",
    answer:
      "The useCallback hook in React memoizes callback functions, preventing unnecessary re-creations of functions on every render. Use useCallback to optimize performance by memoizing callbacks with stable dependencies, especially when passing callbacks to child components.",
  },
  {
    id: 6565,
    question:
      "What is the useLayoutEffect hook in React and when should you use it?",
    answer:
      "The useLayoutEffect hook in React is similar to useEffect, but it fires synchronously after all DOM mutations. Use useLayoutEffect when you need to perform DOM measurements or synchronous updates before the browser paints. Ensure that your effect does not block the browser's painting process.",
  },
  {
    id: 8787,
    question: "How do you handle error boundaries in React?",
    answer:
      "Error boundaries in React catch JavaScript errors in the component tree and display fallback UI instead of crashing the entire application. Implement error boundaries with componentDidCatch and static getDerivedStateFromError lifecycle methods. Use error boundaries to gracefully handle errors and improve user experience by providing informative error messages.",
  },
  {
    id: 9898,
    question: "What is the useRef hook in React and why is it used?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef to store mutable values or references (e.g., DOM elements, previous state), trigger imperative actions in functional components, or avoid re-renders when changing values. useRef does not cause re-renders.",
  },
  {
    id: 6566,
    question: "What are fragments in React?",
    answer:
      "Fragments in React allow you to group multiple children elements without adding extra nodes to the DOM. They improve component structure and performance by reducing unnecessary wrapper elements. Fragments can be used in place of a single root element in JSX.",
  },
];

export default questions;
