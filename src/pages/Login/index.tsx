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
		<div className="mx-auto w-full h-full flex justify-center items-center px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto w-96 ">
				<form
					onSubmit={handleSubmit}
					className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
				>
					<p className="text-lg font-medium">Sign in to your account</p>

					<div>
						<label htmlFor="username" className="text-sm font-medium">
							Username
						</label>

						<div className="relative mt-1">
							<input
								type="text"
								id="username"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter your name"
								ref={name}
							/>

							<span className="absolute inset-y-0 right-4 inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>

					<div>
						<label htmlFor="password" className="text-sm font-medium">
							Password
						</label>

						<div className="relative mt-1">
							<input
								type="password"
								id="password"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter password"
								ref={password}
							/>

							<span className="absolute inset-y-0 right-4 inline-flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							</span>
						</div>
					</div>
					{error && <p className="my-3 text-red-400">{error}</p>}
					<button
						type="submit"
						className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
					>
						Sign in
					</button>

					<p className="text-center text-sm text-gray-500">
						<Link to="/">Back to Home</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
