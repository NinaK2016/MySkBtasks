import express from 'express';
import identify from './identify';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2C', (req, res) => {
  const clientname = identify(req.query.username);
  //return res.json({
    //fullname: req.query.fullname,
    //clientname,
  //});
  res.send(clientname);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
