// DESCRIPTION
// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Example:
// parse("iiisdoso") => [ 8, 64 ]

// SOLUTION
function parse( data )
{
  const result = [];
  let value = 0;
  
  for (let i of data) {
    switch (i) {
        case 'i':
        value++;
        break;
        
        case 'd':
        value--;
        break;
        
        case 's':
        value *= value ;
        break;
        
        case 'o':
        result.push(value);
        break;
    }
  }
  return result;
}