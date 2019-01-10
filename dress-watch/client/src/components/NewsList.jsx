import React from 'react';
import NewsDetail from './NewsDetail.jsx'

export default function NewsList(props) {
  const newsList = props.news.map((news) => (
    <div key={`newsItemDiv-${news.id}`}>
      <NewsDetail story={news}/>
    </div>
  ))

  return (
    <div key="NewsList">
      <h2>News List</h2>
      {newsList}
    </div>
  )
}
