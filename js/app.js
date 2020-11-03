
const messageInputElement = document.getElementById('messageInput');
const messageOutputElement = document.getElementById('messageOutput');

const messageDisplay = document.getElementById('messageDisplay');
const backgroundColourInput= document.getElementById('backgroundColour');

const fontInput = document.getElementById('font');

const fontColourInput = document.getElementById('fontColour');

const fontSizeInput = document.getElementById('fontSize');

const buttonElement = document.getElementById('btnProcess');

buttonElement.addEventListener('click', greet);

function greet(){
    const greetingContent = messageInputElement.value;
    console.log(fontSizeInput.value);
    const backgroundColour = backgroundColourInput.value;
    messageDisplay.style.backgroundColor = backgroundColour;

    messageOutputElement.style.fontFamily = fontInput.value;
    messageOutputElement.style.color = fontColourInput.value;
    messageOutputElement.style.fontSize = fontSizeInput.value +"px";
    
    messageOutputElement.innerText = greetingContent;
}






