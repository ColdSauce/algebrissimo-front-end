import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SongInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return <input type="text" name={this.props.name} onChange={this.handleChange}/>
    }
}

class DynamicInputList extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { inputs: [''] };
    }

    handleInputChange(e) {
        var indexOfInput = parseInt(e.target.name);
        this.setState({ "inputs" : this.state.inputs.map((item, index) => 
            {
            if(index === indexOfInput) {
                console.log(e.target.value);
                return e.target.value;
            } else {
                return item;
            };
            })});
    }

    render() {
        return (
            <div>
                <form>
                    <div id="dynamicInput">
                        {this.state.inputs.map((input, index) => <SongInput name={index} key={index} onChange={this.handleInputChange}/>)}
                    </div>
                </form>
            <button onClick= { () => this.appendInput() }>
                +
            </button>
            </div>
        );
    }
    appendInput() {
        var newInput = ``;
        this.setState({ inputs: this.state.inputs.concat([newInput]) });
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicInputList/>
      </div>
    );
  }
}

export default App;
