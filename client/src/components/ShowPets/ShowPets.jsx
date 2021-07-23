import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import axios from 'axios'


const PetList = props => {

    const { tweaked } = props

    const [ list, setList ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setList(res.data.getallPets)
            })
            .catch(err => console.log(err))
    },[tweaked])

    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {
                    list.map((pet, i) => {
                        return(
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td> <Link to={`/pets/${pet._id}`}>Details</Link> | <Link to={`/pets/${pet._id}/edit`}>Edit</Link></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default PetList