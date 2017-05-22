var netflix = "netflix";
var spotify = "spotify";
var pandora = "pandora";

var netflixPricing = 8.99;
var spotifyPricing = 5.99;
var pandoraPricing = 10;

var netflixIsUsed = true;
var spotifyIsUsed = true;
var pandoraIsUsed = false;

var total = 0;

if (netflixIsUsed === true) {
  total = total + netflixPricing;
}
 // <-- same -->
if (spotifyIsUsed === true) {
  total += spotifyPricing;
}

if (pandoraIsUsed === true) {
  total += pandoraPricing;
}

alert ('You spend $' + total + ' on Online Streaming Services each month.')
