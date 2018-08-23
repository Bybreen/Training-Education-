var elFome, elSelectPackage, elPackageHint, elTerms;
elForm = document.getElementById ('formSignUp');
elSelectPackage = document.getElementById ('packageHint');
elTerms = document.getElementById ('terms');
elTermsHint = document.getElementById ('termsHint');
function packageHint() {
var package = this.options [this selected index].value;
if (package = ('monthly') {
el PackageHint.innerHTML = 'Save $10 if you pay for one year!';
} else {
elPackage.Hint.innerHTML = Wise Choice!';
}
}
