import { atom, createStore } from "jotai";

export const countAtom = atom(0);

export const myStore = createStore();

myStore.set(countAtom, 0);
