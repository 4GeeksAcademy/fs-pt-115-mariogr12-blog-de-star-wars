import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getVehicleDetails } from "../services/servicesApi"

export const VehicleDetails = () => {

    const { dispatch, store } = useGlobalReducer()
    const { id } = useParams()
    useEffect(() => {
        getVehicleDetails(id, dispatch)

    }, [])

    if (!store.actualVehicle?.properties?.cargo_capacity) {
        return <h1 className="text-center mt-5">Loading...</h1>;
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <img src={store.vehicleImages[store.actualVehicle.properties.name]} style={{ width: "800px", height: "auto" }} />
                <div className="ms-4">
                    <h1 className="text-start">{store.actualVehicle.properties.name}</h1>
                    <p className="text-start">{store.actualVehicle.description}</p>
                </div>
            </div>
            <div className="d-flex mb-5 justify-content-center">


                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Cargo capacity</h4>
                        <p className="text-start">{store.actualVehicle.properties.cargo_capacity}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Cost</h4>
                        <p className="text-start">{store.actualVehicle.properties.cost_in_credits} galactic credits</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Length</h4>
                        <p className="text-start">{store.actualVehicle.properties.length}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Manufacturer</h4>
                        <p className="text-start">{store.actualVehicle.properties.manufacturer}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="px-4">
                        <h4 className="text-start">Max atmosphering speed</h4>
                        <p className="text-start">{store.actualVehicle.properties.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}