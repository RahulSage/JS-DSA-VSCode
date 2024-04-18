function getMax(operations) {
  // Write your code here
  var arrStack = [];
  var maxArr = [];
  for (let opr of operations) {
    if (opr.charAt(0) == "1") {
      arrStack.push(Number(opr.substring(2)));
    } else if (opr.charAt(0) == "2") {
      arrStack.pop();
    } else if (opr.charAt(0) == "3") {
      maxArr.push(maxElememnt(arrStack));
    }
  }
  return maxArr;
}

function maxElememnt(arrStack) {
  let max = arrStack[0];
  for (let i of arrStack) {
    if (max < i) {
      max = i;
    }
  }
  return max;
}

getMax(["1 97", "2", "1 20", "2", "1 26", "1 20", "2", "3", "1 91", "3"]);
