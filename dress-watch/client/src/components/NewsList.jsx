import React from 'react';
import NewsDetail from './NewsDetail.jsx';
import NewsFull from './NewsFull.jsx';
import { Route, Link, Switch} from 'react-router-dom';


export default function NewsList(props) {
debugger;
const main = props.newsData.map( (news,index) => (
    <div key={`newsItemDiv-${news.id}`}>
      <Link to={`${props.match.url}/${index}`}> <NewsDetail story={news}/> </Link>
    </div>
))

  return (
    <div key="NewsList">
      <h2>News List</h2>
      {main}
    </div>
  )
}
