import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import { getGetSignedUrl, getPutSignedUrl } from './aws';

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/putSignedUrl/:fileName', async (req: Request, res: Response) => {
	let { fileName } = req.params;
	const url = getPutSignedUrl(fileName);
	res.status(201).send({ url });
});

app.get('/getSignedUrl/:fileName', async (req: Request, res: Response) => {
	let { fileName } = req.params;
	const url = getGetSignedUrl(fileName);
	res.status(200).send({ url });
});

app.listen(8080, () => {
	console.log(`Running on port: 8080`);
});
