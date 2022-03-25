/**
Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream. 
On any given day, the parlor offers a line of flavors. Each flavor has a cost associated with it.

Given the value of money and the cost of each flavor for t trips to the Ice Cream Parlor, 
help Sunny and Johnny choose two distinct flavors such that they spend their entire pool of money during each visit. 
ID numbers are the 1- based index number associated with a cost. 
For each trip to the parlor, print the ID numbers for the two types of ice cream that Sunny and Johnny 
purchase as two space-separated integers on a new line. 
You must print the smaller ID first and the larger ID second.
 */

/*
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */
function whatFlavors(cost, money) {
  let map = new Map();
  for (let i = 0; i < cost.length - 1; i++) {
    let target = money - cost[i];
    //Use + 1 since icecreams IDs start with 1
    if (map.has(target)) return `${map.get(target)} ${i + 1}`;
    map.set(cost[i], i + 1);
  }
}
