// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {
    let min = styleNotes[0], max = styleNotes[0], notesSum = styleNotes[0];
    for (let i=0; i<styleNotes.length; i=i+1) {
        if (styleNotes[i] === null) { 
            return null;
        };
        if ((styleNotes[i] < 0) || (styleNotes[i] > 20) || ((styleNotes[i]*2).isInteger === false)) { 
            return 0; 
        };
        if (styleNotes[i] < min) {
            min = styleNotes[i];
        };
        if (styleNotes[i] > max) {
                max = styleNotes[i];                // Znalezienie max i min w tablicy
        };
        notesSum = notesSum + styleNotes[i];
  }; 
  return notesSum - min - max;
};

module.exports = calculateStylePoints;