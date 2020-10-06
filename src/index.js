import countdown from "./js/countdown";
import populateReasonsAndWebsites from "./js/reasonsAndWebsites";

countdown(
  "08/17/2021 05:00:00 PM",
  "mainstreamTimer",
  "Mainstream support ends in",
  "Mainstream support has ended for :"
);
countdown(
  "10/14/2025 05:00:00 PM",
  "extendedTimer",
  "Extended support ends in",
  "Internet Explorer is finally dead and has been dead for"
);
populateReasonsAndWebsites();
