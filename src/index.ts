import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Here will be proizvedenie API and documentations</h1>');
});

app.get('/ping', (req: Request, res: Response) => {
	res.json('Pong');
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
