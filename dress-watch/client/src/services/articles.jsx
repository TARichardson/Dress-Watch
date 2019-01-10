import axios from 'axios';

const URL = process.env.PORT || "/api"

export const getAllNews = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/articles`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getAllReviews = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/articles`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getAllNewsLatest = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/articles`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getAllReviewsLatest = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/articles`,
  });
  const articlesData = resp.data
  return articlesData
}

export const getArticle = async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/articles/${id}`,
  });
  const articlesData = resp.data
  return articlesData
}

export const createArticles = async (articles,token) => {
  const resp = await axios({
    method: 'post',
    url: `${URL}/articles`,
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
    url: `${URL}/articles/${id}`,
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
    url: `${URL}/articles/${id}`,
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
    url: `${URL}/articles/mine`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const articlesData = resp.data
  return articlesData
}
