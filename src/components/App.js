import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="container">
        <div>
          <nav>
            <div class="nav-wrapper">
              <a href="" class="brand-logo">Products Catalogure</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Product</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s12">
            <News news={this.state.news1} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
