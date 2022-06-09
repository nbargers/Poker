const getHandDetails = (hand: string[]): string => {

    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

    let rankArray: any = [];
    let suitArray: any = [];

    function sorted(arrayHand: any) { 
        let sortedHand = [];
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < arrayHand.length; j++ ) { 
                if (ranks[i] === arrayHand[j].charAt(0)) {
                    sortedHand.push(arrayHand[j])
                }
            }   
        }
        return sortedHand;
    }

    let sortedHand = sorted(hand)

    function suitAndRank(sortedHand: any) { 
        for (let i = 0; i < sortedHand.length; i++) { 
            rankArray.push(sortedHand[i].charAt(0))
            suitArray.push(sortedHand[i].charAt(1)) 
        } 
    }

    suitAndRank(sortedHand); 
    function countSuites(suitArray: any) {
        let suitCount: any = {};
        suitArray.forEach(function(x: any) { suitCount[x] = (suitCount[x] || 0)+1; });
            return suitCount;
    }
    
    function countRanks(rankArray: []) {
        let rankCount: any = {};
        rankArray.forEach(function(x) { rankCount[x] = (rankCount[x] || 0)+1; });
            return rankCount;
    }
    
    function isFlush() {
        let cS = countSuites(suitArray);
        if(Object.keys(cS).find(key => cS[key] === 5)) {
            return true;
        } else {
            return false;
        }
    }
    
    function isStraight() {
        let index = ranks.indexOf(rankArray[0])
        let ref = ranks.slice(index, index + 5).join("")
        let section = rankArray.slice(0).join("")
            if (section === "10JQKA" && section === ref) {
                return "ROYALSTRAIGHT";
            } else if (section === "A2345" || section === ref) {
                return "STRAIGHT"; 
            }else {
                return "FALSE";
            }
    }
    
    function pairs() {
        let rS = countRanks(rankArray)
        return Object.keys(rS).filter((key) => rS[key] === 2).length
    }
    
    
    function whichHand() {
        let rS = countRanks(rankArray)
        if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
            return 'Royal Flush'
        } else if (isFlush() === true && isStraight() === "STRAIGHT") {
           return "Straight Flush"
        } else if (Object.keys(rS).find(key => rS[key] === 4)) {
            return "Four of a Kind"
        } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 2) {
            return "Full House"
        } else if (isFlush() === true) { // problem here as isFlush is a function not a variable, otherwise it returns undefined
            return "Flush"
        } else if (isStraight() === "STRAIGHT") { // problem again, isStraight is a function too so it should be isStraight() instead of isStraight, otherwise it returns undefined
            return "Straight"
        } else if (Object.keys(rS).find(key => rS[key] === 3)) {
            return "Three of a Kind"
        } else if (pairs() === 2) {
            return "Two Pair"
        }else if(pairs() === 1) {
            return "Pair"
        }else {
            return `High Card, ${rankArray[rankArray.length-1]}`
        }
    }

    return whichHand();
};

export default getHandDetails