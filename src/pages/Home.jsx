import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container mt-5">

			<h1 className="mb-4" style={{ color: "#dc3e4e" }}>Characters</h1>
			<div className="d-flex flex-nowrap overflow-auto mb-4">
				{store.people.map(person => (
					<div className="card me-5" style={{ width: '400px', flex: "0 0 auto" }}>
						<img
							src="https://tdj.gg/uploads/images/liga_image.jpg"
							className="card-img-top"
							style={{ height: "200px", width: "400px" }} />
						<div className="card-body">
							<h5 className="card-title">{person.name}</h5>
							<p className="card-text mb-0">Gender: {person.gender}</p>
							<p className="card-text mb-0">Hair color: {person.hair_color}</p>
							<p className="card-text ">Eye color: {person.eye_color}</p>
							<div className="d-flex justify-content-between">
								<button className="btn btn-outline-primary">Learn more!</button>
								<button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
							</div>
						</div>
					</div>
				))}
			</div>

			<h1 className="mb-4" style={{ color: "#dc3e4e" }}>Planets</h1>
			<div className="d-flex flex-nowrap overflow-auto mb-4">
				{store.planets.map(planet => (
					<div className="card me-5" style={{ width: '400px', flex: "0 0 auto" }}>
						<img
							src="https://tdj.gg/uploads/images/liga_image.jpg"
							className="card-img-top"
							style={{ height: "200px", width: "400px" }} />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text mb-0">Gender: {planet.population}</p>
							<p className="card-text">Hair color: {planet.terrain}</p>
							<div className="d-flex justify-content-between">
								<button className="btn btn-outline-primary">Learn more!</button>
								<button className="btn btn-outline-warning"><i class="bi bi-heart"></i></button>
							</div>
						</div>
					</div>
				))}
			</div>

		</div>
	);
}; 