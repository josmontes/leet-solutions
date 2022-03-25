/**
A group of friends want to buy a bouquet of flowers. 
The florist wants to maximize his number of new customers and the money he makes. 
To do this, he decides he'll multiply the price of each
flower by the number of that customer's previously purchased flowers plus 1. 
The first flower will be original price, (0 + 1) * original price, the next will be (1 + 1) * original price and so on.

Given the size of the group of friends, the number of flowers they want to purchase and the original prices of the flowers, 
determine the minimum cost to purchase all of the flowers. 
The number of flowers they want equals the length of the c array.
 */

function getMinimumCost(k, c) {
  let price = 0;
  let prevPurchases = 1;
  let friends = k;
  //Sort
  c.sort((a, b) => a - b);
  //Loop while there are flowers;
  for (let i = c.length - 1; i >= 0; i--) {
    //Total price += (prev purchases + 1 (since it starts at one) * cost of flower)
    price += prevPurchases * c[i];
    //friend goes out of line
    friends--;
    //If out of friends but there are still flowers
    if (friends === 0) {
      //Prev purchases goes up for all
      prevPurchases++;
      //All friends get in line again
      friends = k;
    }
  }
  return price;
}
