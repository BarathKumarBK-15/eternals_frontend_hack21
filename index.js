function homePage(value) {
	sessionStorage.setItem("sport" , value);
	window.document.location.href = "./sportkit.html"; 
}

function sportKitPage() {
	sport = sessionStorage.getItem("sport");
	if(sport === 'cricket') {
		document.getElementsByClassName("title")[0].textContent = "Cricket - Kits";
		document.getElementById("cricket-extra").classList.remove("d-none");
		var cricketCard = document.getElementsByClassName("cricket-card");
		for(var i = 0; i < cricketCard.length; i++) {
			cricketCard[i].classList.remove("col-lg-6");
			cricketCard[i].classList.add("col-lg-4");
		}

		document.getElementsByClassName("img-fluid")[0].src ="Assets/Landing/gloves11.png";
		document.getElementsByClassName("img-fluid")[1].src ="Assets/Landing/aus2.png";
		document.getElementsByClassName("img-fluid")[2].src ="Assets/Landing/bat1.png";

		document.getElementsByClassName("kit-name")[0].textContent = "Gloves";
		document.getElementsByClassName("kit-name")[2].textContent = "Bats";
	} 
}



function loadProductsPage(value) {
	sessionStorage.setItem("kit" , document.getElementsByClassName("title")[0].textContent[0] + value);
	window.document.location.href = "./products.html"; 
}

function productsPage() {
	
}















