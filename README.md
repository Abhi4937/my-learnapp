# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## This branch is for learning basic of jsx and element create  
`const root=ReactDom.createRoot(getElementById('root'); 
const element=<h1>hello,world<\h1> 
root.render(element)`

### sample to create a functional and class component and pass parameters to component using props
* we are rendering the entire root but only clock element/component gets rendered(function of react vdom)
* we created 2 components: 
    1. function component in which we pass name as prop
    2. class component in which we pass date as prop

### this is compose-extract component example 
* "Comment" component has following child element which we will split into different components
    * UserInfo: Avatar(image) and UserInfo-name
    * comment-text
    * comment-date
* in this branch we have one "Comment.js" component which has all element which we will split in next sub-branch

### this is extraction of component example
* from above info we have extraction the userInfo with further extraction of avatar component.

## Adding state variable and life cycle methods 
* have added state variable to <clock/> component instead of passing props from app.js
    * note: props are read-only but states are local to components and can change
* lifecycle methods used:
    * componentDidMount(): this will run once after the constructor of clock class is set i.e is output of the clock component is rendered i.e clock is mounted. so we include setInterval method in this lifecycle to call tick() function every second
    * componentWillUnmount(): whenever clock component is removed from DOM, will remove timers setInvterval.
* order of method that are called.
    1. constructor of <clock> is called:When <Clock /> is passed to root.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
    2. render() of clock component:React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.
    3. componentDidMount():When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
    4. setState():Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
        * Note: whenever there is change in state or new props render() method of that component will be called.
    5.componentWillUnmount(): If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.

### state update are merged
* When you call setState(), React merges the object you provide into the current state.
    * For example, your state may contain several independent variables:
    `window.fetchPost().then(response=>{
            this.setState((state)=>({  
                post: response  
                })); 
             });`
* Then you can update them independently with separate setState() calls:  
'componentDidMount(){
        window.fetchPost().then(response=>{
            this.setState((state)=>({
                post: response
            }));
        });
        window.fetchComment().then((response)=>{
            this.setState((state)=>({
                comments: response
            }));
        });
    }`
* The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.

### list and keys
* Note key is required for list of components for tracking but it is not send as props parameter to use the that value use different variable
as shown in example
* also actual list items should be use as different component with no key, key should be used when calling the list component as shown in example
* we can use index as key but should be avoided
* key must be unique among siblings but can be same for different list
* we can use inline map 