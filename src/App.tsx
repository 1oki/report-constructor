
import './App.css';
import Forms from './forms';
import Clipboard from './clipboard';

function App() {
  return (
    <div className="App">
      <Clipboard />
      <header className="App-header">
        Tram Report
      </header>
      <Forms /> 
    </div>
  );
}

export default App;
