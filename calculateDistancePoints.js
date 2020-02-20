// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let startPoints, meterPoint = 0;
  switch(hillSize) {
    case 'normal':
      startPoints = 60;
      meterPoint = 2;
      break;
    case 'big':
      startPoints = 60;
      meterPoint = 1.8;
      break;
    case 'mamut':
      startPoints = 120;
      meterPoint = 1.2;
      break;
      default:
        return null;
  };
  if (startPoints === 0) {
    alert('Nie podano typu skoczni');
    return 0;
  };
  if ((distance <= 0) || (distance === null) || (hillSize === null) || (kPoint === null)) {
      return null 
  } else {
      return startPoints + (distance - kPoint)*meterPoint;
  }
};

module.exports = calculateDistancePoints;
