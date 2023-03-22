import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Layout } from "./styled-components/Layout.styled";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Layout>
				<Home />
			</Layout>
		</React.Fragment>
	);
};

export default App;
