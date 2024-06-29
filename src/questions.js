const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components in React?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to manage component state in React?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronized with the React state?",
    answer: "Controlled component",
  },
  {
    id: 7,
    question: "What is the role of props.children in React components?",
    answer:
      "props.children in React components represents the content between the opening and closing tags when a component is used. It allows components to pass arbitrary children elements or content to other components for rendering.",
  },
  {
    id: 8,
    question: "How to handle user authentication with tokens in React?",
    answer:
      "Handle user authentication with tokens in React by using libraries like JSON Web Tokens (JWT), storing tokens in localStorage or cookies, sending tokens with HTTP requests, and protecting routes with PrivateRoute components or middleware.",
  },
  {
    id: 9,
    question: "What is the useContext hook in React?",
    answer:
      "The useContext hook in React allows functional components to consume context values without using a Consumer component. Use useContext to access and subscribe to context values within functional components.",
  },
  {
    id: 10,
    question:
      "How to perform server-side rendering (SSR) with React and Next.js?",
    answer:
      "Server-side rendering (SSR) with React and Next.js involves using Next.js framework features like getServerSideProps or getStaticProps to pre-render React components on the server. SSR improves performance, SEO, and initial load time by sending pre-rendered HTML to the browser.",
  },
  {
    id: 11,
    question: "What are hooks in React and why are they used?",
    answer:
      "Hooks in React are functions that allow you to use state and other React features in functional components. They replace class lifecycle methods and provide a more flexible and concise way to manage component state and side effects.",
  },
  {
    id: 12,
    question:
      "What is the useLayoutEffect hook in React and when should you use it?",
    answer:
      "The useLayoutEffect hook in React is similar to useEffect, but it fires synchronously after all DOM mutations. Use useLayoutEffect when you need to read layout from the DOM and make changes synchronously before the browser paints.",
  },
  {
    id: 13,
    question: "How to handle animations in React applications?",
    answer:
      "Handle animations in React applications using CSS transitions, CSS animations, or JavaScript libraries like React Spring or Framer Motion. Define animation styles, trigger animations based on state changes or user interactions, and optimize performance by minimizing layout thrashing.",
  },
  {
    id: 14,
    question: "What are the benefits of using TypeScript with React?",
    answer:
      "TypeScript enhances React development by providing type safety, improved code navigation and refactoring, better tooling support, and enhanced developer experience. Use TypeScript in React projects to catch errors early, improve code quality, and scale development.",
  },
  {
    id: 15,
    question:
      "What is the useCallback hook in React and when should you use it?",
    answer:
      "The useCallback hook in React memoizes event handlers and callbacks so that they are only recreated when their dependencies change. Use useCallback to optimize performance by avoiding unnecessary re-renders of child components.",
  },
  {
    id: 16,
    question: "How to handle global state management in React applications?",
    answer:
      "Global state management in React applications can be handled using libraries like Redux or the React Context API. Define a global state, dispatch actions to update the state, and connect components to the global state using Provider and connect (for Redux) or useContext (for Context API).",
  },
  {
    id: 17,
    question:
      "What is the difference between React.Component and React.PureComponent?",
    answer:
      "React.Component is the base class for class components in React. It implements shouldComponentUpdate to always return true, leading to potentially unnecessary re-renders. React.PureComponent, on the other hand, implements shouldComponentUpdate with a shallow prop and state comparison, optimizing performance by preventing re-renders when props and state haven't changed.",
  },
  {
    id: 18,
    question: "How to handle stateful forms in React?",
    answer:
      "Handle stateful forms in React by managing form data with useState hook, controlling form inputs with value and onChange props, validating inputs, and handling form submission events. Use state to track form data changes and update the UI accordingly.",
  },
  {
    id: 19,
    question: "What is the purpose of key prop in React lists?",
    answer:
      "The key prop in React lists is used to uniquely identify elements and optimize updates. Keys help React identify which items have changed, are added, or are removed. They are essential for efficient rendering of dynamic lists.",
  },
  {
    id: 20,
    question: "How to handle lazy loading in React?",
    answer:
      "Handle lazy loading in React by using lazy and Suspense features introduced in React 16.6+. Lazy loading allows you to load components only when they are needed, improving performance by reducing initial bundle size and speeding up the application's load time.",
  },
  {
    id: 21,
    question: "What is the useMemo hook in React and when should you use it?",
    answer:
      "The useMemo hook in React memoizes the result of a function, caching its return value until its dependencies change. Use useMemo to optimize performance by avoiding expensive calculations on every render.",
  },
  {
    id: 22,
    question: "What are fragments in React?",
    answer:
      "Fragments in React allow you to group multiple children elements without adding extra nodes to the DOM. They improve component structure and performance by avoiding unnecessary wrapper elements.",
  },
  {
    id: 23,
    question: "How to handle routing in React applications?",
    answer:
      "Handle routing in React applications using libraries like React Router. Define routes with <Route> components, navigate with <Link> components, and manage route parameters and nested routes for single-page applications.",
  },
  {
    id: 24,
    question: "What is the useRef hook in React and how is it used?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef for accessing DOM elements, storing previous values, or triggering imperative actions in functional components.",
  },
  {
    id: 25,
    question: "What is the useEffect hook in React and when should you use it?",
    answer:
      "The useEffect hook in React allows you to perform side effects in functional components. Use useEffect for data fetching, subscriptions, or manually changing the DOM. Specify dependencies to control when effects run and clean up after effects to prevent memory leaks.",
  },
  {
    id: 26,
    question: "How to handle context in React?",
    answer:
      "Context in React provides a way to pass data through the component tree without having to pass props down manually at every level. Create a context with createContext, provide a value with Provider, and consume context values with useContext hook or Consumer component.",
  },
  {
    id: 27,
    question: "What are controlled components in React?",
    answer:
      "Controlled components in React are form elements whose value is controlled by React. Manage controlled components with value and onChange props to update input values and handle form submission. Use controlled components to keep form state synchronized with React state.",
  },
  {
    id: 28,
    question: "What are higher-order components (HOCs) in React?",
    answer:
      "Higher-order components (HOCs) in React are functions that accept a component and return a new component with enhanced functionality. Use HOCs to reuse component logic, share common functionality, and compose multiple behaviors into a single component.",
  },
  {
    id: 29,
    question: "How to handle error boundaries in React?",
    answer:
      "Error boundaries in React catch JavaScript errors in the component tree and display fallback UI instead of crashing the entire application. Create error boundaries with componentDidCatch lifecycle method and static getDerivedStateFromError method. Use error boundaries to gracefully handle errors and provide better user experience.",
  },
  {
    id: 30,
    question: "What is the useReducer hook in React and how is it used?",
    answer:
      "The useReducer hook in React manages state transitions in functional components. Use useReducer with a reducer function and initial state to dispatch actions, update state, and handle complex state logic. Use useReducer for managing component-level state with actions and reducer function.",
  },
  {
    id: 31,
    question: "What are hooks in React and why are they used?",
    answer:
      "Hooks in React are functions that let you use state and other React features without writing a class component. They provide a more natural way to reuse stateful logic, handle side effects, and manage component lifecycle.",
  },
  {
    id: 32,
    question: "How to handle side effects in React components?",
    answer:
      "Handle side effects in React components using useEffect hook for functional components and componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods for class components. Use useEffect to perform data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    id: 33,
    question: "What are React portals and how are they used?",
    answer:
      "React portals provide a way to render children into a DOM node outside the parent component's hierarchy. Use ReactDOM.createPortal to create portals for modals, tooltips, or overlays, allowing components to appear above other elements in the DOM.",
  },
  {
    id: 34,
    question: "How to optimize performance in React applications?",
    answer:
      "Optimize performance in React applications by using techniques like memoization, code splitting, lazy loading, avoiding unnecessary re-renders, using PureComponent or React.memo, and optimizing state updates. Use profiling tools to identify and address performance bottlenecks.",
  },
  {
    id: 35,
    question: "How to handle asynchronous operations in React components?",
    answer:
      "Handle asynchronous operations in React components using useEffect hook with async functions, Promises, or async/await. Manage loading states, error handling, and data updates to ensure smooth and responsive user experience.",
  },
  {
    id: 36,
    question: "What are key benefits of using React for front-end development?",
    answer:
      "Key benefits of using React for front-end development include reusable components, virtual DOM for efficient updates, unidirectional data flow, strong ecosystem, support for modern development patterns, and improved performance and maintainability.",
  },
  {
    id: 37,
    question: "How to handle animations in React?",
    answer:
      "Handle animations in React using CSS transitions, CSS animations, or JavaScript libraries like React Spring or Framer Motion. Define animation styles, trigger animations based on state changes or user interactions, and optimize performance by minimizing layout thrashing.",
  },
  {
    id: 38,
    question: "What is the role of keys in React lists?",
    answer:
      "Keys in React lists help identify which items have changed, been added, or removed. They provide a stable identity to list items and optimize rendering performance by reducing unnecessary re-renders and maintaining consistency in the DOM.",
  },
  {
    id: 39,
    question: "How to handle authentication in React applications?",
    answer:
      "Handle authentication in React applications using strategies like JWT tokens, OAuth, or session-based authentication. Implement login, registration, and logout functionality, manage authentication state, protect routes with PrivateRoute components, and secure API calls with authentication headers.",
  },
  {
    id: 40,
    question: "What is the use of React Context API?",
    answer:
      "The React Context API allows you to share data and state between components without passing props manually at every level. Use createContext to create a context, Provider to provide context values, and useContext hook or Consumer component to access context values in child components.",
  },
  {
    id: 41,
    question: "How to handle component lifecycle in React?",
    answer:
      "Handle component lifecycle in React with lifecycle methods in class components or hooks in functional components. Use componentDidMount, componentDidUpdate, and componentWillUnmount methods in class components, and useEffect hook in functional components to manage lifecycle events like mounting, updating, and unmounting.",
  },
  {
    id: 42,
    question: "What is the purpose of useState hook in React?",
    answer:
      "The useState hook in React allows you to add state to functional components. It returns a state variable and a function to update it, enabling you to manage component state and trigger re-renders when the state changes.",
  },
  {
    id: 43,
    question: "How to handle conditional rendering in React?",
    answer:
      "Handle conditional rendering in React using JavaScript conditional statements like if, ternary operators, logical AND (&&) operators, or conditional rendering components. Use conditional rendering to display different UI elements based on the component's state or props.",
  },
  {
    id: 44,
    question: "What is the purpose of useEffect hook in React?",
    answer:
      "The useEffect hook in React allows you to perform side effects in functional components. Use useEffect for data fetching, subscriptions, or manually changing the DOM. Specify dependencies to control when effects run and clean up after effects to prevent memory leaks.",
  },
  {
    id: 45,
    question: "How to handle events in React?",
    answer:
      "Handle events in React using synthetic event handlers with onEvent props. Define event handler functions and pass them as props to JSX elements. Use event.preventDefault and event.stopPropagation to manage event behavior and prevent default actions or propagation.",
  },
  {
    id: 46,
    question: "What are higher-order components in React?",
    answer:
      "Higher-order components (HOCs) in React are functions that accept a component and return a new component with enhanced functionality. Use HOCs to reuse component logic, share common functionality, and compose multiple behaviors into a single component.",
  },
  {
    id: 47,
    question: "How to handle global state management in React?",
    answer:
      "Handle global state management in React using libraries like Redux or the React Context API. Define a global state, dispatch actions to update the state, and connect components to the global state using Provider and connect (for Redux) or useContext (for Context API).",
  },
  {
    id: 48,
    question: "What is the difference between React and React Native?",
    answer:
      "React is a JavaScript library for building web applications, while React Native is a framework for building mobile applications using React. React focuses on web development, whereas React Native enables cross-platform mobile development with a single codebase.",
  },
  {
    id: 49,
    question: "How to handle form validation in React?",
    answer:
      "Handle form validation in React using state to track input values, validation functions to check for errors, and conditional rendering to display error messages. Use libraries like Formik or React Hook Form to simplify form validation and management.",
  },
  {
    id: 50,
    question: "How to optimize performance in React applications?",
    answer:
      "Optimize performance in React applications by using techniques like memoization, code splitting, lazy loading, avoiding unnecessary re-renders, using PureComponent or React.memo, and optimizing state updates. Use profiling tools to identify and address performance bottlenecks.",
  },
  {
    id: 51,
    question: "What is the purpose of the useRef hook in React?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef for accessing DOM elements, storing previous values, or triggering imperative actions in functional components.",
  },
  {
    id: 52,
    question: "How to handle prop drilling in React?",
    answer:
      "Handle prop drilling in React by using the Context API or state management libraries like Redux. Create context with createContext, provide context values with Provider, and consume context values with useContext hook or Consumer component to avoid passing props through intermediate components.",
  },
  {
    id: 53,
    question: "What is the role of keys in React lists?",
    answer:
      "Keys in React lists help identify which items have changed, been added, or removed. They provide a stable identity to list items and optimize rendering performance by reducing unnecessary re-renders and maintaining consistency in the DOM.",
  },
  {
    id: 54,
    question: "How to handle API calls in React?",
    answer:
      "Handle API calls in React using the fetch API, Axios, or other HTTP libraries. Perform API calls inside useEffect hook for functional components or componentDidMount lifecycle method for class components. Manage loading states, handle errors, and update component state with fetched data.",
  },
  {
    id: 55,
    question: "What is the use of React Context API?",
    answer:
      "The React Context API allows you to share data and state between components without passing props manually at every level. Use createContext to create a context, Provider to provide context values, and useContext hook or Consumer component to access context values in child components.",
  },
  {
    id: 56,
    question: "How to handle animations in React?",
    answer:
      "Handle animations in React using CSS transitions, CSS animations, or JavaScript libraries like React Spring or Framer Motion. Define animation styles, trigger animations based on state changes or user interactions, and optimize performance by minimizing layout thrashing.",
  },
  {
    id: 57,
    question: "How to handle conditional rendering in React?",
    answer:
      "Handle conditional rendering in React using JavaScript conditional statements like if, ternary operators, logical AND (&&) operators, or conditional rendering components. Use conditional rendering to display different UI elements based on the component's state or props.",
  },
  {
    id: 58,
    question: "What is the purpose of useReducer hook in React?",
    answer:
      "The useReducer hook in React manages state transitions in functional components. Use useReducer with a reducer function and initial state to dispatch actions, update state, and handle complex state logic. Use useReducer for managing component-level state with actions and reducer function.",
  },
  {
    id: 59,
    question: "How to handle context in React?",
    answer:
      "Context in React provides a way to pass data through the component tree without having to pass props down manually at every level. Create a context with createContext, provide a value with Provider, and consume context values with useContext hook or Consumer component.",
  },
  {
    id: 60,
    question: "What is the role of useCallback hook in React?",
    answer:
      "The useCallback hook in React memoizes a function to prevent it from being recreated on every render. Use useCallback to optimize performance by avoiding unnecessary re-renders of components that rely on memoized functions as props or callbacks.",
  },
  {
    id: 61,
    question: "How to handle state in React?",
    answer:
      "Handle state in React using useState hook for functional components and state object for class components. Use setState to update state and trigger re-renders. Manage local component state, lift state up to parent components, and use state management libraries for global state.",
  },
  {
    id: 62,
    question: "What is the purpose of useRef hook in React?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef for accessing DOM elements, storing previous values, or triggering imperative actions in functional components.",
  },
  {
    id: 63,
    question: "How to handle global state in React?",
    answer:
      "Handle global state in React using libraries like Redux or the React Context API. Define a global state, dispatch actions to update the state, and connect components to the global state using Provider and connect (for Redux) or useContext (for Context API).",
  },
  {
    id: 64,
    question: "How to handle performance optimization in React?",
    answer:
      "Handle performance optimization in React using techniques like memoization, code splitting, lazy loading, avoiding unnecessary re-renders, using PureComponent or React.memo, and optimizing state updates. Use profiling tools to identify and address performance bottlenecks.",
  },
  {
    id: 65,
    question: "What is the use of useReducer hook in React?",
    answer:
      "The useReducer hook in React manages state transitions in functional components. Use useReducer with a reducer function and initial state to dispatch actions, update state, and handle complex state logic. Use useReducer for managing component-level state with actions and reducer function.",
  },
  {
    id: 66,
    question: "How to handle side effects in React?",
    answer:
      "Handle side effects in React using useEffect hook for functional components and componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods for class components. Use useEffect to perform data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    id: 67,
    question: "How to handle asynchronous operations in React?",
    answer:
      "Handle asynchronous operations in React using useEffect hook with async functions, Promises, or async/await. Manage loading states, error handling, and data updates to ensure smooth and responsive user experience.",
  },
  {
    id: 68,
    question: "What is the role of keys in React lists?",
    answer:
      "Keys in React lists help identify which items have changed, been added, or removed. They provide a stable identity to list items and optimize rendering performance by reducing unnecessary re-renders and maintaining consistency in the DOM.",
  },
  {
    id: 69,
    question: "How to handle state in React applications?",
    answer:
      "Handle state in React applications using useState hook for functional components and state object for class components. Use setState to update state and trigger re-renders. Manage local component state, lift state up to parent components, and use state management libraries for global state.",
  },
  {
    id: 70,
    question: "What is the use of React Context API?",
    answer:
      "The React Context API allows you to share data and state between components without passing props manually at every level. Use createContext to create a context, Provider to provide context values, and useContext hook or Consumer component to access context values in child components.",
  },
  {
    id: 71,
    question: "How to handle animations in React applications?",
    answer:
      "Handle animations in React applications using CSS transitions, CSS animations, or JavaScript libraries like React Spring or Framer Motion. Define animation styles, trigger animations based on state changes or user interactions, and optimize performance by minimizing layout thrashing.",
  },
  {
    id: 72,
    question: "How to handle API requests in React?",
    answer:
      "Handle API requests in React using the fetch API, Axios, or other HTTP libraries. Perform API calls inside useEffect hook for functional components or componentDidMount lifecycle method for class components. Manage loading states, handle errors, and update component state with fetched data.",
  },
  {
    id: 73,
    question: "How to handle performance issues in React applications?",
    answer:
      "Handle performance issues in React applications by using techniques like memoization, code splitting, lazy loading, avoiding unnecessary re-renders, using PureComponent or React.memo, and optimizing state updates. Use profiling tools to identify and address performance bottlenecks.",
  },
  {
    id: 74,
    question: "What is the purpose of useMemo hook in React?",
    answer:
      "The useMemo hook in React memoizes a value to avoid recalculating it on every render. Use useMemo to optimize performance by preventing unnecessary computations and re-renders of components that rely on memoized values.",
  },
  {
    id: 75,
    question: "How to handle global state in React applications?",
    answer:
      "Handle global state in React applications using libraries like Redux or the React Context API. Define a global state, dispatch actions to update the state, and connect components to the global state using Provider and connect (for Redux) or useContext (for Context API).",
  },
  {
    id: 76,
    question: "How to handle form submission in React?",
    answer:
      "Handle form submission in React by defining event handler functions for form submit events, managing form state with useState or useReducer hooks, validating form inputs, and using libraries like Formik or React Hook Form for enhanced form management and validation.",
  },
  {
    id: 77,
    question: "What is the role of useEffect hook in React?",
    answer:
      "The useEffect hook in React allows you to perform side effects in functional components. Use useEffect for data fetching, subscriptions, or manually changing the DOM. Specify dependencies to control when effects run and clean up after effects to prevent memory leaks.",
  },
  {
    id: 78,
    question: "How to handle API calls in React applications?",
    answer:
      "Handle API calls in React applications using the fetch API, Axios, or other HTTP libraries. Perform API calls inside useEffect hook for functional components or componentDidMount lifecycle method for class components. Manage loading states, handle errors, and update component state with fetched data.",
  },
  {
    id: 79,
    question: "How to handle conditional rendering in React applications?",
    answer:
      "Handle conditional rendering in React applications using JavaScript conditional statements like if, ternary operators, logical AND (&&) operators, or conditional rendering components. Use conditional rendering to display different UI elements based on the component's state or props.",
  },
  {
    id: 80,
    question: "How to handle side effects in React components?",
    answer:
      "Handle side effects in React components using useEffect hook for functional components and componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods for class components. Use useEffect to perform data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    id: 81,
    question: "How to handle state management in React applications?",
    answer:
      "Handle state management in React applications using useState hook for functional components and state object for class components. Use setState to update state and trigger re-renders. Manage local component state, lift state up to parent components, and use state management libraries for global state.",
  },
  {
    id: 82,
    question: "What is the use of useRef hook in React?",
    answer:
      "The useRef hook in React creates a mutable reference that persists across renders. Use useRef for accessing DOM elements, storing previous values, or triggering imperative actions in functional components.",
  },
  {
    id: 83,
    question: "How to handle API requests in React components?",
    answer:
      "Handle API requests in React components using the fetch API, Axios, or other HTTP libraries. Perform API calls inside useEffect hook for functional components or componentDidMount lifecycle method for class components. Manage loading states, handle errors, and update component state with fetched data.",
  },
  {
    id: 84,
    question: "What is the purpose of useReducer hook in React?",
    answer:
      "The useReducer hook in React manages state transitions in functional components. Use useReducer with a reducer function and initial state to dispatch actions, update state, and handle complex state logic. Use useReducer for managing component-level state with actions and reducer function.",
  },
  {
    id: 85,
    question: "How to handle performance optimization in React?",
    answer:
      "Handle performance optimization in React using techniques like memoization, code splitting, lazy loading, avoiding unnecessary re-renders, using PureComponent or React.memo, and optimizing state updates. Use profiling tools to identify and address performance bottlenecks.",
  },
  {
    id: 86,
    question: "What is the purpose of useMemo hook in React?",
    answer:
      "The useMemo hook in React memoizes a value to avoid recalculating it on every render. Use useMemo to optimize performance by preventing unnecessary computations and re-renders of components that rely on memoized values.",
  },
  {
    id: 87,
    question: "How to handle form validation in React applications?",
    answer:
      "Handle form validation in React applications using state to track input values, validation functions to check for errors, and conditional rendering to display error messages. Use libraries like Formik or React Hook Form to simplify form validation and management.",
  },
  {
    id: 88,
    question: "How to handle global state management in React?",
    answer:
      "Handle global state management in React using libraries like Redux or the React Context API. Define a global state, dispatch actions to update the state, and connect components to the global state using Provider and connect (for Redux) or useContext (for Context API).",
  },
  {
    id: 89,
    question: "How to handle authentication in React?",
    answer:
      "Handle authentication in React using strategies like JWT tokens, OAuth, or session-based authentication. Implement login, registration, and logout functionality, manage authentication state, protect routes with PrivateRoute components, and secure API calls with authentication headers.",
  },
  {
    id: 90,
    question: "How to handle form submissions in React?",
    answer:
      "Handle form submissions in React by defining event handler functions for form submit events, managing form state with useState or useReducer hooks, validating form inputs, and using libraries like Formik or React Hook Form for enhanced form management and validation.",
  },
  {
    id: 91,
    question: "How to handle conditional rendering in React?",
    answer:
      "Handle conditional rendering in React using JavaScript conditional statements like if, ternary operators, logical AND (&&) operators, or conditional rendering components. Use conditional rendering to display different UI elements based on the component's state or props.",
  },
  {
    id: 92,
    question: "How to handle asynchronous operations in React?",
    answer:
      "Handle asynchronous operations in React using useEffect hook with async functions, Promises, or async/await. Manage loading states, error handling, and data updates to ensure smooth and responsive user experience.",
  },
  {
    id: 93,
    question: "How to handle animations in React applications?",
    answer:
      "Handle animations in React applications using CSS transitions, CSS animations, or JavaScript libraries like React Spring or Framer Motion. Define animation styles, trigger animations based on state changes or user interactions, and optimize performance by minimizing layout thrashing.",
  },
  {
    id: 94,
    question: "How to handle state management in React?",
    answer:
      "Handle state management in React using useState hook for functional components and state object for class components. Use setState to update state and trigger re-renders. Manage local component state, lift state up to parent components, and use state management libraries for global state.",
  },
  {
    id: 95,
    question: "What is the purpose of useEffect hook in React?",
    answer:
      "The useEffect hook in React allows you to perform side effects in functional components. Use useEffect for data fetching, subscriptions, or manually changing the DOM. Specify dependencies to control when effects run and clean up after effects to prevent memory leaks.",
  },
  {
    id: 96,
    question: "How to handle API requests in React?",
    answer:
      "Handle API requests in React using the fetch API, Axios, or other HTTP libraries. Perform API calls inside useEffect hook for functional components or componentDidMount lifecycle method for class components. Manage loading states, handle errors, and update component state with fetched data.",
  },
  {
    id: 97,
    question: "How to handle form submissions in React applications?",
    answer:
      "Handle form submissions in React applications by defining event handler functions for form submit events, managing form state with useState or useReducer hooks, validating form inputs, and using libraries like Formik or React Hook Form for enhanced form management and validation.",
  },
  {
    id: 98,
    question: "How to handle state management in React applications?",
    answer:
      "Handle state management in React applications using useState hook for functional components and state object for class components. Use setState to update state and trigger re-renders. Manage local component state, lift state up to parent components, and use state management libraries for global state.",
  },
  {
    id: 99,
    question: "How to handle authentication in React applications?",
    answer:
      "Handle authentication in React applications using strategies like JWT tokens, OAuth, or session-based authentication. Implement login, registration, and logout functionality, manage authentication state, protect routes with PrivateRoute components, and secure API calls with authentication headers.",
  },
  {
    id: 100,
    question: "What are React hooks and how are they used?",
    answer:
      "React hooks are functions that let you use state and lifecycle features in functional components. Common hooks include useState for managing state, useEffect for side effects, useContext for accessing context, and custom hooks for reusable logic. Hooks simplify component logic and improve code readability.",
  },
];

export default questions;
