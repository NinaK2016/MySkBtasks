export default function transform(fullname) {
  var arrname = fullname;
  var shortname = "Invalid fullname";
  if (arrname != undefined) {
    if (arrname.charAt(0) === "/") arrname = arrname.substring(1);
    while (arrname.charAt(0) === " ") arrname = arrname.substring(1);
    if (arrname != "") {
      var flag = 0, sASCII = 0;
      arrname = arrname.toUpperCase();
      for (var i=0; i<arrname.length; i++) {
        sASCII = arrname[i].charCodeAt();
        if ((sASCII > 32 && sASCII < 39) || (sASCII > 39 && sASCII < 65) || (sASCII > 90 && sASCII < 127)) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        var arrayname = arrname.split(" ");
        //console.log(arrayname);
        var L = arrayname.length;
        for (var i=1; i<arrayname.length-1; i++) {
          while (arrayname[i] === "") {
            for (var j=i; j<arrayname.length-1; j++) arrayname[j] = arrayname[j+1];
            L--;
          }
        }
        var F = arrayname[L-1].charAt(0);
        var fff = arrayname[L-1].substring(1).toLowerCase();
        arrayname[L-1] = F + fff;
        //console.log(arrayname);
        if (L === 1) {
          shortname = arrayname[0];
        } else if (L === 2) {
          shortname = arrayname[1] + " " + arrayname[0].charAt(0) + ".";
        } else if (L === 3) {
          shortname = arrayname[2] + " " + arrayname[0].charAt(0) + ". " + arrayname[1].charAt(0) + ".";
        }
      }
    }
  }
  const clientname = shortname;
  return clientname;
}
