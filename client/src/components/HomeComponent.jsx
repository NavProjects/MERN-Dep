import React from "react"
import { Link } from "@reach/router"
import PetList from "./ShowPets/ShowPets"

const HomeComponent = props => {

    const { tweaked, setTweaked } = props

    return(
        <div>
            <Link to="/pets/new">add a pet to the shelter</Link>
            <PetList tweaked={tweaked} SetTweaked={setTweaked}/>
        </div>
    )
}

export default HomeComponent