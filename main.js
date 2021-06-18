/* ------------------------------------------------------------
  Navigation toggle
------------------------------------------------------------ */

function openNav() {
    document.getElementById("mySidebar").style.width = "340px";
    document.getElementById("main").style.marginRight = "340px";
    document.getElementById("main").style.transition = "0.5s";
    document.getElementById("main").style.display = "none";

}
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("main").style.transition = "0.5s";
    document.getElementById("main").style.display = "block";
}

/* ------------------------------------------------------------
  Contact Validation
------------------------------------------------------------ */ 

let fname,lname,email,textarea;

fname = document.getElementById("fname");
lname = document.getElementById("lname");
email = document.getElementById("email");
textarea = document.getElementById("textarea");

const send = document.getElementById('send');
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


const validate = (e) => {

  if (fname.value === "") {
    alert("Please enter your firstname.");
    fname.focus();
    return false;
  }

  if (lname.value === "") {
    alert("Please enter your lastname.");
    lastname.focus();
    return false;
  }
    
  if (!filter.test(email.value)) {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (textarea.value === "") {
    alert("Please enter a textarea address.");
    textarea.focus();
    return false;
  }
  
  return true; //  submit the form data
}
send.addEventListener('click', validate);