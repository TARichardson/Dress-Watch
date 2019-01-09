import axios from 'axios';

const URL = 'http://localhost:3001/comments'

export const getAllComments = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const commentsData = resp.data
  return commentsData
}

export const getComment = async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/${id}`,
  });
  const commentsData = resp.data
  return commentsData
}

export const createComments = async (comment,token) => {
  const resp = await axios({
    method: 'post',
    url: URL,
    data: {comment: comment},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const commentsData = resp.data
  return commentsData
}

export const updateComment = async (id,data,token) => {
  const resp = await axios({
    method: 'put',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {comment: data},
  });
  const commentsData = resp.data
  return commentsData
}

export const deleteComment = async (id,data,token) => {
  const resp = await axios({
    method: 'delete',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {comment: data},
  });
  const commentsData = resp.data
  return commentsData
}

export const getMyComments = async (token) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/mine`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const commentsData = resp.data
  return commentsData
}
