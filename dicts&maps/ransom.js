/**
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. 
He found a magazine and wants to know if he can cut out whole words from it and use them to 
create an untraceable replica of his ransom note. 
The words in his note are case-sensitive and he must use only whole words available in the magazine. 
He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, 
print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
 */

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */
function checkMagazine(magazine, note) {
  let magMap = {};
  for (const word of magazine) {
    if (!!magMap[word]) magMap[word]++;
    else magMap[word] = 1;
  }
  for (const word of note) {
    if (magMap[word]) magMap[word]--;
    else return "No";
  }
  return "Yes";
}
