
/*
Function to appropriately pad a given table of numbers. The amount of
padding after a number for each number is based off of the length (number of digits) of the
largest number (making the assumption that the largest number is at the end of
the last array) and the length of the current number. 
We also need to pad at the beginning which is based off of the size of the largest number in the first
column.

First we need to find the size of the table so that we can find the values
we need for the calculations.
*/

function format(table) {
  var length = table.length; 
  var biggestNumber = table[length - 1][length - 1];
  var biggestFirstNumber = table[length - 1][0];
  var biggestNumberLength = getIntegerLength(biggestNumber);
  var biggestFirstNumberLength = getIntegerLength(biggestFirstNumber);

  const tableText = table.map(function(row) {
    var rowString = "";   
    var firstNumberLength = getIntegerLength(row[0]);
    var firstPad = biggestFirstNumberLength - firstNumberLength;

    if(biggestFirstNumberLength > 1 || biggestNumberLength > 1) rowString += " ";   //this wasnt specified but appears to be a rule


    for(var i = 0; i < firstPad; i++) {   //the spaces before each row
      rowString += " ";
    }

    for(var col = 0; col < length - 1; col++) { 
      var nextLen;
      nextLen = getIntegerLength(row[col + 1]);
      var paddingAmount = biggestNumberLength + 1 - nextLen;   //the formula for how much padding we need, derived from looking at sample output

      rowString += row[col].toString();  //add the actual number

      for(var count = 0; count < paddingAmount; count++) {  //pad the correct amount
        rowString +=  " ";
      }      
    }

    rowString += row[length - 1]; //add the last number at the end, to avoid getting a null pointer in the loop

    return rowString;
  });

  return "\n" + tableText.join("\n") + "\n";
}

/*
Find the number of digits in a given int, could alternatively 
do log10(n) + 1 for speed but I was getting some odd garbage collector
errors.
*/
function getIntegerLength(n) {
    return n.toString().length;
}

module.exports = { format };
