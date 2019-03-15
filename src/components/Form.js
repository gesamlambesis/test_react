import React from 'react'
import { connect } from 'react-redux'
import Input from './Input'
import { ADD_CUIDADOR } from '../constants'

class CuidadorForm extends React.Component {
  state = {
    fields: { pais: '', name: '', email: '', phone: '' },
    errors: {}
  }

  handleChange = e => {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({
      fields
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.validateForm()) {
      this.setState(({ fields }) => {
        let fieldsReseted = { ...fields }
        this.props.addCuidador(fields)
        Object.keys(fieldsReseted).forEach(e => (fieldsReseted[e] = ''))
        return { fields: fieldsReseted }
      })
    }
  }

  validateForm() {
    let { fields } = this.state
    let errors = {}
    let isValid = true

    if (!fields['pais']) {
      isValid = false
      errors['pais'] = '*Ingresa un país.'
    }

    if (!fields['name']) {
      isValid = false
      errors['name'] = '*Ingresa un nombre válido.'
    }

    if (!fields['email']) {
      isValid = false
      errors['email'] = '*Ingresa un email válido.'
    }

    if (!fields['phone']) {
      isValid = false
      errors['phone'] = '*Ingresa un número de teléfono.'
    }

    this.setState({ errors })
    return isValid
  }

  inputProps = name => ({
    name,
    value: this.state.fields[name],
    onChange: this.handleChange,
    error: this.state.errors[name]
  })

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" label="Pais" {...this.inputProps('pais')} />
        <Input type="text" label="Nombre" {...this.inputProps('name')} />
        <Input type="text" label="Email" {...this.inputProps('email')} />
        <Input type="text" label="Phone" {...this.inputProps('phone')} />
        <button type="submit">Guardar</button>
      </form>
    )
  }
}

const addCuidador = payload => {
  return { type: ADD_CUIDADOR, payload }
}

export default connect(
  null,
  { addCuidador }
)(CuidadorForm)
