import React, {Fragment} from 'react';
import ReplyList from './ReplyList.jsx';

const getReplies = (comment) => {
  try {
    return (
      <ReplyList replies={comment.replies}/>
    )
  } catch (evt) {
    return (
      <Fragment></Fragment>
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
        <h3>published at:{comment.published_at} by user {comment.user_id}</h3>
      </div>
      <div className="CommentBody">
        <p>{comment.body}</p>
      </div>

      <div key="ReplyListDiv">
        <h3>replies</h3>
        {getReplies()}
        <hr/>
      </div>
    </div>
  )
}
