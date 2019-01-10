import React from 'react';

export default function ReplyDetail(props) {
  const reply = props.reply
  const key = `RDKey-${reply.id}`
  return (
    <div key={key}>
      <h2>{reply.title}</h2>
      <h3>published at:{reply.published_at} by user {reply.user_id}</h3>
      <p>{reply.body}</p>
    </div>
  )
}
