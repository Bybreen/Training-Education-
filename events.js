var username, noteName,textEntered, target;
noteName=document.getElementById('noteName');
function writeLabel(e) {
if(!e){
e = window.event;
}
target = event.target || event.srcElement;
textEntered = e.target.value;
noteName.textContent = textEntered;
}
