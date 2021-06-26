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

var swaps=[0,0,0,0,0,0]
let new_src = "Assets/football_jerseys/"
let locs=["RMFC/","MANU/","PSG/","FRA/","GER/","JUV/"]

function loadProductsPages(value) {
	var sportValue = value[0] === "C" ? "cricket" : "football";
	sessionStorage.setItem("sport" , sportValue);
	sessionStorage.setItem("kit" , value);
	window.document.location.href = "./products.html"; 
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

	swaps=[0,0,0,0,0,0]
	var kit_temp = sessionStorage.getItem("kit")

	if(kit_temp === 'F1') {

		var toggleButton = document.getElementsByClassName("btn-product-card-outline");
		var customiseButton = document.getElementsByClassName("btn-product-card");
		for(var i = 0; i < 6; i++) {
			toggleButton[i].classList.add("d-none");
			customiseButton[i].style.width = "100%";
		}

		descs = Array()
		descs.push("Fast used to be fast enough. Gear up and ghost everyone.")
		descs.push("It shows no mercy. It feels no pity. Mute your enemies.")
		descs.push("Touch and Control. go on take our most innovative boot.")
		descs.push("Reflection of power, speed and agility. Let's Superfly")
		descs.push("inject a tounh of flair to our game. It IS revolutionary")
		descs.push("Speed, Acceleration and Mystrey. Feel like a king with us.")

		prodesc = document.getElementsByClassName("product-desc")

		for(let i=0; i<6; i++) {
			prodesc[i].textContent = descs[i];
		}
	}

	if(kit_temp === 'F2') {
		document.getElementsByClassName("title")[0].textContent = "Football - Jerseys";
		teams = Array()
		teams.push("Real Madrid FC");
		teams.push("Man. Utd. FC");
		teams.push("Paris Saint Germain");
		teams.push("France");
		teams.push("Germany");
		teams.push("Juventus FC");

		descs = Array()
		descs.push("For all those haters from FCB, we are 'The Club of the Century'. Hala Madrid!")
		descs.push("There is a reason why we are known as 'The Red Devils'. Concilio Et Labore!")
		descs.push("Seems everyone wants an attacking trio just like we have. Paris est Magique!")
		descs.push("Isn't it simply great feeling to be a 'The World Champion'?. Allez les Bleus!")
		descs.push("Our cannons will be attacking, when we have a wall defending us. #Zsmmm!!")
		descs.push("It's rejoice and celebrate as the KING(GOAT) plays for us. Fino Alla Fine!")

		prodesc = document.getElementsByClassName("product-desc")

		for(let i=0; i<6; i++) {
			prodesc[i].textContent = descs[i];
		}


		ProductCards = document.getElementsByClassName("product-name")

		for(let i=0; i<6; i++) {
			ProductCards[i].textContent = teams[i]
		}

		productImages = document.getElementsByClassName("img-fluid")
		
		for(let i=0; i<6; i++) {
			productImages[i].src = new_src+locs[i]+"1.png";
		}

		for(let i=0; i<6; i++) {
			document.getElementsByClassName("btn-product-card-outline")[i].textContent = "AWAY";
		}
	}
}

