import './App.css';
import BrowsersList from './component/BrowserList';
import data from './data/data.json';

function App() {
  return (
    <div>
      <BrowsersList list={data} />
    </div>
  );
}

export default App;
