export default function identify(username) {
  var shortname = username;
  var shname = "Invalid username";
  if (shortname != undefined) {
    while (shortname.charAt(0) === " ") shortname = shortname.substring(1);
    var id = shortname.indexOf("http:");
    var ids = shortname.indexOf("https:");
    if (id != -1) shortname = shortname.substring(id+5);
    else if (ids != -1) shortname = shortname.substring(ids+6);
    while (shortname.charAt(0) === "/") shortname = shortname.substring(1);
    var arrname = shortname.split("/");
    //console.log(arrname);
    var shn = arrname[0];
    var flag = 0, sASCII = 0;
    for (var i=0; i<shn.length; i++) {
      sASCII = shn[i].charCodeAt();
      if (sASCII === 46) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) shn = arrname[1];
    if (shn.charAt(0) === "@") shn = shn.substring(1);
    var arrn = shn.split("?");
    shn = arrn[0];
    var flag = 0, sASCII = 0;
    for (var i=0; i<shn.length; i++) {
      sASCII = shn[i].toUpperCase().charCodeAt();
      if ((sASCII > 32 && sASCII < 46) || (sASCII > 46 && sASCII < 48) || (sASCII > 57 && sASCII < 65) || (sASCII > 90 && sASCII < 95) || (sASCII > 95 && sASCII < 127)) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) shname = "@" + shn;
  }
  const clientname = shname;
  return clientname;
}
