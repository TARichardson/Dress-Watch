import axios from 'axios';

const URL = 'http://localhost:3001/replies'

export const getAllReplies = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const replyData = resp.data
  return replyData
}

export const getReply= async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/${id}`,
  });
  const replyData = resp.data
  return replyData
}

export const createReplies = async (replies,token) => {
  const resp = await axios({
    method: 'post',
    url: URL,
    data: {replies: replies},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const replyData = resp.data
  return replyData
}

export const updateReply = async (id,data,token) => {
  const resp = await axios({
    method: 'put',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {replies: data},
  });
  const replyData = resp.data
  return replyData
}

export const deleteReply = async (id,data,token) => {
  const resp = await axios({
    method: 'delete',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {replies: data},
  });
  const replyData = resp.data
  return replyData
}

export const getMyReplies = async (token) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/mine`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const replyData = resp.data
  return replyData
}
