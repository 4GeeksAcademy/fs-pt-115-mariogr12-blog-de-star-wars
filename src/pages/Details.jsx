import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCharacterDetails } from "../services/servicesApi"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Details = () => {

    const { dispatch, store } = useGlobalReducer()
    const { id } = useParams()
    useEffect(() => {
        getCharacterDetails(id, dispatch)
    }, [])

    return (
        <div className="container text-center mt-4">
            <div className="d-flex">
                <img src={store.characterImages[store.actualCharacter.properties.name]} style={{ width: "600px", heigh: "auto" }} />
                <div className="ms-4">
                    <h1 className="text-start">{store.actualCharacter.properties.name}</h1>
                    <p className="text-start">{store.actualCharacter.description}</p>
                </div>
            </div>
            <div className="d-flex mb-5">


                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Eye color</h4>
                        <p className="text-start">{store.actualCharacter.properties.eye_color}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Hair color</h4>
                        <p className="text-start">{store.actualCharacter.properties.hair_color}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Height</h4>
                        <p className="text-start">{store.actualCharacter.properties.height}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Mass</h4>
                        <p className="text-start">{store.actualCharacter.properties.mass}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Skin color</h4>
                        <p className="text-start">{store.actualCharacter.properties.skin_color}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="border-end border-2 border-black border-end px-4">
                        <h4 className="text-start">Birth year</h4>
                        <p className="text-start">{store.actualCharacter.properties.birth_year}</p>
                    </div>
                </div>
                <div className="d-flex mt-4">
                    <div className="px-4">
                        <h4 className="text-start">Gender</h4>
                        <p className="text-start">{store.actualCharacter.properties.gender}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}