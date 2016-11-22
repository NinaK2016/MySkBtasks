import express from 'express';
import cors from 'cors';
import convRGB from './convRGB';
import convHSL from './convHSL';
import HSLtoRGB from './HSLtoRGB';

const app = express();
app.use(cors());

app.get('/task2D', (req, res) => {
  const whatColor = req.query.color;
  if (whatColor === undefined) convColor = "Invalid color";
  else {
    console.log(whatColor);
    var convColor = whatColor;
    convColor = convColor.toLowerCase();
    //var sASCII = convColor.charAt(0).charCodeAt();
    //while ((sASCII < 45) || (sASCII > 45 && sASCII < 48) || (sASCII > 57 && sASCII < 97) || (sASCII > 122)) {
      //convColor = convColor.substring(1);
      //sASCII = convColor.charAt(0).charCodeAt();
    //}
    var idRGB = convColor.indexOf("rgb");
    var idHSL = convColor.indexOf("hsl");
    console.log(idRGB, idHSL);
    if (idRGB === 0 || (idRGB === 1 && convColor.charAt(idRGB - 1) === " ") || idRGB === 3) {
      convColor = convColor.substring(idRGB);
      convColor = convRGB(convColor);
    } else if (idHSL === 0 || (idHSL === 1 && convColor.charAt(idHSL - 1) === " ") || idHSL === 3) {
      convColor = convColor.substring(idHSL);
      convColor = convHSL(convColor);
    } else {
      if (convColor.charAt(0) === "#") convColor = convColor.substring(1);
      if (convColor.charAt(0) === " ") convColor = convColor.substring(1);
      var L = convColor.length;
      if (L === 3 || L === 6) {
        var flag = 0;
        for (var i=0; i<L; i++) {
          var sASCII = convColor[i].charCodeAt();
          //console.log(sASCII);
          if ((sASCII < 48) || (sASCII > 57 && sASCII < 97) || (sASCII > 102)) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          if (L === 3) {
            convColor = "#" + convColor[0] + convColor[0] + convColor[1] + convColor[1] + convColor[2] + convColor[2];
          } else if (L === 6) convColor = "#" + convColor;
        } else convColor = "Invalid color";
      } else convColor = "Invalid color";
    }
  }
    //whatColor = convColor;
    res.send(convColor);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
