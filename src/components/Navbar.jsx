import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const {dispatch, store} = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img
						src="https://e7.pngegg.com/pngimages/250/789/png-clipart-logo-lego-star-wars-blue-brand-star-wars-blue-text.png"
						style={{
							backgroundColor: "transparent",
							height: "50px",
							width: "auto"
						}} />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div class="dropdown">
							<a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos
							</a>

							<ul class="dropdown-menu">
								{store.favorites.map(favorite=>(
									<li><a class="dropdown-item" href="#">{favorite}</a></li>
								))}
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};