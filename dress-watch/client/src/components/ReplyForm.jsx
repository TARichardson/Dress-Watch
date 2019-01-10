import React from 'react';

export default function ReplyForm(props) {
  const submit = props.edit ? "Edit" : "Submit"
  return (
    <form onSubmit={props.submit} className="ReplyForm">
    <label>
    Title:
    <input type='text'
           name='title'
           value={props.reply.title}
           onChange={props.change}/>
    </label>
    <label>
    Body:
    <input type='text'
           name='title'
           value={props.reply.body}
           onChange={props.change}/>
    </label>
    <button type="submit">{submit}</button>
  </form>
  )
}
