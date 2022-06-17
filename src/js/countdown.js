export default function countdown(
  endDate,
  timerId,
  preDeathTagline,
  postDeathTagline
) {
  let years, months, days, hours, minutes, seconds;
  let yearsDesc, monthsDesc, daysDesc, hoursDesc, minutesDesc, secondsDesc;
  let hoursNumber,
    minutesNumber,
    secondsNumber;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000, 10);
    let timeSince = parseInt((startDate - endDate) / 1000, 10);
    const timerContainer = document.getElementById(timerId);
    const tagline = timerContainer.querySelector(".tagline");

    const calculateProperTime = (time) => {
      // Logic that calculates the time
      years = Math.floor(time / 3.154e7);
      yearsDesc = years !== 1 ? "Years" : "Year";
      time = time % 3.154e7;

      months = Math.floor(time / 2.628e6);
      monthsDesc = months !== 1 ? "Months" : "Month";
      time = time % 2.628e6;

      days = Math.floor(time / 86400);
      daysDesc = days !== 1 ? "Days" : "Day";
      time = time % 86400;

      hours = Math.floor(time / 3600);
      hoursDesc = hours !== 1 ? "Hours" : "Hour";
      hoursNumber = ("0" + hours).slice(-2);
      time = time % 3600;

      minutes = Math.floor(time / 60);
      minutesDesc = minutes !== 1 ? "Minutes" : "Minute";
      minutesNumber = ("0" + minutes).slice(-2);
      time = time % 60;

      seconds = Math.floor(time);
      secondsDesc = seconds !== 1 ? "Seconds" : "Second";
      secondsNumber = ("0" + seconds).slice(-2);

      // Populates the time description
      timerContainer.querySelector(".yearsText").innerHTML = yearsDesc;
      timerContainer.querySelector(".monthsText").innerHTML = monthsDesc;
      timerContainer.querySelector(".daysText").innerHTML = daysDesc;
      timerContainer.querySelector(".hoursText").innerHTML = hoursDesc;
      timerContainer.querySelector(".minutesText").innerHTML = minutesDesc;
      timerContainer.querySelector(".secondsText").innerHTML = secondsDesc;

      // Populates the time numbers
      timerContainer.querySelector(".years").innerHTML = years;
      timerContainer.querySelector(".months").innerHTML = months;
      timerContainer.querySelector(".days").innerHTML = days;
      timerContainer.querySelector(".hours").innerHTML = hoursNumber;
      timerContainer.querySelector(".minutes").innerHTML = minutesNumber;
      timerContainer.querySelector(".seconds").innerHTML = secondsNumber;
    };

    if (timeRemaining >= 0) {
      tagline.innerHTML = preDeathTagline;
      calculateProperTime(timeRemaining);
    } else {
      tagline.innerHTML = postDeathTagline;
      calculateProperTime(timeSince);
    }

  }
}
