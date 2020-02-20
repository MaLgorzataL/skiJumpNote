 //calculateTotalPoints.js
const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

    if ((distancePoints === null) || (isNaN(distancePoints) === true) ||
        (stylePoints === null) || (isNaN(stylePoints)) ||
        (windFactor === null) || (isNaN(windFactor) === true) ||
        (gateFactor === null) || (isNaN(gateFactor) === true))
        {
      return null;
    } else {
      return distancePoints + stylePoints + windFactor + gateFactor;
    };
};

module.exports = calculateTotalPoints;