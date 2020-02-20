const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    it('distancePoints, stylePoints, windFactor, gateFactor should be defined', () => {
        
        const actual = calculateTotalPoints(0,null,0,0,0,0);    
        const expected = null;

        assert.equal(actual, expected);
    });
    it('TotalPoints should be sum: distancePoints + stylePoints + windFactor + gateFactor', () => {
        
        const actual = calculateTotalPoints(100,'big',90,[15,16,17,18,19],9,0);
        const expected = 138;

        assert.equal(actual, expected);
    });
});

