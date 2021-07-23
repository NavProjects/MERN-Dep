import './App.css';
import React, { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import { Router } from '@reach/router'
import CreatePet from './components/CreatePets/CreatePets';
import EditPet from './components/EditPets/EditPets';
import DetailPets from './components/DetailPets/DetailPets';

function App() {

  const [ tweaked, setTweaked ] = useState(true)

  return (
    <div >
      <h1>Pet Shelter</h1>
      <Router>
      <HomeComponent path="/" tweaked={tweaked} setTweaked={setTweaked}/>
      <CreatePet path="/pets/new" tweaked={tweaked} setTweaked={setTweaked}/>
      <EditPet path="/pets/:_id/edit" tweaked={tweaked} setTweaked={setTweaked}/>
      <DetailPets path="/pets/:_id" tweaked={tweaked} setTweaked={setTweaked}/>
      </Router>
    </div>
  );
}

export default App;
