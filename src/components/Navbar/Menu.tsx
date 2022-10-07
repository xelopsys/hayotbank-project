import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../app/features/authSlice";
import { pages, Page } from "./routes";

interface Props {
	isAuthorized: Boolean;
}
export const Menu: React.FC<Props> = ({ isAuthorized }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logout());
	};
	return (
		<div className="lg:hidden md:hidden inline-block order-3 transition delay-300 linear z-30">
			{!isMenuOpen ? (
				<button
					title="Open Menu"
					className="p-2 -mr-1 transition duration-500 rounded focus:outline-none focus:shadow-outline"
					onClick={() => setIsMenuOpen(true)}
				>
					<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
						/>
						<path
							fill="currentColor"
							d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
						/>
						<path
							fill="currentColor"
							d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
						/>
					</svg>
				</button>
			) : (
				<button
					aria-label="Close Menu"
					title="Close Menu"
					className="p-2 -mr-1 transition duration-300 rounded hover:bg-gray-200 focus:bg-gray-200"
					onClick={() => setIsMenuOpen(false)}
				>
					<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
						/>
					</svg>
				</button>
			)}
			{isMenuOpen && (
				<div className="absolute top-14 left-0 w-full">
					<div className="pl-[8%] py-4 bg-white border rounded shadow-sm">
						<nav>
							<ul className="space-y-4">
								{pages.map((page: Page) => (
									<li key={page.id}>
										<NavLink
											key={page.id}
											to={page.path}
											className={({ isPending, isActive }) =>
												isActive && page.path.length > 1
													? `text-[#1E6DEB]`
													: `inherit`
											}
											onClick={() => setIsMenuOpen(false)}
										>
											<p
												className={`block hover:bg-gray-50 p-2 md:hover:bg-transparent hover:text-[#1E6DEB] `}
											>
												{page.name}
											</p>
										</NavLink>
									</li>
								))}
							</ul>
							<div className="flex flex-row items-center justify-start mt-3">
								{!isAuthorized ? (
									<React.Fragment>
										<NavLink
											to="/login"
											className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none "
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
						</nav>
					</div>
				</div>
			)}
		</div>
	);
};
