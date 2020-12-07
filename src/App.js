import React, { Component } from 'react'
import Person from './Person/Person'
export default class App extends Component {
  state = {
    persons: [
      {id: "dsfsdf", name: "Max", age: 28},
      {id: "dsfsd", name: "Maximilian", age: 28},
      {id: "dsfs", name: "Maxon", age: 28}
    ],
    showPersons: true
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }
  changeName = (event, personid) => {
    const personIndex = this.state.persons.findIndex((x) => {return x.id === personid});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons})
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = (
        this.state.persons.map((person, index) => {
          return <Person 
          key= {person.id}
          click= {() => this.deletePersonHandler(index)}  
          name= {person.name}
          age = {person.age}
          changed = {(event) => this.changeName(event, person.id)}
          />
    }))
    }
    return (
    <div className="App">
      <button onClick={this.togglePersonsHandler}>Simple button</button>
      {persons}
    </div>
    )
  }
}

