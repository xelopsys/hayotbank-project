import React from "react";
import { Outlet, Link } from "react-router-dom";
import { data, Data } from "../../components/data";

const News: React.FC = () => {
	return (
		<div className="w-full h-max gap-3 mt-20 flex flex-row flex-wrap justify-center items-center">
			{data.slice(1, 7).map((item: Data, index: number) => {
				return (
					<Link to={item.slug} key={index}>
						<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
							<img className="rounded-t-lg" src={item.img} alt="" />
							<div className="p-5">
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
									{item.title}
								</h5>

								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{item.description.slice(0, 80)}
								</p>
								<Link
									to={item.slug}
									className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
								>
									Read more
									<svg
										aria-hidden="true"
										className="ml-2 -mr-1 w-4 h-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
					</Link>
				);
			})}

			<Outlet />
		</div>
	);
};

export default News;
