import React, {Fragment} from 'react';
import ReplyList from './ReplyList.jsx';
import Moment from 'react-moment';

const getReplies = (comment) => {
  try {
    return (
      <Fragment>
      <h3>replies</h3>
      <ReplyList replies={comment.replies}/>
      </Fragment>
    )
  } catch (evt) {
    return (
      <Fragment>
        <p>no replies</p>
      </Fragment>
    )
  }
}

export default function CommentDetail(props) {
  const comment = props.comment
  const key = `CDKey-${comment.id}`
  return (
    <div key={key} className="CommentDetail">
      <div className="CommentHeader">
        <h2>{comment.title}</h2>
        <h3>by : {comment.user_id}</h3>
      </div>
      <div className="CommentBody">
        <p>{comment.body}</p>
        <p>published at: <Moment date={comment.published_at}/></p>
      </div>

      <div key="ReplyListDiv">
        <hr/>
        {getReplies()}
      </div>
    </div>
  )
}
