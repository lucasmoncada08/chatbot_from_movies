import robotImage from './robot-image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={robotImage} className="robot-image" alt="logo" />
        <img src="https://static.thenounproject.com/png/934821-200.png" className="record" alt='disk'/>
        <p>
          Hi, my name is Leo. We may chat.
        </p>
        <button className='say-hello'>
          Say Hello
        </button>
      </header>
    </div>
  );
}

export default App;
