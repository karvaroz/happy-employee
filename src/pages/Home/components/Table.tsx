import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams, GridColDef } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Person } from "../../../model/People";
import { addFavorite } from "../../../redux/slides/Favorites";
import { AppStore } from "../../../redux/store";

const Table: React.FC = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const pageSize = 5;
	const dispatch = useDispatch();
	const statePeople = useSelector((store: AppStore) => store.people);
	const favoritePeople = useSelector((store: AppStore) => store.favorites);

	const findPerson = (person: Person) =>
		!!favoritePeople.find((p) => p.id === person.id);
	const filterPerson = (person: Person) =>
		favoritePeople.filter((p) => p.id !== person.id);

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person)
			? filterPerson(person)
			: [...selectedPeople, person];
		dispatch(addFavorite(filteredPeople));
		setSelectedPeople(filteredPeople);
	};

	const columns: GridColDef[] = [
		{
			field: "actions",
			type: "actions",
			sortable: false,
			headerName: "❤",
			renderCell: (params: GridRenderCellParams) => (
				<>
					{
						<Checkbox
							size="small"
							checked={findPerson(params.row)}
							onChange={() => handleChange(params.row)}
						/>
					}
				</>
			),
		},
		{
			field: "id",
			headerName: "ID",
			maxWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "name",
			headerName: "Name",
			minWidth: 150,
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "category",
			headerName: "Category",
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
			headerName: "Happiness Level",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
	];

	useEffect(() => {
		setSelectedPeople(favoritePeople);
	}, [favoritePeople]);

	return (
		<DataGrid
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			rows={statePeople}
			columns={columns}
			initialState={{
				pagination: {
					paginationModel: {
						pageSize,
					},
				},
			}}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default Table;
