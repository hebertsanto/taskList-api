import express from 'express';
import db from './database/index.js';
import routes from './routes/index.js';
import bodyParser from 'body-parser';


const app = express();

db.on('conected', () => {
  console.log('ok conected');
});

db.on('error', (error) => {
  console.log(`some error ocurred : ${error}`);
});

app.use(express.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(routes);
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
