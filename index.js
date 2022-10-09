function seterror(id, error) {
  // sets error inside the tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function validateform() {
  // it will do the main validation and if validation fails ,set the returnval to false
  var returnval = true;
  var name = document.forms["myForm"]["name"].value;
  if (name.length < 2) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("name", "*Length of name cannot be zero");
    returnval = false;
  }
  var email= document.forms['myForm']["email"].value;
  if (email.length < 30) {
    seterror("email", "*Length of email is too long");
    returnval = false;
  }
  if (.length == 0) {
    seterror("name", "*Length of name cannot be zero");
    returnval = false;
  }

  return returnval;
}
