import React, { Component } from 'react';
import NewSingle from './NewSingle';
import axios from 'axios'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {


    const url = 'https://hplussport.com/api/products/order/price/sort/asc/qty/9';

    axios.get(url)
      .then(resp => {
        this.setState({
          news: resp.data
        })
      }).catch(err => console.log(err));

  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
