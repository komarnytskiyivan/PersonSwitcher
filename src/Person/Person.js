import React, { Component } from 'react';
import './Person.css';
export default class Person extends Component {
    render() {
        return (
            <div onClick={this.props.click} className="Person">
                <p>My name is {this.props.name} and my age is {this.props.age}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
        )
    }
}
