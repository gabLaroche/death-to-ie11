function countdown(endDate) {
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		// Special code for our special friend
		var elTagline = document.getElementById('tagline');
		var elTimer = document.getElementById('timer');

		elTagline.innerText('Please stop using Internet Explorer 11 and start using a real browser');
		elTimer.parentNode.removeChild(elTimer);
		return;
	}
	let years, months, days, hours, minutes, seconds;
	let yearsDesc, monthsDesc, daysDesc, hoursDesc, minutesDesc, secondsDesc;
	let yearsNumber, monthsNumber, daysNumber, hoursNumber, minutesNumber, secondsNumber;

	endDate = new Date(endDate).getTime();

	if (isNaN(endDate)) {
		return;
	}

	setInterval(calculate, 1000);

	function calculate() {
		let startDate = new Date();
		startDate = startDate.getTime();

		let timeRemaining = parseInt((endDate - startDate) / 1000);
		let timeSince = parseInt((startDate - endDate) / 1000);
		const tagline = document.querySelector('.tagline');

		const calculateProperTime = time => {
			// Logic that calculates the time
			years = parseInt(time / 3.154e+7);
			yearsDesc = years !== 1 ? 'Years' : 'Year';
			yearsNumber = parseInt(years, 10);
			time = (time % 3.154e+7);

			months = parseInt(time / 2.628e+6);
			monthsDesc = months !== 1 ? 'Months' : 'Month';
			monthsNumber = parseInt(months, 10);
			time = (time % 2.628e+6);

			days = parseInt(time / 86400);
			daysDesc = days !== 1 ? 'Days' : 'Day';
			daysNumber = parseInt(days, 10);
			time = (time % 86400);

			hours = parseInt(time / 3600);
			hoursDesc = hours !== 1 ? 'Hours' : 'Hour';
			hoursNumber = ("0" + hours).slice(-2);
			time = (time % 3600);

			minutes = parseInt(time / 60);
			minutesDesc = minutes !== 1 ? 'Minutes' : 'Minute';
			minutesNumber = ("0" + minutes).slice(-2);
			time = (time % 60);

			seconds = parseInt(time);
			secondsDesc = seconds !== 1 ? 'Seconds' : 'Second';
			secondsNumber = ("0" + seconds).slice(-2);

			// Populates the time description
			document.getElementById('yearsText').innerHTML = yearsDesc;
			document.getElementById('monthsText').innerHTML = monthsDesc;
			document.getElementById('daysText').innerHTML = daysDesc;
			document.getElementById('hoursText').innerHTML = hoursDesc;
			document.getElementById('minutesText').innerHTML = minutesDesc;
			document.getElementById('secondsText').innerHTML = secondsDesc;

			// Populates the time numbers
			document.getElementById("years").innerHTML = yearsNumber;
			document.getElementById("months").innerHTML = monthsNumber;
			document.getElementById("days").innerHTML = daysNumber;
			document.getElementById("hours").innerHTML = hoursNumber;
			document.getElementById("minutes").innerHTML = minutesNumber;
			document.getElementById("seconds").innerHTML = secondsNumber;
		};

		if (timeRemaining >= 0) {
			tagline.innerHTML = 'Internet Explorer 11 will stop being supported by Microsoft in :';
			calculateProperTime(timeRemaining);
		} else {
			tagline.innerHTML = 'Internet Explorer 11 is dead and it has been dead for :';
			calculateProperTime(timeSince);
		}
	}
};

(function () {
	countdown('10/14/2025 05:00:00 PM');
}());