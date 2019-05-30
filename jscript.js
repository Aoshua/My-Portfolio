/*
  This is a javaScript file for my website portfolio.
  Author: Joshua Abbott
  Date: 05/30/2019
*/

$(document).ready(function()
{
    $("#facebook_icon").effect("pulsate", {times:1}, 4500);
    $("#linkedin_icon").effect("pulsate", {times:1}, 5000);
    $("#github_icon").effect("pulsate", {times:1}, 5500);
});

// Two functions to set social icons:
function hover(element) {
    if(element.id == "facebook_icon"){
        element.setAttribute('src', 'images/if_Facebook_color.png');
    } 
    else if (element.id == "linkedin_icon"){
        element.setAttribute('src', 'images/if_linkedin_color.png');
    }
    else if(element.id == "github_icon"){
        element.setAttribute('src', 'images/if_github_color.png');
    }
  }  
  function unhover(element) {    
    if(element.id == "facebook_icon"){
        element.setAttribute('src', 'images/if_Facebook.png');
    } 
    else if (element.id == "linkedin_icon"){
        element.setAttribute('src', 'images/if_linkedin.png');
    }
    else if(element.id == "github_icon"){
        element.setAttribute('src', 'images/if_github.png');
    }    
  }