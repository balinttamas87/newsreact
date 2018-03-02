import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Article from "./components/article/Article";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };

    this.getHeadlines = this.getHeadlines.bind(this);
    this.getHeadlinesForUK = this.getHeadlinesForUK.bind(this);
    this.getHeadlinesForUS = this.getHeadlinesForUS.bind(this);
    this.getHeadlinesForCA = this.getHeadlinesForCA.bind(this);
    this.getHeadlinesForAU = this.getHeadlinesForAU.bind(this);
    this.getHeadlinesForNZ = this.getHeadlinesForNZ.bind(this);

  }

  getHeadlines(countryCode) {
    this.props.getHeadlines(countryCode)
      .then(({articles}) => this.setState({articles}))
  }

  getHeadlinesForUK() {
    this.getHeadlines("gb");
  }

  getHeadlinesForUS() {
    this.getHeadlines("us");
  }

  getHeadlinesForCA() {
    this.getHeadlines("ca");
  }

  getHeadlinesForAU() {
    this.getHeadlines("au");
  }

  getHeadlinesForNZ() {
    this.getHeadlines("nz");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">News - Headlines</h1>
          <div className="btnWrapper">
            <button className="getHeadlinesBtn" onClick={this.getHeadlinesForUK}>UK</button>
            <button className="getHeadlinesBtn" onClick={this.getHeadlinesForUS}>US</button>
            <button className="getHeadlinesBtn" onClick={this.getHeadlinesForCA}>CA</button>
            <button className="getHeadlinesBtn" onClick={this.getHeadlinesForAU}>AU</button>
            <button className="getHeadlinesBtn" onClick={this.getHeadlinesForNZ}>NZ</button>
          </div>
        </header>
{/*        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        {/*<button onClick={this.getHeadlines}>Receive greeting</button>*/}
          <div className="articles-wrapper">{
            this.state.articles.map(({title, description, urlToImage}, index) =>
              <Article title={title} description={description} urlToImage={urlToImage} key={index}/>
            )
          }
          </div>
      </div>
    );
  }
  componentDidMount() {
    this.getHeadlines();
  }

}

export default App;
