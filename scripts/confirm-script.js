function getLocalStorage(key) {
    return localStorage.getItem(key)
}

function confirmUserData() {
    let fName = getLocalStorage("fname");
    let lName = getLocalStorage("lname");
    let streetName = getLocalStorage("street");
    let streetNumber = getLocalStorage("streetNr");
    let numberAdd = getLocalStorage("nrAdd");
    let zip = getLocalStorage("plz");
    let city = getLocalStorage("ort");
    let pPhone = getLocalStorage("telP");
    let gPhome = getLocalStorage("telG");
    let mail = getLocalStorage("email");
    let bornOn = getLocalStorage("birthdate");
    let insurance = getLocalStorage("versicherung");
}

    let confirmationMsg = `<p><span class="label">Vorname:</span><span class="value"> ${fName}</span></p>`;

    document.getElementById("dataConfirmation").innerHTML = confirmationMsg;