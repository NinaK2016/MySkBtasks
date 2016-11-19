import express from 'express';
import fetch from 'isomorphic-fetch';
//import Promise from 'bluebird';
import _ from 'lodash';
import cors from 'cors';

//const __DEV__ = true;

const app = express();
app.use(cors());

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
const pcFields = ['board', 'vendor', 'model', 'cpu', 'hz', 'image', 'video', 'ram', 'volume', 'pins', 'os', 'floppy', 'hdd', 'size', 'monitor', 'length', 'height', 'width'];

app.get('/task3A', async (req, res) => {
  //var strInf = (req.query.get).toString();
  var strInf = req.query.get;
  if (strInf.charAt(0) === "/") strInf = strInf.substring(1);
  var arrayInf = strInf.split("/");
  let response = await fetch(pcUrl);
  let pc = await response.json();
  //console.log(pc);
  //console.log(arrayInf);

  if (arrayInf[0] === "") {
    var pcI = pc;
  } else if (arrayInf[0] === "board" ) {
    //var pcI =  _.pick(pc, arrayInf[0]);
    var pcI = pc[arrayInf[0]];
    if (arrayInf[1] === "vendor" || arrayInf[1] === "model" || arrayInf[1] === "image" || arrayInf[1] === "video") {
      pcI = pcI[arrayInf[1]];
      if (arrayInf[2] != undefined) {
        return res.status(404).send("Not Found");
      }
    } else if (arrayInf[1] === "cpu") {
      pcI = pcI[arrayInf[1]];
      if (arrayInf[2] === "model" || arrayInf[2] === "hz") {
        pcI = pcI[arrayInf[2]];
      } else if (arrayInf[2] != undefined) {
        return res.status(404).send("Not Found");
      }
    } else if ((arrayInf[1] === "")) {
      pcI = pc[arrayInf[0]];
    } else if (arrayInf[1] != undefined) {
      return res.status(404).send("Not Found");
    }
  } else if (arrayInf[0] === "ram" ) {
    var pcI = pc[arrayInf[0]];
    if (arrayInf[1] === "vendor" || arrayInf[1] === "volume" || arrayInf[1] === "pins") {
      pcI = pcI[arrayInf[1]];
    } else if (arrayInf[1] != undefined) {
      return res.status(404).send("Not Found");
    }
  } else if (arrayInf[0] === "os" || arrayInf[0] === "floppy" || arrayInf[0] === "monitor" || arrayInf[0] === "length" || arrayInf[0] === "height" || arrayInf[0] === "width") {
    var pcI = pc[arrayInf[0]];
  } else if (arrayInf[0] === "hdd") {
    var pcI = pc[arrayInf[0]];
    if (arrayInf[1] === "0" || arrayInf[1] === "1" || arrayInf[1] === "3") {
      pcI = pcI[arrayInf[1]];
      if (arrayInf[2] != undefined) {
        pcI = pcI[arrayInf[2]];
      }
    } else if ((arrayInf[1] === "")) {
      pcI = pc[arrayInf[0]];
    } else if ((arrayInf[1] != undefined)) {
      return res.status(404).send("Not Found");
    }
  } else if (arrayInf[0] === "volumes") {
    var pcHdd = pc['hdd'];
    var sizeC=0, sizeD=0;
    for (var i = 0; i < pcHdd.length; i++){
      if (pcHdd[i]['volume'] === "C:") sizeC += pcHdd[i]['size'];
      if (pcHdd[i]['volume'] === "D:") sizeD += pcHdd[i]['size'];
    }
    pcI = {"C:":sizeC.toString() + "B", "D:":sizeD.toString() + "B"};
  } else {
    //var pcI = "Not Found";
    return res.status(404).send("Not Found");
  }
  const pcInfo = pcI;
  return res.status(200).json(pcInfo);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
