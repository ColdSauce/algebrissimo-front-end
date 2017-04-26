import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import plus from './plus.svg';
import './App.css';


const languages = [
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'C#',
        year: 2000
    }
]

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => suggestion.name;

const renderSuggestionsContainer = ({ containerProps, children, query }) => (
  <div {...containerProps}>
    {children}
    {
      <div className="footer">
        Press Enter to search <strong>{query}</strong>
      </div>
    }
  </div>
);


class SongInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };

    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };

    /*
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
    */

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
          placeholder: "Type 'c'",
          value,
          onChange: this.onChange
        };
        const someval = true;

        return (
            <input type="text"/>
        );
    }
}
    
class MathematicalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }


    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <SongInput/>
                <img src={plus} alt="+"/>
                <SongInput/>
                <input className="submitButton" type="submit" value="Combine" />
            </form>
        );
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> Algebrissimo </h1>
          <h2> Add two songs together to get a song that sounds like both of them combined! </h2>
          <MathematicalForm/>
      </div>
    );
  }
}

export default App;
