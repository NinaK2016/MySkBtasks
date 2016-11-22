export default function convRGB(reColor) {

  var transColor = reColor.substring(3);
  var cASCII = transColor.charAt(0).charCodeAt();
  while (cASCII < 48 || cASCII > 57) {
    transColor = transColor.substring(1);
    cASCII = transColor.charAt(0).charCodeAt();
  }
  var arrayColors = transColor.split(",");
  console.log(arrayColors);
  if (arrayColors.length === 3) {
    var L = 0;
    L = arrayColors[2].length;
    if (arrayColors[2].charAt(L-1) === ")") arrayColors[2] = arrayColors[2].substring(0, L-1);
    for (var i=0; i<3; i++) {
      L = arrayColors[i].length;
      while (arrayColors[i].charAt(L-1) === " ") {
        arrayColors[i] = arrayColors[i].substring(0, L - 1);
        L = arrayColors[i].length;
      }
    }
    console.log(arrayColors);
    var fl = 0;
    for (var i=0; i<3; i++) {
      if (+arrayColors[i] < 0 || +arrayColors[i] > 255) {
        fl = 1;
        break;
      }
    }
    if (fl === 0) {
      for (var i=0; i<3; i++) {
        arrayColors[i] = (+arrayColors[i]).toString(16);
        if (arrayColors[i] === "0") arrayColors[i] = "00";
      }
      console.log(arrayColors);
      transColor = "#" + arrayColors[0] + arrayColors[1] + arrayColors[2];
    } else transColor = "Invalid color";
  } else transColor = "Invalid color";
  const RGBcolor = transColor;
  return RGBcolor;
}
