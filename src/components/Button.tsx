import { Button as YButton } from "@yamada-ui/react";
import { useAtom } from "jotai";
import { countAtom } from "../stores";

export const CountButton = () => {
	const [count, setCount] = useAtom(countAtom);

	const handleClick = () => {
		setCount(count + 1);
	};

	return <YButton onClick={handleClick}>Count: {count}</YButton>;
};

export const ResetButton = () => {
	const [_, setCount] = useAtom(countAtom);
	const handleClick = () => {
		setCount(0);
	};
	return <YButton onClick={handleClick}>Reset</YButton>;
};

export const Counter = () => {
	const [count, setCount] = useAtom(countAtom);

	const handleClick = () => {
		setCount(count + 1);
	};

	const handleReset = () => {
		setCount(0);
	};

	return (
		<>
			<div>
				<YButton onClick={handleClick}>Count: {count}</YButton>
				<YButton onClick={handleReset}>Reset</YButton>
			</div>
		</>
	);
};
