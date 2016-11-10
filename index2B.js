import express from 'express';
import transform from './transform';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2B', (req, res) => {
  const clientname = transform(req.query.fullname);
  //return res.json({
    //fullname: req.query.fullname,
    //clientname,
  //});
  res.send(clientname);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
