const form = document.querySelector('.contact-form');
const button = document.querySelector('#form-button');
let emailIn = document.querySelector('#Email');
let titleIn = document.querySelector('#Title');
let messageIn = document.querySelector('#form-button');


button.addEventListener("click", function(){

let xmlhttp = new XMLHttpRequest();
let information = `email=${emailIn.value}&titre=${titleIn.value}&message=${messageIn.value}`;

xmlhttp.onload = function (){
    const serverResponse = this.responseText;
}
xmlhttp.open("POST","./sendEmail.php", true);

xmlhttp.setRequestHeader("Content-Type", "application/json");

xmlhttp.send(information);
xmlhttp.onreadystatechange = function (){
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        ResponseMessage.innerHTML = xhttp.responseText;
        emailIn.value="";
        titleIn.value="";
        messageIn.value="";
        }
    }
})