import React from "react";
import { useRef } from "react";

function FormNoControlado() {

   const formulario = useRef(null)
   const handleSubmit = e => {
        e.preventDefault()

        const datos = new FormData(formulario.current)
        //Aplicamos el spread operator en el console.log
        // console.log(...datos.entries());

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos);

        const {todoDescripcion, todoEstado, todoName} = objetoDatos 
        //el metodo trim funciona para las validaciones de datos, bluuweb habla un poco de comparativa con el tema del lenght, pero que este ultimo no puede ser tan eficaz para estos casos
        if(!todoDescripcion.trim() || !todoEstado.trim() || !todoName.trim()){
            console.log("nooo esta vacio");
            return 
        }
        console.log("paso validaciones");
        
   } 
    

   return (
    <>
      <h2>FormNoControlado</h2>
      <form ref={formulario} onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          defaultValue="Descripcion tarea #01"
        />
        <select name="todoEstado" className="form-control mb-2" defaultValue="Descripcion tarea #01" >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </>
  );
}

export default FormNoControlado;
