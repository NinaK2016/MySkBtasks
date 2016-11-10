export default function transform(fullname) {
  //const re = new RegExp('');
  //const clientname = fullname.match(re);
  const arrayname = fullname.split(" ");
  var shortname = "";
  if (arrayname[3] != undefined) {
    shortname = "Invalid fullname";
  } else {
    if (arrayname[1] === undefined) {
      shortname = arrayname[0];
    } else if (arrayname[2] === undefined) {
      shortname = arrayname[1] + " " + arrayname[0].charAt(0) + ".";
    } else {
      shortname = arrayname[2] + " " + arrayname[0].charAt(0) + ". " + arrayname[1].charAt(0) + ".";
    }
  }
  if (shortname === "") {
    shortname = "Invalid fullname";
  }
  const clientname = shortname;
  return clientname;
}
