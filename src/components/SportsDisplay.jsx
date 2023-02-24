
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_API_API_HOST,
	}
};

console.log(process.env.REACT_APP_API_KEY)

fetch('https://sportscore1.p.rapidapi.com/sports/1/players?page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function SportsDisplay() {
  return (
    <div>SportsDisplay</div>
  )
}

export default SportsDisplay;