import './App.css';
import Header from './components/Header';
import SportsDisplay from './components/SportsDisplay';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Display Sports Info */}
      <SportsDisplay/>
    </div>
  );
};

export default App;
