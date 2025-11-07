import { useEffect } from "react"
import { getPlanetDetails } from "../services/servicesApi"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const PlanetDetails = () => {

    const { dispatch, store } = useGlobalReducer()
    const { id } = useParams()
    useEffect(() => {
        getPlanetDetails(id, dispatch)
    }, [])

    if (!store.actualPlanet?.properties?.name) {
        return <h1 className="text-center mt-5">Loading...</h1>;
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <img src={store.planetImages[store.actualPlanet.properties.name]} style={{ width: "600px", heigh: "auto" }} />
                <div className="ms-4">
                    <h1 className="text-start">{store.actualPlanet.properties.name}</h1>
                    <p className="text-start">{store.actualPlanet.description}</p>
                </div>
            </div>
            <div className="d-flex mb-5 justify-content-center">


                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Climate</h4>
                        <p className="text-start">{store.actualPlanet.properties.climate}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Diameter</h4>
                        <p className="text-start">{store.actualPlanet.properties.diameter}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Gravity</h4>
                        <p className="text-start">{store.actualPlanet.properties.gravity}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Orbital period</h4>
                        <p className="text-start">{store.actualPlanet.properties.orbital_period}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Population</h4>
                        <p className="text-start">{store.actualPlanet.properties.population}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Rotation period</h4>
                        <p className="text-start">{store.actualPlanet.properties.rotation_period}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Surface water</h4>
                        <p className="text-start">{store.actualPlanet.properties.surface_water}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="px-4">
                        <h4 className="text-start">Terrain</h4>
                        <p className="text-start">{store.actualPlanet.properties.terrain}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}