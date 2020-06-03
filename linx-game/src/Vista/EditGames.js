import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../actions';
import { muestraJuegos } from '../actions';

export class EditGames extends Component {

  componentDidMount() {
    this.props.showVideojuegos();
  }

  renderVideojuegosList() {
    return this.props.videojuegos.map((videojuego => {
        return(
        <li key={videojuego.id}>{videojuego.descripcion}</li>
        )
        }))
  }

  render() {
    return (
      <div>
        <h2>Editar Videojuegos</h2>
        <ul>
          {
            this.renderVideojuegosList()
          }
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    videojuegos: state.videojuego.list
  }
}

export default connect(mapStateToProps, {showVideojuegos})(EditGames)

