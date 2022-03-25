/**
Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. 
Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. 
Each contest is described by two integers, L[i] and T[i]:
L[i] is the amount of luck associated with a contest.
If Lena wins the contest, her luck balance will decrease by L[i]; if she loses it, her luck balance will increase by L[i].
T[i]denotes the contest's importance rating. It's equal to 1 if the contest is important, and it's equal to 0 if it's unimportant.
If Lena loses no more than k important contests, what is the maximum amount of luck she can have after 
competing in all the preliminary contests? This value may be negative.
 */

/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */
function luckBalance(k, contests) {
  let losing = [];
  let sum = 0;
  //Sort by points
  contests.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < contests.length; i++) {
    if (losing.length < k && contests[i][1] === 1) {
      losing.push(contests[i]);
      sum += contests[i][0];
    } else if (contests[i][1] === 1) {
      sum -= contests[i][0];
    } else sum += contests[i][0];
  }
  return sum;
}
