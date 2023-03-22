import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux/es/exports";
import { AppStore } from "../../redux/store";
import CustomDialog, { dialogOpenSubject$ } from "../Dialog/CustomDialog";
import FavoriteTable from "./FavoriteTable/FavoriteTable";

const Navbar: React.FC = () => {
	const stateFavorites = useSelector((store: AppStore) => store.favorites);

	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	};
	return (
		<React.Fragment>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}>
						Happy Employee
					</Typography>
					<IconButton
						aria-label="favorites"
						component="label"
						onClick={handleClick}>
						<FavoriteIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default Navbar;
