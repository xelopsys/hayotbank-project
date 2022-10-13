import React from "react";
import { Link } from "react-router-dom";
const mockdata = [
	{
		title: "Accountant",
		desc: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		title: "Accountant",
		desc: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		title: "Accountant",
		desc: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		title: "Accountant",
		desc: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		title: "Accountant",
		desc: "Lorem ipsum dolor sit amet consectetur.",
	},
	{
		title: "Accountant",
		desc: "Lorem ipsum dolor sit amet consectetur.",
	},
];

const Profile: React.FC = () => {
	return (
		<div className="w-full h-max flex justify-center items-center m-auto">
			<div className=" px-4 py-24 lg:p-auto sm:px-6 lg:px-28">
				<div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:items-center lg:gap-x-16">
					<div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
						<h2 className="text-3xl font-bold sm:text-4xl">
							If you are seeing this page, you are{" "}
							<span className="text-red-500"> logged in.</span>
						</h2>

						<p className="mt-4 text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
							aliquid sint distinctio iure ipsum cupiditate? Quis, odit
							assumenda? Deleniti quasi inventore, libero reiciendis minima
							aliquid tempora. Obcaecati, autem.
						</p>

						<Link
							className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
							to="/"
						>
							<span className="text-sm font-medium"> Get Started </span>

							<svg
								className="ml-3 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</Link>
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						{mockdata.map((item, index) => (
							<span
								key={index}
								className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
							>
								<span className="inline-block rounded-lg bg-gray-50 p-3">
									<svg
										className="h-6 w-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 14l9-5-9-5-9 5 9 5z"></path>
										<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
										></path>
									</svg>
								</span>

								<h6 className="mt-2 font-bold">{item.title}</h6>

								<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
									{item.desc}
								</p>
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
