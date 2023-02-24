import './App.css';
import axios from "axios";
import Header from './components/Header';
import NavBar from './components/NavBar';

const options = {
  method: 'GET',
  url: 'https://sportscore1.p.rapidapi.com/sports/1/teams',
  params: {page: '1'},
  headers: {
	'X-RapidAPI-Key':  process.env.REACT_APP_API_KEY,
	'X-RapidAPI-Host': process.env.REACT_API_API_HOST,
}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Navbar */}
      <NavBar/>
      {/* Display Results */}
    </div>
  );
};

export default App;
