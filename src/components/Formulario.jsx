import React, { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  const handleChange = e => {
    // console.log(e.target.type);
    const {name, value, checked, type} = e.target;
    setTodo({
      ...todo,
     [name]: type === "checkbox" ? checked : value
    });


  // setTodo((old) => ({
  //   ...old,
  //   [e.target.name]: e.target.value,
  // }));
 };

  return (
    <>
      <h2>No controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          onChange={handleChange}
          value={todo.todoDescripcion}

        />
        <select 
        name="todoEstado" 
        className="form-control mb-2" 
        onChange={handleChange}
        value={todo.todoEstado}
        
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input 
          className="form-check-input" 
          type="checkbox" 
          name="todoCheck" 
          checked={todo.todoCheck} 
          id="flexCheckDefault" 
          onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
