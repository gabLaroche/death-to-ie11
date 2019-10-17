    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
        document.querySelector('.tagline').innerHTML= "This Website does not support Internet Explorer"
        document.getElementById('yearsText').innerHTML = "<a href='https://www.google.com/intl/en/chrome/'>Download Chrome</a>";
        document.getElementById('monthsText').innerHTML = "<a href='https://www.mozilla.org/en-US/firefox/new/'>Download Firefox</a>";

    }


