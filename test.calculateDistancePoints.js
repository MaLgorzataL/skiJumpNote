const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('distance', () => {
        it('should be defined', () => {
            
            const actual = calculateDistancePoints(null,'normal',80);    
            const expected = null;
    
            assert.equal(actual, expected);
        });
        it('should be positive number', () => {
            
            const actual = calculateDistancePoints(-10,'big',90);
            const expected = null;
    
            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should be defined', () => {
            
            const actual = calculateDistancePoints(100,null,80);    
            const expected = null;
    
            assert.equal(actual, expected);
        });
        it('should be normal, big or mamut', () => {
            
            const actual = calculateDistancePoints(100,'other',90);
            const expected = null;
    
            assert.equal(actual, expected);
        });
    });
    describe('startPoints', () => {
        it('should be 60 for normal hill', () => {
            
            const actual = calculateDistancePoints(100,'normal',80);    
            const expected = 100;
    
            assert.equal(actual, expected);
        });
        it('should be 60 for big hill', () => {
            
            const actual = calculateDistancePoints(100,'big',90);
            const expected = 78;
    
            assert.equal(actual, expected);
        });
        it('should be 120 for mamut hill', () => {
            
            const actual = calculateDistancePoints(100,'mamut',110);
            const expected = 108;
    
            assert.equal(actual, expected);
        });
    });
    describe('meterPoint', () => {
        it('should be 2 for normal hill', () => {
            
            const actual = calculateDistancePoints(110,'normal',80);    
            const expected = 120;
    
            assert.equal(actual, expected);
        });
        it('should be 1.8 for big hill', () => {
            
            const actual = calculateDistancePoints(95,'big',90);
            const expected = 69;
    
            assert.equal(actual, expected);
        });
        it('should be 1.2 for mamut hill', () => {
            
            const actual = calculateDistancePoints(105,'mamut',110);
            const expected = 114;
    
            assert.equal(actual, expected);
        });
        describe('calculateDistancePoints', () => {
            it('should be more than startPoint for distance > kPoint', () => {
                
                const actual = calculateDistancePoints(100,'normal',80);    
                const expected = 100;
        
                assert.equal(actual, expected);
            });
            it('should be less than startPoint for distance < kPoint', () => {
                
                const actual = calculateDistancePoints(110,'mamut',120);
                const expected = 108;
        
                assert.equal(actual, expected);
            });
            
        });
    });
});
