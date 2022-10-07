import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks/hooks";
import { setIsAuthorized } from "./app/features/authSlice";
import Home from "./pages/Home";
import News from "./pages/News";
import New from "./pages/News/New";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Layout } from "./pages/Home/Layout";

function App() {
	const isAuthorized: boolean = useAppSelector(setIsAuthorized);
	const RequireAuth = ({ children }: { children: ReactElement }) => {
		return isAuthorized ? children : <Navigate to="/login" />;
	};
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="/" element={<Layout />}>
						<Route path="news" element={<News />}>
							{/* <Route path=":news"> */}
							<Route path=":new" element={<New />} />
						</Route>
						{/* </Route> */}

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
					{/* <Route path="*" element={<Error />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
