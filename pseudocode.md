#Crystals Collector Pseudo Code
#Stephen Thompson \^/

#generate random number (19..120) for start of game for player to match
    #var rndNum = 0 

#generate 4 random numbers (1..12) for the crystals
    #set value to each crystal generated from random numbers
        #var crysNum = [n,n,n,n]
        #var crysNumTot = 0

#track player's score, that will be used to match rndNum.
    #var plyNum = 0

#When player clicks one of the crystals, the value of the crystal will add to plyNum.
    #crysNumTot ++ crysNum

#Track wins and loses
    # var wins = 0
    # var loses = 0

#Check if crysNumTot is = to rndNum, if = the +1 to win
    # if crysNumTot = rndNum then, wins +1
        # game reset
    # else +1 loses
        # game rest

