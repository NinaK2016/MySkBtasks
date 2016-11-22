import HSLtoRGB from './HSLtoRGB';
export default function convHSL(reColor) {

  var transColor = reColor.substring(3);
  var cASCII = transColor.charAt(0).charCodeAt();
  while (cASCII < 48 || cASCII > 57) {
    transColor = transColor.substring(1);
    cASCII = transColor.charAt(0).charCodeAt();
  }
  var arrayColors = transColor.split(",");
  console.log(arrayColors);
  if (arrayColors.length === 3) {
    var L = arrayColors[1].length;
    if (arrayColors[1].charAt(L-1) === "%") {
      arrayColors[1] = arrayColors[1].substring(3, L-1);
      L = arrayColors[2].length;
      if (arrayColors[2].charAt(L-1) === ")") arrayColors[2] = arrayColors[2].substring(0, L-1);
      L = arrayColors[2].length;
      if (arrayColors[2].charAt(L-1) === "%") {
        arrayColors[2] = arrayColors[2].substring(3, L-1);
        for (var i=0; i<3; i++) {
          L = arrayColors[i].length;
          while (arrayColors[i].charAt(L-1) === " ") {
            arrayColors[i] = arrayColors[i].substring(0, L - 1);
            L = arrayColors[i].length;
          }
        }
        console.log(arrayColors);
        var fl = 0;
        if (+arrayColors[0] < 0 || +arrayColors[i] > 360) fl = 1;
        for (var i=1; i<3; i++) {
          if (+arrayColors[i] < 0 || +arrayColors[i] > 100) {
            fl = 1;
            break;
          }
        }
        if (fl === 0) {
          var givH = +arrayColors[0]/360.;
          var givS = +arrayColors[1]/100.;
          var givL = +arrayColors[2]/100.;
          var arrColors = HSLtoRGB(givH, givS, givL);
          for (var i=0; i<3; i++) {
            arrColors[i] = (+arrColors[i]).toString(16);
            if (arrColors[i] === "0") arrColors[i] = "00";
          }
          console.log(arrColors);
          transColor = "#" + arrColors[0] + arrColors[1] + arrColors[2];
        } else transColor = "Invalid color";
      } else transColor = "Invalid color";
    } else transColor = "Invalid color";
  } else transColor = "Invalid color";
  const RGBcolor = transColor;
  return RGBcolor;
}
