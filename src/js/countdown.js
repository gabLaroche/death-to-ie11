export default function countdown(endDate, timerId, preDeathTagline, postDeathTagline) {
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
		const timerContainer = document.getElementById(timerId);
		const tagline = timerContainer.querySelector('.tagline');

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
			timerContainer.querySelector('.yearsText').innerHTML = yearsDesc;
			timerContainer.querySelector('.monthsText').innerHTML = monthsDesc;
			timerContainer.querySelector('.daysText').innerHTML = daysDesc;
			timerContainer.querySelector('.hoursText').innerHTML = hoursDesc;
			timerContainer.querySelector('.minutesText').innerHTML = minutesDesc;
			timerContainer.querySelector('.secondsText').innerHTML = secondsDesc;

			// Populates the time numbers
			timerContainer.querySelector('.years').innerHTML = yearsNumber;
			timerContainer.querySelector('.months').innerHTML = monthsNumber;
			timerContainer.querySelector('.days').innerHTML = daysNumber;
			timerContainer.querySelector('.hours').innerHTML = hoursNumber;
			timerContainer.querySelector('.minutes').innerHTML = minutesNumber;
			timerContainer.querySelector('.seconds').innerHTML = secondsNumber;
		};

		if (timeRemaining >= 0) {
			tagline.innerHTML = preDeathTagline;
			calculateProperTime(timeRemaining);
		} else {
			tagline.innerHTML = postDeathTagline;
			calculateProperTime(timeSince);
		}
	}
};
