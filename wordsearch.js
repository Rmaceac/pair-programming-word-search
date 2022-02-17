const wordSearch = (letters, word) => {
    // if provided array is empty, return false
    if (letters.length === 0) {
        return false;
    }
    // join the rows of letters in provided array into full words
    const horizontalJoin = letters.map(ls => ls.join(''));
    // transpose the provided array and join the letter COLUMNS into full words
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    // loop through the array horizontally (rows)
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    // loop through the array vertically (columns)
    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

// function that transposes an array so that it can be scanned vertically.
const transpose = function(matrix) {
    return matrix[0].map((a, i) => matrix.map(b => b[i]));
  };

module.exports = wordSearch;