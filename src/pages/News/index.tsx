import React from "react";
import { Outlet } from "react-router-dom";

const News: React.FC = () => {
	return (
		<div>
			Newws
			<Outlet />
		</div>
	);
};

export default News;
