// DESCRIPTION

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

// SOLUTION:
function findShort(s) {
    const wordLength = s.split(' ').map(word => word.length);

    return Math.min(...wordLength);
}
