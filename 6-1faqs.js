"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var link = this;                            // add "this" for the a tag
    var h2 = link.parentNode;                  // a tag within h2 tag 
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
        //removed the removeAttribute class 
        //replaced with h2.className = "";
        h2.className = "";	
    } else { 
        //replaced h2.setAttribute with h2.className = "minus"
        h2.className = "minus";
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        //changed to div.className = "";
        div.className = "";
    } else { 
        //changed to div.className = "open";
        div.className = "open";
    } 
};

window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("a");
    
    // attach event handler for each a tag	    
    for (var i = 0; i < linkElements.length; i++ ) {
    	linkElements[i].onclick = toggle;
    }
    // set focus on the <a> tag
    linkElements[0].focus();       
};
