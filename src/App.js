import React, { Component } from 'react'
import { connect } from 'react-redux'
import CuidadoresForm from './components/Form'

class App extends Component {
  render() {
    const { cuidadores } = this.props
    return (
      <div className="App">
        {cuidadores.map((cuidador, i) => (
          <h4 key={i}>{cuidador.name}</h4>
        ))}
        <hr />
        <div>
          <CuidadoresForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cuidadores }) => ({ cuidadores })

export default connect(mapStateToProps)(App)
