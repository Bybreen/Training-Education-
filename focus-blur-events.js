function checkUsername () {
var username = el.value;
if (username.length < 5) {
elMsg.className = 'warning';
elMsg.textContent ntent = 'Not long enough, yet...';
} else {
elMsg.textContent = '';
)
}
function tipUsername() {
elMsg.className = 'tip';
elMsg.innerHTML = 'Username must be at least 5 characters';
}
var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListner('focus', tipUsername, false);
el.addEventListner('blur, checkUsername, false);
