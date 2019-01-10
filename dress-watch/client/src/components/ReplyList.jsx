import React from 'react';
import ReplyDetail from 'ReplyDetail.jsx';

export default function ReplyList(props) {
  const replies = props.replies
  const rDetail = replies.map( (reply) =>{
    const divkey = `RDLK-${reply.id}`
    return (
    <div key={divkey}>
      <ReplyDetail reply={reply}/>
    </div>
  )}
)

  return (
    <div key='replyList'>
      <h2>Reply List</h2>
      {rDetail}
    </div>
  )
}
