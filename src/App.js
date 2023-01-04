import './App.css';
import User from './components/User';
import Clock from './components/Clock';
import Comment from './components/Comment';
import PostComments from './components/PostComments';

function App() {
  const element=<h1>Hello, World</h1>
  return (
    <div className="App">
          Learn React
          {element}
          <div className='Users'>
          <User className="name1" name='Abhishek'/>
          <User className="name2" name="Esha"/>
          <User className="name3" name="Anzal"/>
          </div>
          <Clock/>
          <Comment users={{name:"Abhishek"}} text="my comment text" date={new Date().toLocaleTimeString()}/>
          <PostComments/>
    </div>
  );
}

export default App;
