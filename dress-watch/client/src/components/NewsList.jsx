import React from 'react';
import NewsDetail from './NewsDetail.jsx';
import { Link } from 'react-router-dom';



export default function NewsList(props) {
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
