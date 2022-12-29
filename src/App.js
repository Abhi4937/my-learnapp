import './App.css';
import User from './components/User';
import Clock from './components/Clock';
function App() {
  const element=<h1>Hello, World</h1>
  return (
    <div className="App">
          Learn React
          {element}
          <User name='Abhishek'/>
          <Clock date={new Date().toLocaleTimeString()}/>
    </div>
  );
}

export default App;
