import React from "react";
// import Logo from "./Logo/Logo";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../../app/features/authSlice";
import { pages, Page } from "./routes";
import { Menu } from "./Menu";
import { useAppSelector } from "../../app/hooks/hooks";
import { setIsAuthorized } from "../../app/features/authSlice";
import { DeleteCookie } from "../Cookie/Cookies";
const Navbar: React.FC = () => {
	const isAuthorized: boolean = useAppSelector(setIsAuthorized);

	const dispatch = useDispatch();

	const handleLogOut = () => {
		DeleteCookie("isAuthorized");
		dispatch(logout());
	};
	return (
		<nav className="bg-white border border-b-gray-200 shadow-sm px-2 md:px-4 py-2.5 w-full h-auto flex flex-row justify-between md:justify-center lg:justify-center items-center">
			<div className="flex flex-nowrap flex-row justify-between lg:w-[80vw] md:w-[80vw] items-center mx-auto ml-[8%]">
				<Link to="/">
					{/* <Logo /> */}
					HAYOTBANK
				</Link>
				<div className="lg:flex md:flex items-center hidden  md:order-2">
					{!isAuthorized ? (
						<React.Fragment>
							<NavLink
								to="/login"
								className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
							>
								Login
							</NavLink>
						</React.Fragment>
					) : (
						<button
							className="text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
							onClick={handleLogOut}
						>
							Log out
						</button>
					)}
				</div>
				<div className="hidden justify-between items-center w-auto text-sm md:flex md:w-auto md:order-1">
					<ul className=" flex-col space-x-8 flex mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-black">
						{pages.map((page: Page) => (
							<li key={page.id}>
								<NavLink
									key={page.id}
									to={page.path}
									className={({ isActive }) =>
										isActive && page.path.length > 1
											? `text-red-600`
											: `inherit`
									}
								>
									<p
										className={`block hover:bg-gray-50 md:hover:bg-transparent hover:text-red-900 `}
									>
										{page.name}
									</p>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Menu isAuthorized={isAuthorized} />
		</nav>
	);
};

export default Navbar;
