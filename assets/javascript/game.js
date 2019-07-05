/*
Stephen Thompson \^/
The CrystalsCollector Game
using jQuery API 
*/

$(document).ready(function () {
    var minRndNum = 19;
    var maxRndNum = 120;
    var rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
});
