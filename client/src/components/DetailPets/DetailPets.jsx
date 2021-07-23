import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'


const DetailPets = props => {

    const { _id, tweaked, setTweaked } = props

    const [showPet, setShowPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res => setShowPet(res.data.pet))
            .catch(err => console.log(err))
    },[])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => {
                navigate("/")
                setTweaked(!tweaked)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to="/">Back to Home</Link>
            <button onClick={deleteHandler}>Adopt {showPet.name}</button>
            <h3>Details about: {showPet.name}</h3>
            <p>Pet type: {showPet.type}</p>
            <p>Desctription: {showPet.description}</p>
            <p>Skills: {showPet.skill1} {showPet.skill2} {showPet.skill3}</p>
        </div>
    )
}
export default DetailPets