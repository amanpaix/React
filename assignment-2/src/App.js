import React from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    let intialText = "aman";
    this.state = {
      length: intialText.length,
      text: intialText
    }
  }

  changeHandler = (event) => {
    let text = event.target.value;
    this.setState({
      length: text.length,
      text: event.target.value
    });
  }

  removeBox = (event) => {
    let index = event.target.dataset.index;
    let textArr = this.state.text.split("");
    textArr.splice(index, 1);
    this.setState({
      text: textArr.join(""),
      length: textArr.length
    });
  }

  render() {
    let textArr = this.state.text.split("");
    let charBoxes = (
      <div>
        {
          textArr.map((char, index) => {
            return <CharComponent key={index} index={index} removeBox={this.removeBox} char={char} />
          })
        }
      </div>
    );
    return (
      <div className="App">
        <h1>Box Generator</h1>
        <p><input type='text' value={this.state.text} onChange={this.changeHandler} /></p>
        <p><ValidationComponent length={this.state.length} /></p>
        {charBoxes}
      </div>
    );
  }
}

export default App;
