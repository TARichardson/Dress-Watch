import React, {Fragment} from 'react';
import CommentList from './CommentList.jsx';
import Moment from 'react-moment';

const getComments = (story) => {
  try {
    return (
      <Fragment>
      <h3>Comments</h3>
      <CommentList comments={story.comments}/>
      </Fragment>
    )
  }
  catch (evt) {
    return (
      <Fragment>
        <p>no Comments</p>
      </Fragment>
    )
  }
}

export default function NewsFull(props) {
  const story = props.story
  const key = `NFKey-${story.id}`

  return (
    <div key={key}>
      <div className="storyTitle">
        <h2>{story.title}</h2>
      </div>
      <div className="storySubTitle">
        <h2>{story.sub_title}</h2>
      </div>
      <div className="storyPub">
        <p>published at: <Moment date={story.published_at}/></p>
      </div>
      <div className="storyUser">
        <p>by : {story.user_id}</p>
      </div>
      <div className="">
        <p>{story.body}</p>
      </div>
      {getComments()}
    </div>
  )
}
