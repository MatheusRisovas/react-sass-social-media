import React, { Component } from 'react'

class ExperiencesItem extends Component {
  render() {
    return (
        <div>
        <h3>{this.props.company}</h3>
        <p>{this.props.from_date} até {this.props.to_date}</p>
        <p><strong>Cargo: </strong> {this.props.position} </p>
        <p>
            <strong>Descrição: </strong>{this.props.description}
        </p>
    </div>
    )
  }
}
export default ExperiencesItem;