import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../model/People";
import { LocalStorageType } from "../../model/LocalStorage";
import {
	getLocalStorage,
	setLocalStorage,
} from "../../utils/localStorage.utils";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
	name: "people",
	initialState: getLocalStorage(LocalStorageType.PEOPLE)
		? JSON.parse(getLocalStorage(LocalStorageType.PEOPLE) as string)
		: initialState,
	reducers: {
		addPeople: (state, action) => {
			setLocalStorage(LocalStorageType.PEOPLE, state);
			return action.payload;
		},
	},
});

export const { addPeople } = peopleSlice.actions;
