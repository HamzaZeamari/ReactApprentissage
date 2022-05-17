import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [etudiants,SetEtudiants] = useState([
    {id : 1, nom : "Amine"},
    {id : 2, nom : "Jean"},
    {id : 3, nom : "David"},
    {id : 4, nom : "Raul"}
  ]);


return (<div>
  <ul>
    {
      etudiants.map((etudiant)=>{
        return <li>{etudiant.nom}</li>
      })
    }
    <button>OUI</button>
  </ul>
</div>)
}
export default App;
