let password = prompt('Input password');

if (password.length >= 8) {
	if (password.indexOf(' ') === -1) {
		console.log('Successful!');
	} else {
		console.log('Space is not allowed');
	}
} else {
	console.log('Short password!');
}