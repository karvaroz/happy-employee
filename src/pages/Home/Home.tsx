import React, { useEffect } from "react";

import Table from "./components/Table";
import { useDispatch } from "react-redux";
import { addPeople } from "../../redux/slides/People";
import { People } from "../../data/PeopleData";

const Home: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPeople(People));
	}, []);

	return <Table />;
};

export default Home;
