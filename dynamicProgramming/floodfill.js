/**
Input:
screen[M][N] = {{1, 1, 1, 1, 1, 1, 1, 1},
               {1, 1, 1, 1, 1, 1, 0, 0},
               {1, 0, 0, 1, 1, 0, 1, 1},
               {1, 2, 2, 2, 2, 0, 1, 0},
               {1, 1, 1, 2, 2, 0, 1, 0},
               {1, 1, 1, 2, 2, 2, 2, 0},
               {1, 1, 1, 1, 1, 2, 1, 1},
               {1, 1, 1, 1, 1, 2, 2, 1},
               };
    x = 4, y = 4, newColor = 3
The values in the given 2D screen
  indicate colors of the pixels.
x and y are coordinates of the brush,
   newColor is the color that
should replace the previous color on 
   screen[x][y] and all surrounding
pixels with same color.

Output:
Screen should be changed to following.
screen[M][N] = {{1, 1, 1, 1, 1, 1, 1, 1},
               {1, 1, 1, 1, 1, 1, 0, 0},
               {1, 0, 0, 1, 1, 0, 1, 1},
               {1, 3, 3, 3, 3, 0, 1, 0},
               {1, 1, 1, 3, 3, 0, 1, 0},
               {1, 1, 1, 3, 3, 3, 3, 0},
               {1, 1, 1, 1, 1, 3, 1, 1},
               {1, 1, 1, 1, 1, 3, 3, 1},
               };
 */

//Example
let screen = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
  ],
  x = 4,
  y = 4,
  newColor = 3,
  initialColor = screen[x][y];

//Recursive sol
function floodFillRec(screen, x, y, newColor, prevColor) {
  //Base cases
  //End of screen
  if (!screen[x] || !screen[x][y]) return;
  //curr !== initialNum
  if (screen[x][y] !== prevColor) return;
  //Recursive cases
  //curr === initialNum
  screen[x][y] = newColor;
  //Repeat for up, down, left and right
  floodFillRec(screen, x - 1, y, newColor, prevColor);
  floodFillRec(screen, x, y - 1, newColor, prevColor);
  floodFillRec(screen, x + 1, y, newColor, prevColor);
  floodFillRec(screen, x, y + 1, newColor, prevColor);
}

floodFillRec(screen, x, y, newColor, initialColor);

console.log(screen);
