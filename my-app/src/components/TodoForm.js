import React, { Component } from 'react';


class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      responsable: '',
      description: '',
      priority: 'low'
    };

    // Enlaza los eventos
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Take the values of the inputs
  handleInput(e) {
    console.log(e.target.value, e.target.name);

    const { value, name } = e.target;

    this.setState({
      [name]: value
    })

    console.log(this.state);
  }

  // For the form submit
  handleSubmit(e) {
    e.preventDefault(); // no refresca la pagina
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              placeholder="Responsible"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={this.handleInput}
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

// { } para ejecutar codigo js
// this.props  de este componente quiero sus propiedades
// onChange= {ejecuta el metodo que tengamos en el componente}
// this.setState  sera el encargado de poder alterar
// los datos que tengo en los campos.

// Destructuring

// por default cuando das click en un boton se refresca la pantalla
// esto lo hace en los formularios por default

// (e) --- evento ...tiene propiedades y metodos
