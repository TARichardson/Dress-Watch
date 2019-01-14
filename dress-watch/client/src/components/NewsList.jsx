import React from 'react';
import NewsDetail from './NewsDetail.jsx';
import NewsFull from './NewsFull.jsx';
import { Route, Link} from 'react-router-dom';

export default function NewsList(props) {
  const newsList = props.news.map((news,index) => (
    <div key={`newsItemDiv-${news.id}`}>
      <Link to={`${props.match.url}/${index}`}><NewsDetail story={news}/></Link>
      <Route path={`${props.match.url}/:id`} render={(match) => <NewsFull match={match}
                                                                        story={news}/>} />
    </div>
  ))

  return (
    <div key="NewsList">
      <h2>News List</h2>
      {newsList}
    </div>
  )
}
