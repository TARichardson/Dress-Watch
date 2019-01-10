import React from 'react';

export default function CommentForm(props) {
  const submit = props.edit ? "Edit" : "Submit"
  return (
    <form onSubmit={props.submit} className="CommentForm">
    <label>
    Title:
    <input type='text'
           name='title'
           value={props.comment.title}
           onChange={props.change}/>
    </label>
    <label>
    Body:
    <input type='text'
           name='title'
           value={props.comment.body}
           onChange={props.change}/>
    </label>
    <button type="submit">{submit}</button>
  </form>
  )
}
