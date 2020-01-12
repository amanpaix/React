import React from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "amanpaix",
      hidePerson: false,
      persons: [
        {
          name: "Harry",
          age: 23
        },
        {
          name: "Aman",
          age: 22
        }
      ]
    }
  }

  changeName = (event) => {
    let index = event.target.dataset.person;
    let persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({
      persons: persons
    });
  }

  togglePersons = () => {
    this.setState(state => ({
      hiddenPerson: !state.hiddenPerson
    }));
  }

  changeInputHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  remvoePersonHandler = (event) => {
    let persons = [...this.state.persons];
    let personIndex = parseInt(event.target.dataset.person);
    persons.splice(personIndex, 1);
    this.setState({
        persons: persons
    });
  }


  render() {
    const style = {
      padding: '10px 20px',
      border: 'none',
      textAlign: 'center',
      cursor: 'pointer'
    };

    let persons = null;

    if(!this.state.hiddenPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, i) => {
              return <Person
                key={i}
                index={i}
                changeName={this.changeName}
                name={person.name}
                age={person.age}
                remvoePersonHandler={this.remvoePersonHandler}
              />
            })
          }
        </div>
      );
    }
    return (

      <div className="container">
        <UserInput
          username={this.state.username}
          changeInputHandler={this.changeInputHandler}
        />

        <UserOutput
          username={this.state.username}
        />

        <button style={style} onClick={this.togglePersons}>{(this.state.hiddenPerson) ? "Show Persons" : "Hide Persons"}</button>

        {persons}
        
      </div>
    )
  }
}

export default App;
