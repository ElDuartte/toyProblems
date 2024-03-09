/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Example:
 *   [
 *     [ // one possible three round game outcome
 *       'rock',    // round 1
 *       'paper',   // round 2
 *       'scissors' // round 3
 *     ],
 *     [ // next possible three round game outcome
 *       'rock',    // round 1
 *       'paper',   // round 2
 *       'rock'     // round 3
 *     ],
 *   etc...
 *   ]
 *
 * Extra credit: Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
 */

/*
 * Key Concepts: recursion, head recursion, returning a copy of array
 */

const Computer = (times) => {
	const RPS = [];
	// const copyRPS = RPS.slice();
	const PCTurn = () => {
		//to create a random number DOWNWARDS to the nearest integer
		const oponent = Math.floor(Math.random() * (5 + 1)); //Math.random() * (Range + Multiplier)

		if (oponent === 1 || oponent === 2) {
			return RPS.push("Rock");
		} else if (oponent === 3 || oponent === 4) {
			return RPS.push("Paper");
		} else {
			return RPS.push("Scissors");
		}
	};
	for (let i = 1; i <= times; i++) PCTurn();
	console.log(RPS);
};

Computer(3);
