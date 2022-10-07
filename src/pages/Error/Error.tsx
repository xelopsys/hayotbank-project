import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="w-full h-[80%] flex justify-center items-center">
			<div className="relative rounded-lg border border-gray-200 p-8 text-center">
				<h2 className="text-2xl font-medium">There's nothing here...</h2>

				<p className="mt-4 text-sm text-gray-500">
					You may have mistyped the address or the page may have moved.
				</p>

				<Link
					to="/"
					className="mt-8 inline-flex items-center rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500"
				>
					Back to main page
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="ml-3 h-4 w-4 flex-shrink-0"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default Error;
