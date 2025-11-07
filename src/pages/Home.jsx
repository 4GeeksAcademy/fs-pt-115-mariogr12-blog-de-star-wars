import { Await, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { getCharacters } from "../services/servicesApi";
import { getPlanets } from "../services/servicesApi";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacters(dispatch)
		// console.log(store.characters);
		getPlanets(dispatch)
	}, [])

	if (!store.characters.length || !store.planets.length) {
		return <h1 className="text-center mt-5">Loading...</h1>;
	}

	return (
		<div className="container mt-5">

			<h1 className="mb-4" style={{ color: "#dc3e4e" }}>Characters</h1>
			<div className="d-flex flex-nowrap overflow-auto mb-4">
				{store.characters.map((person, index) => (
					<div className="card me-5" key={index} style={{ width: '400px', flex: "0 0 auto" }}>
						<img
							src={store.characterImages[person.name] || "https://www.verance.com/app/uploads/2017/01/400x200.png"}
							className="card-img-top"
							style={{ height: "200px", width: "100%", objectFit: "cover" }} />
						<div className="card-body">
							<h5 className="card-title mb-4">{person.name}</h5>
							<div className="d-flex justify-content-between">
								<Link to={`character/details/${person.uid}`}>
									<button
										className="btn btn-outline-primary"
										onClick={() => {
											dispatch({
												type: "set_actual_character",
												payload: {
													properties: {
														name: person.name || "",
														description: person.description || "",
														gender: person.gender || "",
														eye_color: person.eye_color || "",
														hair_color: person.hair_color || "",
														height: person.height || "",
														mass: person.mass || "",
														skin_color: person.skin_color || "",
														birth_year: person.birth_year || ""
													}
												}
											});
										}}
									>Learn more!</button>

								</Link>
								<button className="btn btn-outline-warning"><i className="bi bi-heart"></i></button>
							</div>
						</div>
					</div>
				))}
			</div>

			<h1 className="mb-4" style={{ color: "#dc3e4e" }}>Planets</h1>
			<div className="d-flex flex-nowrap overflow-auto mb-4">
				{store.planets.map((planet, index) => (
					<div className="card me-5" key={index} style={{ width: '400px', flex: "0 0 auto" }}>
						<img
							src={store.planetImages[planet.name] || "https://www.verance.com/app/uploads/2017/01/400x200.png"}
							className="card-img-top"
							style={{ height: "200px", width: "100%", objectFit: "cover" }} />
						<div className="card-body">
							<h5 className="card-title mb-4">{planet.name}</h5>
							<div className="d-flex justify-content-between">
								<Link to={`planet/details/${planet.uid}`}>
									<button className="btn btn-outline-primary">Learn more!</button>
								</Link>
								<button
									className="btn btn-outline-warning"
									onClick={() => {
										dispatch({
											type: "set_actual_planet",
											payload: {
												properties: {
													name: planet.result.properties.name || "",
													gravity: planet.result.properties.gravity || "",
													diameter: planet.result.properties.diameter || "",
													climate: planet.result.properties.climate || "",
													orbital_period: planet.result.properties.orbital_period || "",
													population: planet.result.properties.population || "",
													rotation_period: planet.result.properties.rotation_period || "",
													surface_water: planet.result.properties.surface_water || "",
													terrain: planet.result.properties.terrain || ""
												}
											}
										})
									}}><i className="bi bi-heart"></i></button>
							</div>
						</div>
					</div>
				))}
			</div>

		</div>
	);
}; 