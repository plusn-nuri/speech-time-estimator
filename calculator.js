'use strict';

const SpeedNames = ['slow', 'medium', 'fast'];


function getTimingStrings(wordCount, speeds) {
    const result = SpeedNames.map(label => `${label}: ${Math.ceil(wordCount / speeds[label])}`);
    return result;
}

function countWords(sourceText) {
    var result = (sourceText || "").split(/\b\W+\b/).length;
    return result;
}
 

module.exports = { SpeedNames, countWords, getTimingStrings };
