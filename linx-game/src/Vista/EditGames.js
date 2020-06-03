import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showVideojuegos } from '../reducers';
import { muestraJuegos } from '../actions';

export class EditGames extends Component {

  componentDidMount() {
    this.props.showVideojuegos();
  }

  renderVideojuegosList() {
    return this.props.videojuegos.map((videojuego => {
        return(
        <li key={videojuego.id}>{videojuego.nombre}</li>
        )
        }))
  }

  render() {
    return (
      <div>
        <h2>Putos Juegos</h2>
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

