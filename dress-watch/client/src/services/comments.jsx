import axios from 'axios';

const URL = process.env.PORT || "/api"

export const getAllComments = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/comments`,
  });
  const commentsData = resp.data
  return commentsData
}

export const getComment = async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/comments/${id}`,
  });
  const commentsData = resp.data
  return commentsData
}

export const createComments = async (comment,token) => {
  const resp = await axios({
    method: 'post',
    url: `${URL}/comments`,
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
    url: `${URL}/comments/${id}`,
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
    url: `${URL}/comments/${id}`,
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
    url: `${URL}/comments/mine`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const commentsData = resp.data
  return commentsData
}
