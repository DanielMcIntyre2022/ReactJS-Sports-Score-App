import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://sportscore1.p.rapidapi.com/sports/1/players',
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

function SportsDisplay() {
  return (
    <div>SportsDisplay</div>
  )
}

export default SportsDisplay;