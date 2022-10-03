let database = [
{
	username: 'Nouman',
	password: 'Supersecret',
},
{
	username: 'Bilal',
	password: '123',
},
{	username: 'Anjum',
	password: '7777' , 
}
];
let newsfeed = [ 
		{username: 'Salman',
		timeline: " I'm  feeling sick"	},
		{
			username: 'Abdullah',
			timeline: 'feeling so sick of all this learning'
		},
		{
			username: 'Abid',
			timeline: 'Tired of all this learning'
		}
		];

	function isUserValid(username, password) {
		for (var i = 0; i < database.length; i++) {
			if (database[i].username === username && 
				database[i].password === password){
				return true;
			}
		}
		return false;
	}
	function signIn(username, password) {
		if (isUserValid(username, password)){
			console.log(newsfeed)
		}else{
			alert('Sorry , wrong username and password')
		}
	}
let userNamePrompt = prompt('whats your username');
let passwordPrompt = prompt('whats your password');
signIn(userNamePrompt, passwordPrompt);