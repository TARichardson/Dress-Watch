import axios from 'axios';

const URL = 'http://localhost:3001/articles'

export const getAllNews = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getAllReviews = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getAllNewsLatest = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getAllReviewsLatest = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getArticle = async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/${id}`,
  });
  const articlesData = resp.data
  return articlesData
}

export const createArticles = async (articles,token) => {
  const resp = await axios({
    method: 'post',
    url: URL,
    data: {article: articles},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const articlesData = resp.data
  return articlesData
}

export const updateArticle = async (id,data,token) => {
  const resp = await axios({
    method: 'put',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {article: data},
  });
  const articlesData = resp.data
  return articlesData
}

export const deleteArticle = async (id,data,token) => {
  const resp = await axios({
    method: 'delete',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {article: data},
  });
  const articlesData = resp.data
  return articlesData
}

export const getMyArticles = async (token) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/mine`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const articlesData = resp.data
  return articlesData
}
