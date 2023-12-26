import express, {raw} from 'express';
import request from 'request';
import cheerio from 'cheerio';
import generateStats from './svg.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', function (req, res) {
	let userName = req.query.userName;
	if (!userName) {
		let errorMessage = {
			error:
				'add your geeksForGeeks user Name in link eg /?userName=<YOUR_USER_NAME>',
		};
		res.send(errorMessage);
	} else {
		let url = 'https://auth.geeksforgeeks.org/user/' + userName + '/practice/';
		request(url, function (error, response, html) {
			if (!error) {
				var $ = cheerio.load(html);
				let values = {};
				let problemDificultyTag = ['School', 'Basic', 'Easy', 'Medium', 'Hard'];
				let k = 0;
				// GFG updated UI
				let data = $('.tabs.tabs-fixed-width.linksTypeProblem');

				if (data.length == 0) {
					res.status(400).send({
						error:
							'userName does not exist or not solved any problem on geeksforgeeks',
					});
				} else {
					let totalProblemSolved = 0;

					let rawData = $(data[0]).text();
					for (let i = 0; i < rawData.length; i++) {
						if (rawData[i] == '(') {
							let tempStart = i + 1;
							while (rawData[i] != ')') {
								i++;
							}
							let tempProblems = parseInt(rawData.substring(tempStart, i));
							values[problemDificultyTag[k++]] = tempProblems;
							totalProblemSolved += tempProblems;
						}
					}

					values['userName'] = userName;
					values['totalProblemsSolved'] = totalProblemSolved;
					if ('json' in req.query) {
						res.send(values);
					} else {
						let svg = generateStats(values);
						res.setHeader('Content-Type', 'text/html');
						res.setHeader('Cache-Control', 's-max-age=60, stale-while-revalidate');
						res.send(svg);
					}
				}
			} else {
				console.log(error);
			}
		});
	}
});

app.get('/ping', (req, res) => {
	res.send({status: 200});
});

const port = process.env.PORT || 2001;
app.listen(port, () =>
	console.log(`Server running on ${port}, http://localhost:${port}`)
);

export default app;
