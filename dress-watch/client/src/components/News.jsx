import React, { Component } from 'react';
import NewsList from './NewsList.jsx'
import { getAllNews } from '../services/articles.jsx';

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      has_data: false,
      not_loaded: true

    }
  }

  componentDidMount = async () => {
    const news = await getAllNews();
    this.props.saveNews(news);
    try {
      const has_data = !!this.props.newsData[0].title
      await this.setState({
        has_data: has_data,
        not_loaded: !has_data,
      })
    }
    catch(evt) {
      this.props.newsData = news
    }
  }

  loadData = async () => {
    try {
      const news = await getAllNews();
      this.props.saveNews(news);
      await this.setState({
        has_data: true,
        not_loaded: false,
      });
    }
    catch(evt) {
      console.log(evt)
    }
  }
  render() {
    if(this.state.not_loaded) {
      this.loadData()
    }
    const main = this.state.has_data
    ? <NewsList news={this.props.newsData} />
    : <h2>Loading</h2>
    return (
      <div>
      <h1>News</h1>
        {main}
      </div>
    )
  }

}
