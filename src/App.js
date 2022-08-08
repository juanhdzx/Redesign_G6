//import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component () {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearchTerms: ''
    }
  }

  useWikiSearchEngine = (e) => {

  }

  changeWkikiSearchTerms = (e) => {
    this.setState({
      wikiSearchTerms: e.target.value
    })
  }

  render() {

    let wikiSearchResults = []

      return (
        <div className="App">
          <h1>Wikipedia</h1>
          <form action="">
            <input type="text" value='' onChange={this.changeWkikiSearchTerms} placeholder='Search Wikipedia Articles' />
            <button type="submit" onClick={this.useWikiSearchEngine} ></button>
    
          </form>
          {wikiSearchResults}
        </div>
      );
    }
  }
export default App;
