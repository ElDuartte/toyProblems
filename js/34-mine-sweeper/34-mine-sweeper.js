// Example stub
function solveMine(map, param) {
  // Replace with your real logic
  const rows = map.split("\n").map((row) => row.split(" "));
  console.log(rows);
  return "";
}

const game = {
  read: (result) => {
    // Maybe log it or set it in a variable
    console.log("Reading result:", result);
  },
};

module.exports = { solveMine, game };
