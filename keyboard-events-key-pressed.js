var el;
function charCount(e) {
var textEntered.charDisplay, counter, lastKey;
textEntered = document.getElementById('message').value;
charDisplay = document.getElementById('charactersLeft');
counter = (180 - (text.Entered.length);
charDiscplay.textContent = counter;

lastKey = document.getElementById('lastKey');
lastKey.textContent = 'Last key in ASCII code '+ e.keyCode;
}
el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);
