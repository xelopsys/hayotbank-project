import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export const Layout = () => {
	return (
		<div className="w-full h-full relative flex flex-col justify-start items-center">
			<Navbar />

			<span className="absolute left-[8.5%] md:left-[9%] lg:left-[9.5%] xl:left-[9%] top-24">
				<Breadcrumbs />
			</span>
			<Outlet />
		</div>
	);
};
