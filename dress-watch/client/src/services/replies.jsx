import axios from 'axios';

const URL = process.env.PORT || "/api"

export const getAllReplies = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/replies`,
  });
  const replyData = resp.data
  return replyData
}

export const getReply= async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/replies/${id}`,
  });
  const replyData = resp.data
  return replyData
}

export const createReplies = async (replies,token) => {
  const resp = await axios({
    method: 'post',
    url: `${URL}/replies`,
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
    url: `${URL}/replies/${id}`,
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
    url: `${URL}/replies/${id}`,
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
    url: `${URL}/replies/mine`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const replyData = resp.data
  return replyData
}
