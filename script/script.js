const form = document.querySelector('.contact-form');
const button = document.querySelector('#form-button');
let emailIn = document.querySelector('#Email');
let titleIn = document.querySelector('#Title');
let messageIn = document.querySelector('#Message');
let ResponseMessage = document.querySelector("#ResponseMessage");
let overlay = document.querySelector(".overlay");
let overlayBtn = document.querySelector("#overlay-btn");
const emailReg = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/;
const subjectReg = /(^[a-zA-Z0-9_.]{6,})/;



button.addEventListener("click", function(){

    form.onsubmit = e => {
            e.preventDefault();
        if(emailReg.test(emailIn.value) ){   
            
            if(subjectReg.test(titleIn.value)){
                
                let xmlhttp = new XMLHttpRequest();
            
            let information = `email=${emailIn.value}&title=${titleIn.value}&message=${messageIn.value}`;
        
            xmlhttp.onload = function (){
                const serverResponse = this.responseText;
            }
            xmlhttp.open("POST","./script/sendEmail.php", true);

            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xmlhttp.send(information);
        

            xmlhttp.onreadystatechange = function (){
                
                    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        
                        ResponseMessage.innerHTML = xmlhttp.responseText;
                        overlay.classList.remove("hidden");
                        overlayBtn.addEventListener("click",function(){
                        overlay.classList.add("hidden");
                    })
                        titleIn.value="";
                        messageIn.value="";
                
            }
         }
        }else{
            alert("Please enter more than 6 characters and do not add any special characters");
        }
    }
        else{
            alert("email invalid!");
        }
    }
    
})

