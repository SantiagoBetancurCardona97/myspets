import React, {useState} from 'react'
import { initial, isEmpty } from 'lodash'
import shortid from 'shortid'

 function App (){
  const [pet, setPet] = useState("")
  const [pets, setPets] = useState([])

  const addPet = (e) =>{
    e.preventDefault()
    if(isEmpty(pet)){
      console.log("pet empty")
      return
    }
 
    const newPet = {
      id: shortid.generate(),
      name: pet
    }
    setPets([...pets, newPet])
    setPet("")

  }
  

   return (
    <div>
      <div className="jumbotron text-center">
        <h2>Mascotas</h2>
        <hr/>
        <div className="container">
          <form onSubmit={addPet}>
          <div className="row">
            <div className="col-3">
            <h10>Nombre de Mascota</h10>
            <input type="text" placeholder="Escribir Nombre"
             onChange= {(text) => setPet(text.target.value)}
             value={pet}></input>
             <div>
              <h10>Tipo de Mascota</h10>
              <input type="text" placeholder="Perro, gato u otro"></input>
             </div>
            </div>
            <div className="col-3">
              <h10>Raza de  Mascota</h10>
              <input type="text" placeholder="Escribir raza"></input>
              <div>
               <h10>Fecha de nacimiento</h10>
               <input type="text" placeholder="DD-MM-AAAA"></input>  
              </div>
            </div>
            <div className="col-3">
              <h10>Propietario</h10>
              <input type="text" placeholder="Escribir nombre"></input>
               <div>
                <h10>E-mail Propietario</h10>
                <input type="text" placeholder="Escribir E-mail"></input>
               </div>
            </div>
            <div className="col-3">
              <h10>Direccion Propietario</h10>
              <input type="text" placeholder="Escribir Direccion"></input>
              <button className="btn btn float-dark mx-2">Agregar</button>
            </div>        
         </div>
         </form> 
        </div>
      </div>
        <div>
          {
            pets.map((pet) =>(
            <li className="list-group-item" key={pet.id}>
              <span className="lead">{pet.name}</span>
              <button className="btn btn-dark float-right">Modificar</button>
            </li>
            ))
          }
        </div>
     </div>
    
   )
  }
export default App
