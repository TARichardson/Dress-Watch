import React from 'react';
import CommentList from './CommentList.jsx';

export default function NewsFull(props) {
  const story = props.story
  const key = `NFKey-${story.id}`

  return (
    <div key={key}>
      <h2>{story.title}</h2>
      <h2>{story.sub_title}</h2>
      <h3>published at:{story.published_at} by user {story.user_id}</h3>
      <p>{story.body}</p>
      <CommentList comments={story.comments}/>
    </div>
  )
}
