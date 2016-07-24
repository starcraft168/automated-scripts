var date = new Date();

var greeting = function() {

	var morning = {
		'0': 'good morning babe',
		'1': 'good morning honey',
		'2': 'good morning :)',
		'3': 'good morning I miss you',
		'4': 'morning honey',
		'5': 'I love you baby'
	};
  
	var randomNumber = Math.floor(Math.random(0,1)*Object.keys(obj).length);

	var greeting;
	if(date.getHours() < 13) {
		greeting = morning[randomNumber];
	}

	return greeting;
};

console.log(greeting);
