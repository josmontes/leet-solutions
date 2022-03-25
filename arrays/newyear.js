/**
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. 
Each person wears a sticker indicating their initial position in the queue from 1 to n. 
Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. 
One person can bribe at most two others.
Determine the minimum number of bribes that took place to get to a given queue order. 
Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
 */

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  let bribeCount = 0;
  //Loop through q check order and bribe count
  for (let i = 0; i < q.length; i++) {
    // Its + 1 since val = i + 1
    if (q[i] - (i + 1) > 2) return "Too chaotic";
    //Check from 2 to the front of initial position to current (for index 1 and 0 it would be 0) only 2 because more = chaos.
    for (let j = Math.max(0, q[i] - 2); j < i; j++)
      if (q[j] > q[i]) bribeCount++;
  }
  return bribeCount;
}
