
//document.getElementById("contact-location").innerHTML = "Adelaide, AU";

let headerText = 'CONTACT';
let blurbText = 'Fan? Drop a Note!';
let phoneLabel = 'Phone: ';

let city = 'Vancouver';
let stateOrProvince = 'BC';
let phoneDigits = '+1 604-657-5677';
let emailAddress = 'info@commongroundband.ca';

let phoneNumber = phoneLabel + phoneDigits;

let mainDiv = document.getElementById("contact");

let headerDiv = document.createElement('h2');
headerDiv.classList.add('w3-wide');
headerDiv.classList.add('w3-center');
headerDiv.innerHTML = headerText;
mainDiv.appendChild(headerDiv);

let blurbDiv = document.createElement('p');
blurbDiv.classList.add('w3-opacity');
blurbDiv.classList.add('w3-center');
blurbDiv.innerHTML = blurbText;
mainDiv.appendChild(blurbDiv);

let contactBoxDiv = document.createElement('div');
contactBoxDiv.classList.add('w3-row');
contactBoxDiv.classList.add('w3-padding-32');
mainDiv.appendChild(contactBoxDiv);

let contactInfo = document.createElement('div');
contactInfo.classList.add('w3-col');
contactInfo.classList.add('m6');
contactInfo.classList.add('w3-large');
contactInfo.classList.add('w3-margin-bottom');
contactBoxDiv.appendChild(contactInfo);

let cityInfo = document.createElement('i');
cityInfo.classList.add('fa');
cityInfo.classList.add('fa-map-marker');
cityInfo.setAttribute('style','width:30px');
contactInfo.appendChild(cityInfo);

let cityText = document.createTextNode(city + ", " + stateOrProvince);
contactInfo.appendChild(cityText)

let cityLineBreak = document.createElement('br');
contactInfo.appendChild(cityLineBreak);

let phoneDiv = document.createElement('i');
phoneDiv.classList.add('fa');
phoneDiv.classList.add('fa-phone');
phoneDiv.setAttribute('style','width:30px');
contactInfo.appendChild(phoneDiv);

let phoneText = document.createTextNode(phoneNumber);
contactInfo.appendChild(phoneText);

let phoneLineBreak = document.createElement('br');
contactInfo.appendChild(phoneLineBreak);

let emailDiv = document.createElement('i');
emailDiv.classList.add('fa');
emailDiv.classList.add('fa-envelope');
emailDiv.setAttribute('style','width:30px');
contactInfo.appendChild(emailDiv);

let emailText = document.createTextNode(emailAddress);
contactInfo.appendChild(emailText);

let emailBreak = document.createElement('br');
emailDiv.appendChild(emailBreak);

let formDiv = document.createElement('div');
formDiv.classList.add('w3-col');
formDiv.classList.add('m6');
contactBoxDiv.appendChild(formDiv);

let form = document.createElement('form');
form.action = "";
form.target = "_blank";
form.method = "post";
formDiv.appendChild(form);

let fieldsDiv = document.createElement('div');
fieldsDiv.classList.add('w3-row-padding');
fieldsDiv.setAttribute('style','margin:0 -16px 8px -16px');
form.appendChild(fieldsDiv);

let nameDiv = document.createElement('div');
nameDiv.classList.add('w3-half');
fieldsDiv.appendChild(nameDiv);

//NAME
let nameInput = document.createElement('input');
nameInput.classList.add('w3-input');
nameInput.classList.add('w3-border');
nameInput.type = "text";
nameInput.placeholder = "Name";
nameInput.name = "name";
nameInput.required = "true";
nameDiv.appendChild(nameInput);

let emailFieldDiv = document.createElement('div');
emailFieldDiv.classList.add('w3-half');
fieldsDiv.appendChild(emailFieldDiv);

//EMAIL
let emailInput = document.createElement('input');
emailInput.classList.add('w3-input');
emailInput.classList.add('w3-border');
emailInput.type = "text";
emailInput.placeholder = "Email";
emailInput.name = "email";
emailInput.required = "true";
emailFieldDiv.appendChild(emailInput);

//MESSAGE
let messageInput = document.createElement('input');
messageInput.classList.add('w3-input');
messageInput.classList.add('w3-border');
messageInput.type = "text";
messageInput.placeholder = "Message";
messageInput.name = "name";
messageInput.required = "true";
form.appendChild(messageInput);

let sendButton = document.createElement('button');
sendButton.classList.add('w3-button','w3-black','w3-section','w3-right');
sendButton.type = "submit";
sendButton.innerHTML = 'SEND';
form.appendChild(sendButton);



