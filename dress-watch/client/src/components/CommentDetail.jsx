import React from 'react';
import ReplyList from './ReplyList.jsx';

export default function CommentDetail(props) {
  const comment = props.comment
  const key = `CDKey-${comment.id}`
  return (
    <div key={key}>
      <h2>{comment.title}</h2>
      <h3>published at:{comment.published_at} by user {comment.user_id}</h3>

      <p>{comment.body}</p>
      <div key="ReplyListDiv">
        <h3>if replys</h3>
        {/* <ReplyList replies={comment.replies}/> */}
      </div>
    </div>
  )
}
