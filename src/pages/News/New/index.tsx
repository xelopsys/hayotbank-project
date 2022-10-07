import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data, data } from "../../../components/data";
import { Link } from "react-router-dom";
const New: React.FC = () => {
	const [post, setPost] = useState<Data>();
	const { new: new_ } = useParams();

	useEffect(() => {
		setPost(data.find((post) => post.slug === new_));
	}, [new_, post]);
	return (
		<div>
			<div className="w-full overflow-y-auto scrollbar-hide h-full flex flex-col justify-start items-center box-border">
				<div className="text-black w-11/12 md:w-[60%] lg:w-[55%] h-max flex flex-col justify-start items-center mt-16 md:mt-[13%] lg:mt-[7%] mb-10">
					<h1 className="w-full text-lg md:text-3xl lg:text-4xl text-left mt-3 lg:mt-16 break-words">
						{post?.title}
					</h1>
					<p className="w-full text-justify text-sm md:text-md lg:text-lg mt-5 opacity-50 break-words ">
						{post?.createdAt.toUTCString()}
					</p>
					<p className="w-full h-auto flex mb-5 flex-row flex-wrap justify-start items-center text-left text-sm md:text-md lg:text-lg mt-5 whitespace-pre-wrap">
						<span className="opacity-50">{post?.description}</span>
					</p>

					<img
						src={`${post?.img}`}
						className="w-full h-56 object-cover rounded-md"
						alt="img"
					/>

					<p className="my-4 w-full text-left text-sm md:text-md lg:text-lg break-words">
						<span className="opacity-50 ">Go back to </span>
						<Link to="/news">news</Link>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default New;
