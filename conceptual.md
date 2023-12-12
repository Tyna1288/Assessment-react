### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
   It lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page.

- What is a single page application?
  A Web app that is presented to the user through a single HTML page to be more responsive and to more closely replicate a desktop application or a native app.

- What are some differences between client side and server side routing?
  With server-side routing you download an entire new webpage whenever you click on a lin; with client-side routing the webapp downloads, processes and displays new data for you.

- What are two ways of handling redirects with React Router? When would you use each? 
  You can use either the History API, or using <Redirect/> component. You can use History API to let you navigate back and forth through the user's history, and manipulate the contents of the history stack. You can use <Redirect/> whenever possible, and when moving content to a new URL, when deleting pages or when changing domain names or merging websites.

- What are two different ways to handle page-not-found user experiences using React Router? 
  Use a wildcard path with an asterisk('*') and add it to the very last path of our routes with <PageNotFound/> as the element. Or we can redirect to sitename.com/404 path using the Navigate component imported from the react-router-dom.

- How do you grab URL parameters from within a component using React Router?
  useParams Hook

- What is context in React? When would you use it?
   React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it. It is used when some data needs to be accessible by many components at different nesting levels.

- Describe some differences between class-based components and function components in React.
  Main difference is syntax: function component is just plain JavaScript function which accepts props as an argument and returns a React element. The class based function requires you to extend from React. Component and create a render function which returns a React element. Also, functional components cannot use React lifecycle methods, such as componentDidMount. Class components can use React lifecycle methods.

- What are some of the problems that hooks were designed to solve?
  Wrapper hell, huge components, and confusing classes. 