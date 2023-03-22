import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Person } from "../../../model/People";
import { removeFavorite } from "../../../redux/slides/Favorites";

const FavoriteTable: React.FC = () => {
	const pageSize = 5;
	const dispatch = useDispatch();
	const stateFavorites = useSelector((store: AppStore) => store.favorites);

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person));
	};

	const colums = [
		{
			field: "actions",
			type: "actions",
			sortable: false,
			headerName: "",
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{
						<IconButton
							color="secondary"
							aria-label="favorites"
							component="label"
							onClick={() => handleClick(params.row)}>
							<Delete />
						</IconButton>
					}
				</>
			),
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "category",
			headerName: "Categories",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "company",
			headerName: "Company",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "levelOfHappiness",
			headerName: "Level of happiness",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
	];
	return (
		<DataGrid
			rows={stateFavorites}
			columns={colums}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			getRowId={(row: any) => row.id}
		/>
	);
};

export default FavoriteTable;
