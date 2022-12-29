import './App.css';
import ClockTick from './components/ClockTick';
function App() {
  const element=<h1>Hello, World</h1>
  return (
    <div className="App">
          Learn React
          {element}
          <ClockTick/>
    </div>
  );
}

export default App;
