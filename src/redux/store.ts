import { configureStore } from "@reduxjs/toolkit";
import { Person } from "../model/People";
import { favoritesSlice } from "./slides/Favorites";
import { peopleSlice } from "./slides/People";

export interface AppStore {
	people: Person[];
	favorites: Person[];
}

export default configureStore<AppStore>({
	reducer: {
		people: peopleSlice.reducer,
		favorites: favoritesSlice.reducer,
	},
});
