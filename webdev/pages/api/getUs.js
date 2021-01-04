// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
export default (req, res) => {
	axios.get('https://api.covidtracking.com/v1/us/daily.json').then((data)=>{
		console.log(data)
		res.status(200).send(data)
	}

	)
}
