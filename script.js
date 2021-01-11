//Hovering over the Menu to show more information
//Get menu links
var $menuLinks = document.querySelectorAll(".menu-item > span");

function getInfoPanelFromElement (element) {
    var $infoPanel = element.parentNode.querySelector(".menu-info");
    return $infoPanel;
}

//When hovering show info panel
function displayInfoPanelForElement(event) {
  	var $anchor = event.target;
  	//Make panel visibile when hover
  	getInfoPanelFromElement($anchor).classList.add("is-visible");
}

//When not hovering hide info panel
function hideInfoPanelForElement(event) {
  	var $anchor = event.target;
  
  	//Make panel invisibile when hover
  	getInfoPanelFromElement($anchor).classList.remove("is-visible");
}

//Go through the list of category menu items and callback when user hovers on the section
for (var i = 0; i < $menuLinks.length; i++) {
  	//On each list element
  	//Identify mouse hovering on element
  	var $anchor = $menuLinks[i];
  
  	$anchor.addEventListener("mouseover", displayInfoPanelForElement);
  	$anchor.addEventListener("mouseout", hideInfoPanelForElement);
}


//Play Main Video
// Get the modal
var modal = document.getElementById("modalBox");

// Get the button that opens the modal
var btn = document.getElementById("mainVideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  	modal.style.display = "block";
  	document.getElementById("watching").innerHTML = "Thank you for watching";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function playVidAuto () {
	var vid = document.getElementById("autoPlayVid");
	vid.muted = true;
	vid.autoplay = true;
	vid.load();
}
playVidAuto();