function toggleButton(value) {

	var kit_temp = sessionStorage.getItem("kit")

	if(kit_temp === "F2") {
		changeimg(parseInt(value)-1);
		return;
	}

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

function changeimg(i) {
	swaps[i] = (swaps[i]+1)%3;
	var imgtag = swaps[i]+1;
	document.getElementsByClassName("img-fluid")[i].src = new_src+locs[i]+imgtag+".png";
	new_toggle_names=["AWAY","THIRD","HOME"];
	document.getElementsByClassName("btn-product-card-outline")[i].textContent = new_toggle_names[swaps[i]];
}



function funcme() {
	console.log("Hello")
}

function loadCustomPage(value) {
	kit_temp = sessionStorage.getItem("kit")
	if(kit_temp === 'F1' && value =='1') {
		sessionStorage.setItem("brand","adidas")
	}
	if(kit_temp === 'F1' && value =='2') {
		sessionStorage.setItem("brand","adidas")
	}
	if(kit_temp === 'F1' && value =='3') {
		sessionStorage.setItem("brand","nike")
	}
	if(kit_temp === 'F1' && value =='4') {
		sessionStorage.setItem("brand","nike")
	}
	if(kit_temp === 'F1' && value =='5') {
		sessionStorage.setItem("brand","puma")
	}
	if(kit_temp === 'F1' && value =='6') {
		sessionStorage.setItem("brand","puma")
	}
	if(kit_temp === 'F2' && value =='1') {
		sessionStorage.setItem("brand","adidas")
		sessionStorage.setItem("swaps", swaps)
	}
	if(kit_temp === 'F2' && value =='2') {
		sessionStorage.setItem("brand","adidas")
		sessionStorage.setItem("swaps", swaps)
	}
	if(kit_temp === 'F2' && value =='3') {
		sessionStorage.setItem("brand","nike")
		sessionStorage.setItem("swaps", swaps)
	}
	if(kit_temp === 'F2' && value =='4') {
		sessionStorage.setItem("brand","nike")
		sessionStorage.setItem("swaps", swaps)
	}
	if(kit_temp === 'F2' && value =='5') {
		sessionStorage.setItem("brand","adidas")
		sessionStorage.setItem("swaps", swaps)
	}
	if(kit_temp === 'F2' && value =='6') {
		sessionStorage.setItem("brand","adidas")
		sessionStorage.setItem("swaps", swaps)
	}
	sessionStorage.setItem("product", value);
	window.document.location.href = "./purchase.html";
}

function customPage() {
	var kit_temp = sessionStorage.getItem("kit");
	var pro_temp = sessionStorage.getItem("product");
	var brand = sessionStorage.getItem("brand")

	pro_title=[]

	if(kit_temp === 'F1') {
		i = parseInt(pro_temp)-1
		pro_title = ["Adidas X Ghosted","Adidas Predator 20.3","Nike Phantom","Nike Superfly 8 Elite","Puma Future Z","Puma Ultra"]
		document.getElementById("purchase-title").textContent = pro_title[i]

		descs = Array()
		descs.push("Fast used to be fast enough. Gear up and ghost everyone.")
		descs.push("It shows no mercy. It feels no pity. Mute your enemies.")
		descs.push("Touch and Control. go on take our most innovative boot.")
		descs.push("Reflection of power, speed and agility. Let's Superfly")
		descs.push("inject a tounh of flair to our game. It IS revolutionary")
		descs.push("Speed, Acceleration and Mystrey. Feel like a king with us.")

		purdesc = document.getElementById("purchase-desc")	
		purdesc.textContent = descs[i];

		purbrand = document.getElementById("purchase-brand")	
		purbrand.textContent = brand;

		prices = ["4,999.00","6,599.00","9,995.00","21,995.00","9,599.00","15,999.00"]

		purprice = document.getElementById("price-rupee")	
		purprice.textContent = prices[i];

		loc_src = "Assets/boots/"
		boot_locs = ["Adidas_Ghosted/","Adidas_Predator/","Nike_Phantom/","Nike_Superfly/","Puma_Future/","Puma_Ultra/"]

		purimages = document.getElementsByClassName("img-fluid")

		for(let j=0; j<5; j++) {
			purimages[j].src = loc_src+boot_locs[i]+(j+1)+".png"
		}

	} else if(kit_temp === 'F2') {

		i = parseInt(pro_temp)-1

		teams = Array()
		teams.push("Real Madrid FC");
		teams.push("Man. Utd. FC");
		teams.push("Paris Saint Germain");
		teams.push("France");
		teams.push("Germany");
		teams.push("Juventus FC");
		document.getElementById("purchase-title").textContent = teams[i]

		descs = Array()
		descs.push("For all those haters from FCB, we are 'The Club of the Century'. Hala Madrid!")
		descs.push("There is a reason why we are known as 'The Red Devils'. Concilio Et Labore!")
		descs.push("Seems everyone wants an attacking trio just like we have. Paris est Magique!")
		descs.push("Isn't it simply great feeling to be a 'The World Champion'?. Allez les Bleus!")
		descs.push("Our cannons will be attacking, when we have a wall defending us. #Zsmmm!!")
		descs.push("It's rejoice and celebrate as the KING(GOAT) plays for us. Fino Alla Fine!")

		purdesc = document.getElementById("purchase-desc")	
		purdesc.textContent = descs[i];

		purbrand = document.getElementById("purchase-brand")	
		purbrand.textContent = brand;

		prices = ["5,499.00","4,999.00","4,699.00","4,499.00","4,499.00","4,999.00"]

		purprice = document.getElementById("price-rupee")	
		purprice.textContent = prices[i];

		loc_src = new_src
		boot_locs = locs
		addup = sessionStorage.getItem("swaps")

		purimages = document.getElementsByClassName("img-fluid")

		piccontainer = document.getElementsByClassName("img-container-width-sm")
		piccontainer[0].classList.add("d-none")

		piccontainer = document.getElementsByClassName("hor-img")
		piccontainer[0].classList.add("d-none")

		purimages[0].src = loc_src+boot_locs[i]+(1+parseInt(addup[2*i]))+".png"
		console.log(addup)
	} 
}

function imgswap(value) {
	var temp = document.getElementsByClassName("img-fluid")[0].src
	document.getElementsByClassName("img-fluid")[0].src = document.getElementsByClassName("img-fluid")[value].src
	document.getElementsByClassName("img-fluid")[value].src = temp
}










