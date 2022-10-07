import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks/hooks";
import { setIsAuthorized } from "./app/features/authSlice";
import Home from "./pages/Home";
import News from "./pages/News";
import Login from "./pages/Login";
import New from "./pages/News/New";
import Profile from "./pages/Profile";
import { Layout } from "./pages/Layout/Layout";
import Calculator from "./pages/Exchange/Exchange";
import Error from "./pages/Error/Error";
function App() {
	const isAuthorized: boolean = useAppSelector(setIsAuthorized);
	const RequireAuth = ({ children }: { children: ReactElement }) => {
		return isAuthorized ? children : <Navigate to="/login" />;
	};
	return (
		<div className="w-[100vw] h-[100vh]">
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="/" element={<Layout />}>
						<Route path="news" element={<News />} />
						<Route path="news/:new" element={<New />} />
						<Route path="exchange-rate" element={<Calculator />} />

						{/* And profile page will be seen only after successfully authentication,
						 otherwise you will be asked to authenticate in order to access*/}
						<Route
							path="profile"
							element={
								<RequireAuth>
									<Profile />
								</RequireAuth>
							}
						/>
						<Route index element={<Home />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
