/*
  This is a javaScript file for my website portfolio.
  Author: Joshua Abbott
  Date: 08/01/2018
*/

$(document).ready(function()
  {
    $("#hobbies-tabs").tabs ({ active: 1}); //hobbies-tabs

    var availableFirstNames  =  [
      "Jack",
      "Danny",
      "Sue",
      "Mary",
      "James",
      "Robert",
      "Patricia",
      "Jennifer",
      "Michael",
      "Linda",
    ];
    $("#First_Name").autocomplete({
      source: availableFirstNames
    }); //end automplete

    var availableLastNames  =  [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Miller",
      "Davis",
      "Garcia",
      "Rodriguez",
      "Wilson",
    ];
    $("#Last_Name").autocomplete({
      source: availableLastNames
    }); //end automplete

    $("#facebook_icon").effect("pulsate", {times:1}, 4500);
    $("#linkedin_icon").effect("pulsate", {times:1}, 5000);
    $("#github_icon").effect("pulsate", {times:1}, 5500);

    $( "#sortable1" ).sortable();

    //the following are selectors
    $(".selectable1").bind("mousedown", function(someEvent) {
        someEvent.metaKey = true;
    }).selectable();

    $("#Progressbar1").progressbar({
          value: parseInt(barPercent)
      }); //end Progressbar1


});

var barPercent = 0;
var i = 0;

  function addToBar(){
    if(document.getElementById("First_Name").value !== ""){
      barPercent += 33.33333;
    }
    $("#Progressbar1").progressbar({
          value: parseInt(barPercent)
      }); //end Progressbar1
  } //end addToBar

//The following functions are to open dialog boxes for details on photos
$(function() {
  $("#dialog1").dialog({
	   autoOpen: false
    });
		$("#MyProfilePic1").on("click", function() {
		    $("#dialog1").dialog("open");
		});
});
$(function() {
  $("#dialog2").dialog({
	   autoOpen: false
    });
		$("#WritingCenter_Transparent").on("click", function() {
		    $("#dialog2").dialog("open");
		});
});
$(function() {
  $("#dialog3").dialog({
	   autoOpen: false
    });
		$("#UPS_Logo").on("click", function() {
		    $("#dialog3").dialog("open");
		});
});
$(function() {
  $("#dialog4").dialog({
	   autoOpen: false
    });
		$("#Subway_Combo").on("click", function() {
		    $("#dialog4").dialog("open");
		});
});
$(function() {
  $("#dialog5").dialog({
	   autoOpen: false
    });
		$("#WSU_Logo").on("click", function() {
		    $("#dialog5").dialog("open");
		});
});
$(function() {
  $("#dialog6").dialog({
	   autoOpen: false
    });
		$("#NUAMES_Logo").on("click", function() {
		    $("#dialog6").dialog("open");
		});
});
$(function() {
  $("#dialog7").dialog({
	   autoOpen: false
    });
		$("#EagleScoutPic").on("click", function() {
		    $("#dialog7").dialog("open");
		});
});
$(function() {
  $("#dialog8").dialog({
	   autoOpen: false
    });
		$("#WSU_Rock").on("click", function() {
		    $("#dialog8").dialog("open");
		});
});
$(function() {
  $("#dialog9").dialog({
	   autoOpen: false
    });
		$("#NUAMES_Building").on("click", function() {
		    $("#dialog9").dialog("open");
		});
});
$(function() {
  $("#dialog10").dialog({
	   autoOpen: false
    });
		$("#Telescope_sm").on("click", function() {
		    $("#dialog10").dialog("open");
		});
});
$(function() {
  $("#dialog11").dialog({
	   autoOpen: false
    });
		$("#MyElectricGuitar").on("click", function() {
		    $("#dialog11").dialog("open");
		});
});
