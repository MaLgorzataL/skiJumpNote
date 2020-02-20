 //calculateTotalPoints.js
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  switch (distancePoints)  {
    case ((distancePoints === null) || (isNaN(distancePoints) === true)): 
      return null;
      break;
    default: 
      const stylePoints = calculateStylePoints(styleNotes);
  };
  switch(stylePoints) {
    case ((stylePoints === null) || (isNaN(stylePoints) === true)): 
      return null;
      break;
    default:
      distancePoints = distancePoints + stylePoints;
  };
  switch(windFactor) {
    case ((windFactor === null) || (isNaN(windFactor) === true)):
      return null;
      break;
    default:
      distancePoints = distancePoints + windFactor;
  };
  switch(gateFactor) {
    case ((gateFactor === null) || (isNaN(gateFactor) === true)):
      return null;
      break;
    default:
        return distancePoints + gateFactor;     
  }
};

module.exports = calculateTotalPoints;