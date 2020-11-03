
/*Elements regarding getting the message */
const messageInputElement = document.getElementById('messageInput');
const messageOutputElement = document.getElementById('messageOutput');
const messageDisplay = document.getElementById('messageDisplay');

/*Elements regarding the styling of the card */
const backgroundColourInput = document.getElementById('backgroundColour');
const fontInput = document.getElementById('font');
const fontColourInput = document.getElementById('fontColour');
const fontSizeInput = document.getElementById('fontSize');

/*addEventListener for Button */
const buttonElement = document.getElementById('btnProcess');
buttonElement.addEventListener('click', displayGreetingscard);


function displayGreetingscard() {
    const greetingContent = messageInputElement.value;
    console.log(fontSizeInput.value);

    /*Styling of the greetings card */
    const backgroundColour = backgroundColourInput.value;
    messageDisplay.style.backgroundColor = backgroundColour;
    messageOutputElement.style.fontFamily = fontInput.value;
    messageOutputElement.style.color = fontColourInput.value;
    messageOutputElement.style.fontSize = fontSizeInput.value + "px";

    messageOutputElement.innerText = greetingContent;
}






