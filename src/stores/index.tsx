import { Provider, atom, createStore } from "jotai";
import type React from "react";

export const countAtom = atom(0);

export const myStore = createStore();

myStore.set(countAtom, 0);

interface Props {
	children: React.ReactNode;
}

const MyStore: React.FC<Props> = ({ children }) => {
	return <Provider store={myStore}>{children}</Provider>;
};

export default MyStore;
