export default function transform(username) {
  //const re = new RegExp('');
  //const clientname = fullname.match(re);
  var id = username.lastIndexOf("/");
  id++;
  var shortname = username.substring(id);
  if (shortname[0] != "@") shortname = "@" + shortname;
  const clientname = shortname;
  return clientname;
}
