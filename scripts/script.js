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
		if (!validateStreet()) return false;
		if (!validateStreetNr()) return false;
		if (!validateNrAdd()) return false;
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

	const letters = /^[A-Za-z]+$/;
	const oneLetter = /^[A-Za-z]{1}$/
	const numbers = /^[0-9]+$/;

	function validateFirstName() {
		let inputElement = document.getElementById("fname");
    let fNameValue = inputElement.value;
		// let letters = /^[A-Za-z]+$/;

		if (!fNameValue) {
			// leerer String
			alert("Bitte Vornamen eingeben");
			return false;
		}
			// nicht leerer String
			else if (!fNameValue.match(letters)) {
				alert("Bitte beim Vornamen nur Buchstaben eingeben.");
				return false;
			} else {
				console.log(fNameValue);
				return true;
			}
	}

	function validateLastName() {
		let inputElement = document.getElementById("lname");
    let lNameValue = inputElement.value;

		if (!lNameValue) {
			// leerer String
			alert("Bitte Nachnamen eingeben");
			return false;
		}
			// nicht leerer String
			else if (!lNameValue.match(letters)) {
				alert("Bitte beim Nachnamen nur Buchstaben eingeben.");
				return false;
			} else {
				console.log(lNameValue);
				return true;
			}
	}

	function validateStreet() {
		let inputElement = document.getElementById("street");
    let streetValue = inputElement.value;

		if (!streetValue) {
			// leerer String
			alert("Bitte Strassennamen eingeben.");
			return false;
		} else {
			console.log(streetValue)
			return true
		}
	}

	function validateStreetNr() {
		let inputElement = document.getElementById("streetNr");
    let streetNrValue = inputElement.value;

		if (!streetNrValue) {
			alert("Bitte die Hausnummer eingeben.");
			return false;
		} else if (!streetNrValue.match(numbers)) {
			alert("In diesem Feld sind nur Nummern erlaubt. Ein Buchstaben-Zusatz ist im nächsten Feld möglich.");
			return false;
		} else {
			console.log(streetNrValue);
			return true;
		}
	}

	function validateNrAdd() {
		let inputElement = document.getElementById("nrAdd");
    let nrAddValue = inputElement.value;

		if (!nrAddValue.match(oneLetter)) {
			alert("Bitte einen einstelligen Buchstabenzusatz eingeben oder Feld leer lassen.");
			return false;
		} else {
			console.log(streetNrValue);
			return true;
		}
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
