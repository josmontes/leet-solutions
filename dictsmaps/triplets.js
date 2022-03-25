/**
You are given an array and you need to find number of tripets of indices (i, j, k) 
such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.
 */

function countTriplets(arr, r) {
  let count = 0;
  //Could be done with objects too
  var dict1 = new Map();
  var dict2 = new Map();
  arr.forEach((i) => {
    if (dict2.get(i)) count += dict2.get(i);
    if (dict1.get(i))
      dict2.set(
        i * r,
        dict2.get(i * r) ? dict2.get(i * r) + dict1.get(i) : dict1.get(i)
      );
    dict1.set(i * r, dict1.get(i * r) ? dict1.get(i * r) + 1 : 1);
  });
  return count;
}
