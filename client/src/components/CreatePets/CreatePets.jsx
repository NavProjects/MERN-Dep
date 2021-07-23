import { Link, navigate } from '@reach/router'
import axios from 'axios'
import React, { useState } from 'react'


const CreatePet = props => {

    const { tweaked, setTweaked } = props


    const [newPet, setNewPet] = useState({
        name: "",
        type: "",
        description: "",
        style1: "",
        style2: "",
        style3: ""
    })

    const [validState, setValidState] = useState({})

    const changeHandler = e => {
        setNewPet({
            ...newPet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pets/new", newPet)
            .then(res => {
                navigate("/")
                setTweaked(!tweaked)
                setNewPet({
                    name: "",
                    type: "",
                    description: "",
                    style1: "",
                    style2: "",
                    style3: ""
                })
            })
            .catch(err => {
                const { errors } = err.response.data
                let errorObj = {}
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }


    return (
        <div>
            <Link to="/">Back to Home</Link>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={handleSubmit}>
                <p>Pet Name:</p>
                <input type="text" name="name" onChange={changeHandler} value={newPet.name}/>
                {(validState.name) ? <p>{validState.name}</p> : null}
                <p>Pet Type:</p>
                <input type="text" name="type" onChange={changeHandler} value={newPet.type}/>
                {(validState.type) ? <p>{validState.type}</p> : null}
                <p>Pet Description</p>
                <input type="text" name="description" onChange={changeHandler} value={newPet.description}/>
                {(validState.description) ? <p>{validState.description}</p> : null}
                <p>Skills (Optional):</p>
                <p>Skill 1:</p>
                <input type="text" name="skill1" onChange={changeHandler} value={newPet.skill1}/>
                <p>Skill 2:</p>
                <input type="text" name="skill2" onChange={changeHandler} value={newPet.skill2}/>
                <p>Skill 3:</p>
                <input type="text" name="skill3" onChange={changeHandler} value={newPet.skill3}/>
                <button type="submit">Add pet</button>
            </form>

        </div>
    )
}
export default CreatePet