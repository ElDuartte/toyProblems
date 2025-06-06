const { solveMine, game } = require("./mineSolver");

describe("Minesweeper Solver", () => {
  test("Basic board should solve correctly", () => {
    const map = `? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?`;

    const expected = `1 x 1 1 x 1
2 2 2 1 2 2
2 x 2 0 1 x
2 x 2 1 2 2
1 1 1 1 x 1
0 0 0 1 1 1`;

    game.read(expected); // preload expected result to simulate known mines
    expect(solveMine(map, 6)).toBe(expected);
  });

  test("Unsolvable board should return '?'", () => {
    const map = `0 ? ?
0 ? ?`;

    const expected = `0 1 x
0 1 1`;

    game.read(expected);
    expect(solveMine(map, 1)).toBe("?");
  });

  test("Another solvable board", () => {
    const map = `0 ? ?
0 ? ?`;

    const expected = `0 2 x
0 2 x`;

    game.read(expected);
    expect(solveMine(map, 2)).toBe(expected);
  });
});
