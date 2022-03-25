/**
Given 3 arrays a, b, c of different sizes, 
find the number of distinct triplets (p, q, r) where p is from a, q from b and r from c, 
satisfying the criteria: p <= q && q >= r.
 */

// Complete the triplets function below.
function triplets(a, b, c) {
  //Sort in desc and set arrays
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  c.sort((a, b) => a - b);
  //dicts for each arr
  let ha = {};
  let hb = {};
  let hc = {};
  let triCount = 0;
  let ai = 0, bi = 0, ci = 0, aCount = 0, cCount = 0;
  //same as a for loop
  while (bi < b.length) {
      //This looks like a recursive structure right?
      if (!hb[b[bi]]) {
          while (ai < a.length && a[ai] <= b[bi]) {
              if (!ha[a[ai]]) {
                  ha[a[ai]] = 1;
                  aCount++;
              }
              ai++;
          }
          while (ci < c.length && c[ci] <= b[bi]) {
              if (!hc[c[ci]]) {
                  hc[c[ci]] = 1;
                  cCount++;
              }
              ci++;
          }
          hb[b[bi]] = 1;
          triCount += aCount * cCount;
      }
      bi++;
  }
  return triCount;
}