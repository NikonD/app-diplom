import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { mainRoutes } from './src/routes/main';
import { join } from 'path';
import bodyParser from 'body-parser';

dotenv.config();


const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser({extended: true}))
app.use(bodyParser.json())

app.use(express.static(join(__dirname, "..", "build")));
app.use('/static', express.static(join(__dirname, 'client', 'build', 'static')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile( join(__dirname, 'client', 'build', 'index.html'))
});

app.use('/', mainRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});