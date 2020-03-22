  module.exports = function reverse (n) {
    let transformToString = n.toString();
    let splitedN = transformToString.split('');
    let reversedN = splitedN.reverse();
    let joinedN = reversedN.join('');

    return parseFloat(joinedN);
      
  }
