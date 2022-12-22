function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
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


    let confirmationMsg = `<p><span class="label">Vorname:</span><span class="value"> ${fName}</span></p>
    <p><span class="label">Vorname:</span><span class="value"> ${fName}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${lName}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${street}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${streetNr}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${nrAdd}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${plz}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${ort}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${telP}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${telG}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${email}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${birthdate}</span></p>;
    <p><span class="label">Vorname:</span><span class="value"> ${versicherung}</span></p>;

    document.getElementById("dataConfirmation").innerHTML = confirmationMsg;

}