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
];

export default questions;
