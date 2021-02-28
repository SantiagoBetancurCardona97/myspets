 import React from 'react'
 function App (){
   return (
    <div>
      <div className="jumbotron text-center">
        <h2>Mascotas</h2>
        <hr/>
        <div className="container">
          <form>
          <div className="row">
            <div className="col-sm-2">
            <h10>Nombre de Mascota</h10>
            <input type="text" placeholder="Escribir Nombre"></input>
             <div>
              <h10>Tipo de Mascota</h10>
              <input type="text" placeholder="Perro, gato u otro"></input>
             </div>
            </div>
            <div className="col-sm-2">
              <h10>Raza de  Mascota</h10>
              <input type="text" placeholder="Escribir raza"></input>
              <div>
               <h10>Fecha de nacimiento</h10>
               <input type="text" placeholder="DD-MM-AAAA"></input>  
              </div>
            </div>
            <div className="col-sm-2">
              <h10>Propietario</h10>
              <input type="text" placeholder="Escribir nombre"></input>
               <div>
                <h10>Email</h10>
                <input type="text" placeholder="Escribir E-mail"></input>
               </div>
            </div>
            <div className="col-sm-2">
              <h10>Direccion</h10>
              <input type="text" placeholder="Escribir Direccion"></input>
            </div>
            <div className="col-sm-2">
              <button className="btn btn float-right mx-2">Agregar</button>
              <button className="btn btn-dark float-right">Modificar</button>
            </div>        
         </div>
         </form> 
        </div>
      </div>
     </div>
    
   )
  }
export default App
