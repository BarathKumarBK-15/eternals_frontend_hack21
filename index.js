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
	var sport = sessionStorage.getItem("sport")
	var kit = sessionStorage.getItem("kit");
	if(sport === "cricket") {
		var title = document.getElementsByClassName("title")[0];
		var productName = "Cricket - ";
		if(kit[1] === '1') {
			productName += "Gloves";
			var cricketCard = document.getElementsByClassName("cricket-card");
			var toggleButton = document.getElementsByClassName("btn-product-card-outline");
			var customiseButton = document.getElementsByClassName("btn-product-card");
			for(var i = 0; i < cricketCard.length; i++) {
				cricketCard[i].classList.add("d-none");
				toggleButton[i].classList.add("d-none");
				customiseButton[i].style.width = "100%";
			}

			var imgSrc = "Assets/cricket_gloves/gloves";

			document.getElementsByClassName("img-fluid")[0].src = imgSrc + "11.png";
			document.getElementsByClassName("product-name")[0].textContent = "Kauna 2.1";
			document.getElementsByClassName("product-desc")[0].textContent = "The safest pair of gloves with stunning green look!";

			document.getElementsByClassName("img-fluid")[1].src = imgSrc + "21.png";
			document.getElementsByClassName("product-name")[1].textContent = "Beast Pro";
			document.getElementsByClassName("product-desc")[1].textContent = "Turn on 'THE BEAST MODE' before the start of play.";

			document.getElementsByClassName("img-fluid")[2].src = imgSrc + "31.png";
			document.getElementsByClassName("product-desc")[2].textContent = "Beast Pro";
			document.getElementsByClassName("product-desc")[2].textContent = "Comfort, Stylish, and Safety is what 'Pace 2.4' provides you!";

		}
		else if(kit[1] === '2') {
			productName += "Jerseys";
			var imgSrc = "Assets/cricket_jersey/";

			document.getElementsByClassName("img-fluid")[0].src = imgSrc + "aus1.png";
			document.getElementsByClassName("product-name")[0].textContent = "Australia";
			document.getElementsByClassName("product-desc")[0].textContent = "Get on with the Aussies jersey and shout out - 'SAY NO TO DIE'!";

			document.getElementsByClassName("img-fluid")[1].src = imgSrc + "eng1.png";
			document.getElementsByClassName("product-name")[1].textContent = "England";
			document.getElementsByClassName("product-desc")[1].textContent = "The cup has come home after a very long time, let's celebrate it.";

			document.getElementsByClassName("img-fluid")[2].src = imgSrc + "ind1.png";
			document.getElementsByClassName("product-name")[2].textContent = "India";
			document.getElementsByClassName("product-desc")[2].textContent = "Support the Men in Blue, who cares if they wear whites against The Kiwis.";

			document.getElementsByClassName("img-fluid")[3].src = imgSrc + "nz1.png";
			document.getElementsByClassName("product-name")[3].textContent = "New Zealand";
			document.getElementsByClassName("product-desc")[3].textContent = "Love the 'Sport', Love the 'Country', and Love 'The Kiwis Kindness'!";

			document.getElementsByClassName("img-fluid")[4].src = imgSrc + "sa1.png";
			document.getElementsByClassName("product-name")[4].textContent = "South Africa";
			document.getElementsByClassName("product-desc")[4].textContent = "We are 'The Most Unluckiest', do support us with our awesome jerseys.";

			document.getElementsByClassName("img-fluid")[5].src = imgSrc + "wi1.png";
			document.getElementsByClassName("product-name")[5].textContent = "West Indies";
			document.getElementsByClassName("product-desc")[5].textContent = "We once ruled this arena, just for wait 'THE GREATEST COMEBACK'!";

		}
		else {
			productName += "Bats"; 
			var cricketCard = document.getElementsByClassName("cricket-card");
			var toggleButton = document.getElementsByClassName("btn-product-card-outline");
			var customiseButton = document.getElementsByClassName("btn-product-card");
			for(var i = 0; i < cricketCard.length; i++) {
				cricketCard[i].classList.add("d-none");
				toggleButton[i].classList.add("d-none");
				customiseButton[i].style.width = "100%";
			}

			var imgSrc = "Assets/cricket_bats/bat";

			document.getElementsByClassName("img-fluid")[0].src = imgSrc + "1.png";
			document.getElementsByClassName("product-name")[0].textContent = "Kauna 2.0";
			document.getElementsByClassName("product-desc")[0].textContent = "Bring on the 'classy' cover drives and on drives.";

			document.getElementsByClassName("img-fluid")[1].src = imgSrc + "2.png";
			document.getElementsByClassName("product-name")[1].textContent = "Beast 1.0";
			document.getElementsByClassName("product-desc")[1].textContent = "Can someone see the ball? Please don't hurt it too much!";

			document.getElementsByClassName("img-fluid")[2].src = imgSrc + "3.png";
			document.getElementsByClassName("product-name")[2].textContent = "Pace Pro";
			document.getElementsByClassName("product-desc")[2].textContent = "Elegancy and Timing is the best way of playing it!";
		}

		title.textContent = productName;
	}
}

function toggleButton(value) {
	var imgSrc = "Assets/cricket_jersey/";
	switch(value) {
		case "1" : 
			var img = document.getElementsByClassName("img-fluid")[0];
			if(img.src[img.src.length - 5] === "1")  
				img.src = imgSrc + "aus2.png";
			else
				img.src = imgSrc + "aus1.png";
			break;

		case "2" : 
			var img = document.getElementsByClassName("img-fluid")[1];
			if(img.src[img.src.length - 5] === "1")  
				img.src = imgSrc + "eng2.png";
			else
				img.src = imgSrc + "eng1.png";
			break;

		case "3" : 
			var img = document.getElementsByClassName("img-fluid")[2];
			if(img.src[img.src.length - 5] === "1") 
				img.src = imgSrc + "ind2.png";
			else
				img.src = imgSrc + "ind1.png";
			break;

		case "4" : 
			var img = document.getElementsByClassName("img-fluid")[3];
			if(img.src[img.src.length - 5] === "1") 
				img.src = imgSrc + "nz2.png";
			else
				img.src = imgSrc + "nz1.png";
			break;

		case "5" : 
			var img = document.getElementsByClassName("img-fluid")[4];
			if(img.src[img.src.length - 5] === "1") 
				img.src = imgSrc + "sa2.png";
			else
				img.src = imgSrc + "sa1.png";
			break;

		case "6" : 
			var img = document.getElementsByClassName("img-fluid")[5];
			if(img.src[img.src.length - 5] === "1") 
				img.src = imgSrc + "wi2.png";
			else
				img.src = imgSrc + "wi1.png";
			break;
	} 
}















