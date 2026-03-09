const items = [
    {
        title: "What is React?",
        content:
            "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. React uses a virtual DOM for efficient updates and re-renders.",
    },
    {
        title: "What is the difference between state and props?",
        content:
            "Props are read-only inputs passed from a parent component to a child component, while state is local, mutable data managed within the component itself. State changes trigger re-renders; props are immutable from the child's perspective.",
    },
    {
        title: "What are React Hooks?",
        content:
            "Hooks are functions that let you use React state and lifecycle features inside functional components. Common hooks include useState for managing state, useEffect for side effects, useContext for consuming context, and useRef for accessing DOM elements.",
    },
    {
        title: "What is the Virtual DOM?",
        content:
            "The Virtual DOM is a lightweight in-memory representation of the real DOM. When state or props change, React creates a new virtual DOM tree, diffs it against the previous one, and only updates the parts of the real DOM that actually changed — making UI updates fast and efficient.",
    },
    {
        title: "What is JSX?",
        content:
            "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write markup directly inside JavaScript files. Under the hood, JSX is compiled to React.createElement() calls by tools like Babel.",
    },
    {
        title: "What is the Context API?",
        content:
            "The Context API is a built-in React mechanism to share data globally across a component tree without passing props at every level. It consists of React.createContext(), a Provider component that supplies the value, and a Consumer (or useContext hook) to read it.",
    },
    {
        title: "What is useEffect used for?",
        content:
            "useEffect is a hook that lets you perform side effects in functional components — such as fetching data, setting up subscriptions, or manually manipulating the DOM. It runs after every render by default, but you can control when it fires using the dependency array.",
    },
];

export default items;