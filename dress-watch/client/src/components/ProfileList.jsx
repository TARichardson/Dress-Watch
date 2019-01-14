import React from 'react';
import CommentDetail from './CommentDetail.jsx';

export default function ProfileList(props) {
  const comments = props.comments
  const cDetails = comments.map( (comment) => {
        const divkey = `CDLK-${comment.id}`
        return (
        <div key={divkey}>
          <CommentDetail comment={comment}/>
        </div>
      )}
    )

  return (
    <div key="ProfileList">
      <h2>Comment List</h2>
        {cDetails}
    </div>
  )
}
