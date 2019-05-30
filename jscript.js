/*
  This is a javaScript file for my website portfolio.
  Author: Joshua Abbott
  Date: 05/30/2019
*/

// Two functions to set social icons:
function hover(element) {
    if(element.id == "facebook_icon"){
        element.setAttribute('src', 'images/if_Facebook_color.png');
    } 
    else if (element.id == "linkedin_icon"){
        element.setAttribute('src', 'images/if_linkedin_color.png');
    }
    else {
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
    else {
        element.setAttribute('src', 'images/if_github.png');
    }    
  }