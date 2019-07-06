/*
Stephen Thompson \^/
The CrystalsCollector Game
using jQuery API 
*/

$(document).ready(function () {
    var minRndNum = 19;
    var maxRndNum = 120;
    var minCryNum = 1;
    var maxCryNum = 12;
    var cryArrySz = 4;
    var playerScr = 0;

    var rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);

    Array.prototype.shuffle = function() {
        var cryR=[],cryC = this.slice(0);
        while (cryC.length) cryR.push(cryC.splice(Math.random() * cryC.length, 1));
        return cryR;
     }; 

     Array.prototype.populate = function(x) {
     return Object.keys(Object(0+Array(x)));
     };
     
     var rndCrystals = function(cryArraySz, minCryNum, maxCryNum) {
     var a = [].populate(maxCryNum).slice(minCryNum);
     a = a.shuffle();
     return a.slice(0,cryArraySz);
     }
     
     var crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum);

     console.log('crystal 1: ' + crystals[0] + ' crystal 2: ' + crystals[1] + ' crystal 3: ' + crystals[2] + ' crystal 4: ' + crystals[3]);



    });
