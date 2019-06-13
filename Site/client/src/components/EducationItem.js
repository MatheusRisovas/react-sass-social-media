import React, { Component } from 'react'

class EducationItem extends Component {
  render() {
    return (
        <div>
        <h3>{this.props.institution}</h3>
        <p>{this.props.from_date} até {this.props.to_date}</p>
        <p><strong>Grau: </strong> {this.props.degree}</p>
        <p><strong>Área de Estudo: </strong> {this.props.field_of_study}</p>
        <p>
          <strong>Descrição: </strong>{this.props.description}
        </p>
      </div>
    )
  }
}
export default EducationItem;