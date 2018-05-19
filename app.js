import express from 'express';

import bodyParser from 'body-parser';

import path from 'path';

import requestRoute from './api/routes/requestRoute';


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './UI')));

app.use('/api/v1/users/requests', requestRoute);

app.get('/', (req, res) => {
  res.render('index');
});

export default app;
