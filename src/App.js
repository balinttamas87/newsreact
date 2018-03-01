import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Article from "./components/article/Article";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      headlines: "uk"
    };

    this.getHeadlines = this.getHeadlines.bind(this);

  }

  getHeadlines() {
    this.props.getHeadlines()
      .then(({articles}) => this.setState({articles}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">News - Headlines</h1>
          <div>
            <button onClick={this.getHeadlines}>UK</button>
            <button onClick={this.getHeadlines}>US</button>
            <button onClick={this.getHeadlines}>CA</button>
            <button onClick={this.getHeadlines}>AU</button>
            <button onClick={this.getHeadlines}>NZ</button>
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
