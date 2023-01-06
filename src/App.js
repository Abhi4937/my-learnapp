import './App.css';
import User from './components/User';
import Clock from './components/Clock';
import Comment from './components/Comment';
import PostComments from './components/PostComments';
import ControlledComponent from './components/ControlledComponent';

function App() {
  const element=<h1>Hello, World</h1>
  return (
    <div className="App">
          Learn React
          {element}
          <User name='Abhishek'/>
          <Clock/>
          <Comment users={{name:"Abhishek"}} text="my comment text" date={new Date().toLocaleTimeString()}/>
          <PostComments/>
          <ControlledComponent/>
    </div>
  );
}

export default App;
