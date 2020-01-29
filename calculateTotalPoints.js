 //calculateTotalPoints.js
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {

    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    if ((distancePoints === null) || (isNaN(distancePoints) === true)) { 
      return null
    } else {
      const stylePoints = calculateStylePoints(styleNotes);
      if ((stylePoints === null) || (isNaN(stylePoints) === true)) { 
        return null
      } else {
        if ((windFactor === null) || (isNaN(windFactor) === true)) { 
          return null
        } else {
          if ((gateFactor === null) || (isNaN(gateFactor) === true)) { 
            return null
          } else {
        return distancePoints + stylePoints + windFactor + gateFactor;
        }
      }
    }
  }
};

module.exports = calculateTotalPoints;