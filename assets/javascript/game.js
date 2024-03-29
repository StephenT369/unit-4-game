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
    var crystal1Scr = 0;
    var crystal2Scr = 0;
    var crystal3Scr = 0;
    var crystal4Scr = 0;
    var wins = 0;
    var losses = 0;
    var winSt = 'You won!!';
    var losSt = 'You lost!!';

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
     
     var crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);

     ////console.log('crystal 1: ' + crystals[0] + ' crystal 2: ' + crystals[1] + ' crystal 3: ' + crystals[2] + ' crystal 4: ' + crystals[3]);
     console.log(crystals);

$('#crystal_01').on('click', function() {
    crystal1Scr = crystals[0] + crystal1Scr;
    $('#player-score').text(crystal1Scr + crystal2Scr + crystal3Scr + crystal4Scr);
    ////console.log(crystal1Scr);

    playerScr = crystal4Scr + crystal3Scr + crystal2Scr + crystal1Scr;
    
    if (playerScr == rndNum){
        wins ++;
        $('#wins').text(wins);
        ////console.log(wins);
        $('#result').text(winSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);



    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);

    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    } else if (playerScr > rndNum){
        losses ++;
        $('#losses').text(losses);
        //console.log(losses);
        $('#result').text(losSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);

    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);

    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;
    };

});

$('#crystal_02').on('click', function(){
    crystal2Scr = crystals[1] + crystal2Scr;
    $('#player-score').text(crystal2Scr + crystal1Scr + crystal3Scr + crystal4Scr);
    //console.log(crystal2Scr);

    playerScr = crystal4Scr + crystal3Scr + crystal2Scr + crystal1Scr;
    
    if (playerScr == rndNum){
        wins ++;
        $('#wins').text(wins);
        //console.log(wins);
        $('#result').text(winSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
    
    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);
    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    } else if (playerScr > rndNum){
        losses ++;
        $('#losses').text(losses);
        //console.log(losses);
        $('#result').text(losSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
    
    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);
    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    };

});

$('#crystal_03').on('click', function(){
    crystal3Scr = crystals[2] + crystal3Scr;
    $('#player-score').text(crystal3Scr + crystal2Scr + crystal1Scr + crystal4Scr);
    //console.log(crystal3Scr);

    playerScr = crystal4Scr + crystal3Scr + crystal2Scr + crystal1Scr;
    
    if (playerScr == rndNum){
        wins ++;
        $('#wins').text(wins);
        //console.log(wins);
        $('#result').text(winSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
    
    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);
    
    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    } else if (playerScr > rndNum){
        losses ++;
        $('#losses').text(losses);
        //console.log(losses);
        $('#result').text(losSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
    
    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);
    
    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    };

});

$('#crystal_04').on('click', function(){
    crystal4Scr = crystals[3] + crystal4Scr;
    $('#player-score').text(crystal4Scr + crystal3Scr + crystal2Scr + crystal1Scr);
    //console.log(crystal4Scr);

    playerScr = crystal4Scr + crystal3Scr + crystal2Scr + crystal1Scr;
    
    if (playerScr == rndNum){
        wins ++;
        $('#wins').text(wins);
        //console.log(wins);
        $('#result').text(winSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
    
    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);
    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    } else if (playerScr > rndNum){
        losses ++;
        $('#losses').text(losses);
        //console.log(losses);
        $('#result').text(losSt);
        rndNum = Math.floor(Math.random() * (maxRndNum - minRndNum)) + minRndNum;
    console.log('#random-number: ' + rndNum)
    $('#random-number').text(rndNum);
    
    crystals = rndCrystals(cryArrySz, minCryNum, maxCryNum).map(Number);
    console.log(crystals);
    playerScr = 0;
    $('#player-score').text(playerScr);
    crystal1Scr = 0;
    crystal2Scr = 0;
    crystal3Scr = 0;
    crystal4Scr = 0;

    };

});
    });
