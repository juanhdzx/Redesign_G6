//import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wikiSearchReturnValues: [],
      WikiSearchTerms: ''
    }
  }

  useWikiSearchEngine = (e) => {
    e.preventDefault();

    this.setState({
      wikiSearchReturnValues: []
    });
    const pointerToThis = this;
    
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: 'query',
      list: 'search',
      srsearch: this.state.WikiSearchTerms,
      format: 'json'
    };

    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    })

    // fetch call
    fetch(url)
    .then(
      function(response) {
        return response.json();
        } 
      )
      .then(
        function(response) {
          //console.log(response);
          //console.log(response.query.search[0].pageid);

          for (var key in response.query.search) {
            pointerToThis.state.wikiSearchReturnValues.push({
              queryResultPageFullURL: 'no link',
              queryResultPageID: response.query.search[key].pageid,
              queryResultPageTitle: response.query.search[key].title,
              queryResultPageSnippet: response.query.search[key].snippet,
            });
          }
        }
      )
      .then(
        function(response) {
          for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
            //console.log(pointerToThis.state.wikiSearchReturnValues);
            let page = pointerToThis.state.wikiSearchReturnValues[key2];
            let pageID = page.queryResultPageID;
            let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

            fetch(urlForRetrievingPageURLByPageID)
            .then(
              function(response) {
                return response.json();
              }
            )
            .then(
              function(response) {
                page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

                pointerToThis.forceUpdate(); 
              }
            )
          }
        }
      )
  }

  changeWikiSearchTerms = (e) => {
    this.setState({
      WikiSearchTerms: e.target.value
    });
  }

  render() {

    let wikiSearchResults = [];
    console.log(this.state.wikiSearchReturnValues);


    for (var key3 in this.state.wikiSearchReturnValues){
      wikiSearchResults.push(
        <div className="searchResultDiv" key={key3}>
          <h3><a href={this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}>{this.state.wikiSearchReturnValues[key3].queryResultPageTitle}</a></h3>
          <span className="Link"><a href={this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}>{this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}</a></span>
          <p className="description" dangerouslySetInnerHTML={{__html: this.state.wikiSearchReturnValues[key3].queryResultPageSnippet}}></p>
        </div>
      );
    }

    console.log(wikiSearchResults);

      return (

        <div className="App">
          <img id="wikiGlobe" src="	https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png" alt="g"/>
          <h1>Wikipedia Search</h1>
          <form action="">
            <input type="text" value={this.state.WikiSearchTerms || ''} onChange={this.changeWikiSearchTerms} placeholder='Search Wikipedia Articles' />
            <button id="submitButton" type='submit' onClick={this.useWikiSearchEngine} >Search</button>
            <p>The Free Encyclopedia</p>

                    <div className="language_buttons">
                      <ul>
                        <button className="opt1">English</button>
                        <button className="opt2">Español</button>
                        <button className="opt3">Italiano</button>
                        <button className="opt4">Deutsch</button>
                      </ul>
                    </div>
          </form>

          {wikiSearchResults}

        </div>
        
      );
    }
  }
export default App;
