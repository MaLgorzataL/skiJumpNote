const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('styleNotes', () => {
    it('should be defined', () => {
        
        const actual = calculateStylePoints([0,null,0,0,0]);    
        const expected = null;

        assert.equal(actual, expected);
    });
    it('should be >= 0 <= 20 and only half', () => {
        
        const actual = calculateStylePoints([10,10,-5,0,90]);
        const expected = 0;

        assert.equal(actual, expected);
    });
});
describe('calculateStylePoints', () => {
    it('should be sum without min and max', () => {

        const actual = calculateStylePoints([10,12,15,17,18]);
        const expected = 44;
    
        assert.equal(actual, expected);
    });
});

module.exports = calculateStylePoints;
