function checkLength(e, minLength){
var el, el Msg;
if(!e){
e = window.event;
}
el = e.target || e.srcElement;
elMsg = el.nextSibling;
if(el.value.length < minLength(){
elMsg.innerHTML = User name must be' + minLength + 'characters or more';
} else {
elMsg.innerHTML = ";
}}
