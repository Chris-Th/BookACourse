	/*function validateForm() {
    let fName = document.getElementById("fName"); console.log(fName);
    let lName = document.getElementById("lName");
    let street = document.getElementById("street");
    let streetNr = document.getElementById("streetNr");
    let plz = document.getElementById("plz");
    let ort = document.getElementById("ort");
    let telG = document.getElementById("telG");
    let telP = document.getElementById("telP");
    let email = document.getElementById("email");
    let birthdate = document.getElementById("birthdate");
    let agbCheck = document.getElementById("agbCheck");
    let versJa = document.getElementById("versJa");
    let versNein = document.getElementById("versNein"); 
*/
		//===================Versuch nach Chris=================
	function validateForm() {

		if (!validateFirstName()) return false;
		if (!validateLastName()) return false;
		if (!validatetreet()) return false;
		if (!validateStreetNr()) return false;
		if (!validatePlz()) return false;
		if (!validateOrt()) return false;
		if (!validateTelG()) return false;
		if (!validateTelP()) return false;
		if (!validateEmail()) return false;
		if (!validateBirthdate()) return false;
		if (!validateAgbCheck()) return false;
		if (!validateVersJa() && !validateVersNein()) return false;

		alert('Alles gut');
		return true;
		
	}






		//============== Versuch nach w3-Beispiel================
		/*
if(fNameValidation(fName)) {
	if(lNameValidation(lName)) {
	/*	if(streetValidation(street)) {
			if(streetNrValidation(streetNr)) {
				if
			}
		} 
	}
}
return false;
}

function fNameValidation(fName) {

	var letters = /^[A-Za-z]+$/;

	dfdfif(fName.value.match(letters)) {

		return true;

	} else {

		alert("Bitte Vornamen eingeben. Es sind nur Buchstaben erlaubt.")
		fName.focus();
		return false;

	}
}

function lNameValidation(lName) {

	var letters = /^[A-Za-z]+$/;
	if(lName.value.match(letters)) {

		return true;

	} else {

		alert("Bitte Nachnamen eingeben. Es sind nur Buchstaben erlaubt.")
		lName.focus();
		return false;

	}
}

/*
function bookingForm() {
    // return validFName(); validLName(); validStreet(); etc.
}
    var fName = document.getElementById("fName").value

    function validFName(fName) {
        if (fName.value.length == 0) {
            alert("Vorname ist Pflichtfeld");
            return false;
        }
    }
	*/
