import countdown from "./js/countdown";
import populateReasonsAndWebsites from './js/reasonsAndWebsites';

countdown(
    '08/17/2021 05:00:00 PM',
    'mainstreamTimer',
    'Mainstream support for Internet Explorer 11 will be dropped in :',
    'Mainstream support for Internet Explorer 11 has ended for :');
countdown(
    '10/14/2025 05:00:00 PM',
    'extendedTimer',
    'Extended support for (Windows 10) Internet Explorer 11 will be dropped in :',
    'Internet Explorer is finally dead and has been dead for :');
populateReasonsAndWebsites();
