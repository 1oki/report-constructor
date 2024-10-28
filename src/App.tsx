
import './App.css';
import Forms from './forms';
import Clipboard from './clipboard';
import Table from './table';

function App() {
  return (
    <div className="App">
      <Clipboard />
      <header className="App-header">
        Tram Report
      </header>
      <Forms /> 
      <Table />
    </div>
  );
}

export default App;
