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
	const oneLetter = /^[A-Za-z]{1}$/;
	const numbers = /^[0-9]+$/;
	const fourDigits = /^[0-9]{4}$/;
	const telInt = /^\+?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



	function validateFirstName() {
		let inputElement = document.getElementById("fname");
    	let fNameValue = inputElement.value;

		if (!fNameValue) {
			alert("Bitte Vornamen eingeben");
			return false;
			} else if (!fNameValue.match(letters)) {
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
			alert('Im Feld "Hausnummer" sind nur Nummern erlaubt. Ein Buchstaben-Zusatz kann im Feld "Zusatz" eingegeben werden.');
			return false;
		} else {
			console.log(streetNrValue);
			return true;
		}
	}

	function validateNrAdd() {
		let inputElement = document.getElementById("nrAdd");
    let nrAddValue = inputElement.value;

		if (!nrAddValue) {
			return true;
		} else if (!nrAddValue.match(oneLetter)) {
			alert('Im Feld "Zusatz" bitte einen einstelligen Buchstabenzusatz eingeben oder das Feld leer lassen.');
			return false;
		} else {
			console.log(nrAddValue);
			return true;
		}
	}

	function validatePlz() {
		let inputElement = document.getElementById("plz");
    	let plzValue = inputElement.value;

		if (!plzValue.match(fourDigits)) {
			alert('Bitte im Feld "PLZ" eine in der Schweiz gültige Postleitzahl (vierstellige Zahl) eingeben.');
			return false;
		} else {
			console.log(plzValue);
			return true;
		}
	}

	function validateOrt() {
		let inputElement = document.getElementById("ort");
    	let ortValue = inputElement.value;

		if (!ortValue) {
			// leerer String
			alert('Im Feld "Wohnort" bitte Ortsnamen eingeben.');
			return false;
		} else {
			console.log(ortValue)
			return true
		}
	}


	

	function validateTelP() {
		let inputElement = document.getElementById("telP");
    	let telPValue = inputElement.value;

		if (!telPValue.match(telInt)) {
			alert('Bitte Ihre Rufnummer mit Ländercode im internationalen Format (+12 34 567 89 01) eingeben.')
			return false
		} else {
			console.log(telPValue);
			return true;
		}
	}

	function validateTelG() {
		let inputElement = document.getElementById("telG");
    	let telGValue = inputElement.value;
		if (!telGValue) {
			return true
		} else if (!telGValue.match(telInt)) {
			alert('Bitte Ihre Rufnummer mit Ländercode im internationalen Format (+12 34 567 89 01) eingeben.')
			return false
		} else {
			console.log(telGValue);
			return true;
		}
	}

	function validateEmail() {
		let inputElement = document.getElementById("email");
		let emValue = inputElement.value;

		if (!emValue) {
			alert('Bitte Emailadresse angeben');
			return false;
		} else if (!emValue.match(emailRegex)) {
			alert('Korrigieren Sie bitte das Format der Email-Adresse');
			return false;
		} else {
			console.log(emValue);
			return true;
		}
	}

	function validateBirthdate() {
		let inputElement = document.getElementById("birthdate");
		let bdValue = inputElement.value;

		if (!bdValue) {
			alert('Bitte Geburtsdatum angeben')
			return false;
		} else {
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
