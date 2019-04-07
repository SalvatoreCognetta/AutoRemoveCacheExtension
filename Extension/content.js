alert("Hello world!");

console.log("Hello world!");

window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";
	caches.keys().then(function(names) {
		for (let name of names) {
			console.log(name);
			caches.delete(name);
		}
	});
  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage;                            //Webkit, Safari, Chrome
});


