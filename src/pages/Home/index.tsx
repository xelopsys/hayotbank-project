import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
	return (
		<div className="w-full h-[80%] flex flex-col justify-center items-center m-auto">
			<section className="text-black">
				<div className="mx-auto max-w-xl px-4 py-32 lg:flex lg:items-center">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
							Hayotbank, freedom is what we need.
						</h1>

						<p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
							illo tenetur fuga ducimus numquam ea!
						</p>

						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link
								className="block w-full rounded border bg-purple-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
								to="/exchange-rate"
							>
								Get Started
							</Link>

							<Link
								className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
								to="/news"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
