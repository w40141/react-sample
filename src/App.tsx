import { useState } from "react";

type squareType = string;

type SquareProps = {
	value: string | null;
	onSquareClick: () => void;
};

const Square: React.FC<SquareProps> = ({
	value,
	onSquareClick,
}): React.JSX.Element => {
	return (
		<button type="button" className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
};

type MessageProps = {
	squares: squareType[];
	xIsNext: boolean;
};

const Message: React.FC<MessageProps> = ({
	squares,
	xIsNext,
}): React.JSX.Element => {
	const winner = judgeWinner(squares);
	let status: string;
	if (winner) {
		status = `Winner: ${winner}`;
	} else {
		status = `Next player: ${xIsNext ? "X" : "O"}`;
	}
	return <div>{status}</div>;
};

type BoardProps = {
	xIsNext: boolean;
	squares: squareType[];
	onPlay: (squares: squareType[]) => void;
};

const Board: React.FC<BoardProps> = ({
	xIsNext,
	squares,
	onPlay,
}): React.JSX.Element => {
	const handleClick = (i: number) => {
		if (squares[i] || judgeWinner(squares)) {
			return;
		}
		const newSquares = squares.slice();
		if (xIsNext) {
			newSquares[i] = "X";
		} else {
			newSquares[i] = "O";
		}
		onPlay(newSquares);
	};

	return (
		<>
			<Message squares={squares} xIsNext={xIsNext} />
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
};

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill("")]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	const handlePlay = (nextSquares: string[]) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove: number) => {
		setCurrentMove(nextMove);
	};

	const moves = history.map((_, move) => {
		const description = move ? `Go to move #${move}` : "Go to game start";
		return (
			<li key={move}>
				<button type="button" onClick={() => jumpTo(move)}>
					{description}
				</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
};

function judgeWinner(squares: Array<string | null>) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default Game;
