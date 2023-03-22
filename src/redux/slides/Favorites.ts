import { createSlice, current } from "@reduxjs/toolkit";
import { Person } from "../../model/People";
import { LocalStorageType } from "../../model/LocalStorage";
import {
	getLocalStorage,
	setLocalStorage,
} from "../../utils/localStorage.utils";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
	name: "favorites",
	initialState: getLocalStorage(LocalStorageType.FAVORITE)
		? JSON.parse(getLocalStorage(LocalStorageType.FAVORITE) as string)
		: initialState,
	reducers: {
		addFavorite: (state, action) => {
			setLocalStorage(LocalStorageType.FAVORITE, action.payload);
			return action.payload;
		},
		removeFavorite: (state, action) => {
			const filteredState = current(state).filter(
				(p: Person) => p.id !== action.payload.id
			);
			setLocalStorage(LocalStorageType.FAVORITE, filteredState);
			return filteredState;
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
