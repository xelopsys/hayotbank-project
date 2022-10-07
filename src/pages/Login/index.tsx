import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { setIsAuthorized, login } from "../../app/features/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { SetCookie, GetCookie } from "../../components/Cookie/Cookies";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const name = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const [error, setError] = useState<string>("");
	const dispatch = useAppDispatch();
	const Authorized = useAppSelector(setIsAuthorized);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");
		if (name.current?.value !== "Admin") {
			setError("Invalid username");
		} else if (password.current?.value !== "12345") {
			setError("Invalid password");
		} else if (
			name.current!.value === "Admin" &&
			password.current!.value === "12345"
		) {
			SetCookie("isAuthorized", true, 1);
			const isAuthorized = GetCookie("isAuthorized");
			name.current!.value = "";
			password.current!.value = "";
			dispatch(login(isAuthorized === "true"));
			navigate("/profile");
		}
	};

	useEffect(() => {
		if (Authorized) {
			navigate("/profile");
		}
	}, [Authorized, navigate]);

	return (
		<div className="w-full h-[100vh] flex flex-col justify-center items-center">
			<h1 className="text-4xl">Sign in</h1>
			<form
				onSubmit={handleSubmit}
				className="w-[70vw] md:w-[30vw] lg:w-[30vw] xl:w-[20vw] 2xl:w-[20vw]"
			>
				<label
					htmlFor="input-group-1"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					Your Email
				</label>
				<div className="relative mb-6">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 "
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</div>
					<input
						type="text"
						id="input-group-1"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
						placeholder="username"
						ref={name}
						required
					/>
				</div>
				<label
					htmlFor="website-admin"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Password
				</label>
				<div className="flex">
					<input
						type="password"
						id="website-admin"
						className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
						placeholder="********"
						ref={password}
						required
					/>
				</div>
				{error && <p className="my-3 text-red-400">{error}</p>}

				<button
					type="submit"
					className=" mt-8   rounded-lg bg-blue-500 hover:bg-blue-400 border text-white block flex-1 min-w-0 w-full text-md p-2.5  "
				>
					Sign in
				</button>
				<div className="w-full h-auto flex flex-row justify-between items-center">
					<Link to="/">
						<p className="text-left text-sm w-full my-4 hover:text-blue-500">
							Home page {"->"}
						</p>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
