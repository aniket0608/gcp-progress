import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PreLoader from "./components/PreLoader";

export default function Layout() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const delay = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		};
		delay();
	}, []);
	return isLoading ? (
		<PreLoader />
	) : (
		<body>
			<NavBar />
			<main className="pt-20">
				<Outlet />
			</main>
			<Footer />
		</body>
	);
}
