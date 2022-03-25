/**
 * LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
 * LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
 */

function lcs(str1, str2) {
  let x = str1.length,
    y = str2.length;
  let solMatrix = Array(x + 1).fill(Array(y + 1));
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      if (i === 0 || j === 0) solMatrix[i][j] = 0;
      else if (str1[i] === str2[j])
        solMatrix[i][j] = solMatrix[i - 1][j - 1] + 1;
      else solMatrix[i][j] = Math.max(solMatrix[i - 1][j], solMatrix[i][j - 1]);
    }
  }
  console.log(solMatrix);
  return solMatrix[x][y];
}

console.log(lcs("ABCDGH", "AEDFHR"));
