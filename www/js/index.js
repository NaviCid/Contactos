document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	alert("Entra en on device ready")
    // find all contacts with 'Jacob' in any name field
    var options = new ContactFindOptions();
    options.filter = "Jacob"; 
		options.multiple = true;
    var fields = ["displayName", "name", "phoneNumbers"];
	alert("Antes del navigator")
    navigator.contacts.find(fields, onSuccess, onError, options);
	alert("Despues del navigator")
}

function onSuccess(contacts) {
	alert("Entra en on Success")
	for(var i = 0; i < contacts.length; i++) {
			var html = '<div data-role="collapsible" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-inset="false">';

			html += '<h2>' + contacts[i].displayName + '</h2>';
			html += '<ul data-role="listview">'

			var contact = contacts[i];

			for(var j = 0; j < contact.phoneNumbers.length; j++) {
				html += '<li>' + contact.phoneNumbers[j].type + ": " + contact.phoneNumbers[j].value + '</li>';
			}

			html += '</ul></div>';

			$('#contactsList').append(html);
	}
	alert("Termina el for")
	$('[data-role=collapsible]').collapsible().trigger('create');
	alert("Despues del collapsible")
}

function onError(contactError) {
    alert('onError!');
}