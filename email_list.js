"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    // change to Boolean
    var isValid = true;

    // validate the entries
    if (emailAddress1 == "") {
        $("email_address1").nextElementSibling.firstChild.nodeValue
            = "The first email_address is required.";
            isValid = false;   
         }

    else { 
    $("email_address1").nextElementSibling.firstChild.nodeValue = ""; 
    }
    if (emailAddress2 == "") {
    $("email_address2").nextElementSibling.firstChild.nodeValue 
    = "The second email_address is required.";
        isValid = false;
    }
    else if (emailAddress2 != emailAddress1) {
        $("email_address2").nextElementSibling.firstChild.nodeValue 
        = "The emailaddresses must match.";
        isValid = false;
    }
    else { 
        $("email_address2").nextElementSibling.firstChild.nodeValue = "";

    }
    if (firstName == "") {
        $("first_name").nextElementSibling.firstChild.nodeValue 
         = "First name entry is required.";
         isValid = false;
    }



    // submit the form if all entries are valid
    // otherwise, display an error message
    if (isValid) {
        $("email_form").submit(); 
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
