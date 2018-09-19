function recorderControls(e) {
if (!e) {
e = window.event;
}
target = event.target || event.srcElement;
if (event.preventDefault) {
e.preventDefault();
} else {
event.returnValue = false;
}
switch(target.getAttribute('data-state')) {
case 'record':
record(target);
break;
case 'storp':
stop(target);
break;
}
}
