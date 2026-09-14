var numIslands = function (grid) {
  if (!grid || grid.length == 0) {
    return 0;
  }

  let counter = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  const sink = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    sink(r + 1, c); // down
    sink(r - 1, c); // top
    sink(r, c - 1); // left
    sink(r, c + 1); // right
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        counter++;
        sink(r, c);
      }
    }
  }

  return counter;
};

const grid1 = (grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);

console.log("grid1", numIslands(grid1));

const grid2 = (grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);

console.log("grid2", numIslands(grid2));
