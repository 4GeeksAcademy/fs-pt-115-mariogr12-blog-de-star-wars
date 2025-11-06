import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { dispatch, store } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
						style={{
							backgroundColor: "transparent",
							height: "60px",
							width: "auto"
						}} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</a>

						<ul className="dropdown-menu">
							{store.favorites.map((favorite, index) => (
								<li key={index}>
									<div className="d-flex">
										<a className="dropdown-item">{favorite}</a>
										<button className="btn"><i className="bi bi-trash3"></i></button>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};