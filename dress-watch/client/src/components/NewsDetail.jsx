import React, { Fragment } from 'react';

export default function NewsDetail(props) {
  const story = props.story
  return (
    <Fragment>
      <div className="storyTitle">
        <h2>{story.title}</h2>
      </div>
      <div className="storyPub">
        
        <h3>published at:{story.published_at} by user {story.user_id}</h3>
      </div>
    </Fragment>
  )
}
