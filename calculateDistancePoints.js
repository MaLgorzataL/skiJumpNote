// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let startPoints, meterPoint = 0;
  if (hillSize === 'normal') {
    startPoints = 60;
    meterPoint = 2;
  } else {
    if (hillSize === 'big') {
      startPoints = 60;
      meterPoint = 1.8;
      } else {
      if (hillSize === 'mamut') {
        startPoints = 120;
        meterPoint = 1.2;
      } else {
        return null;
      }
    }
  };
  if (startPoints === 0) {
    alert('Nie podano typu skoczni');
    return 0;
  };
  if (distance <=0) {
    return null
  };
  if ((distance === null) || (hillSize === null) || (kPoint === null)) {
    return null
  } else {
    return startPoints + (distance - kPoint)*meterPoint;
  }
};



module.exports = calculateDistancePoints;
