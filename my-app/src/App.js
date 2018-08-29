import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import TodoForm from './components/TodoForm';

// Data
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Aplicacion de tareas',
      ntareas: 10,
      todos
    }
  }

  render() {
    console.log(this.state.todos)

    // Manipulando los datos antes del ejecutar render
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>

            <div className="card-body">
              <p>{todo.description}</p>
              <mark>{todo.responsable}</mark>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="">
            TASK
            <span className="badge badge-pill badge-light ml-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm></TodoForm>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// React almacena los datos temporalmente en memorios
// constructor se ejecuta antes de render
// Hereda toda la funcionalidad de react.
// state es el estado de los datos en una app de react.
// state se administra en memoria para mostrarse en pantalla
// todos: todos (json) es lo mismo que colocar todos
// todos dentro de state tiene los datos del backedn
// Si queremos procesar los datos para luego
// mostrarlos entonces
