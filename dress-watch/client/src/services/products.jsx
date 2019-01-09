import axios from 'axios';

const URL = 'http://localhost:3001/products'

export const getAllProducts = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const productsData = resp.data
  return productsData
}

export const getProduct = async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/${id}`,
  });
  const productsData = resp.data
  return productsData
}

export const createProducts = async (products,token) => {
  const resp = await axios({
    method: 'post',
    url: URL,
    data: {product: products},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const productsData = resp.data
  return productsData
}

export const updateProduct = async (id,data,token) => {
  const resp = await axios({
    method: 'put',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {product: data},
  });
  const productsData = resp.data
  return productsData
}

export const deleteProduct = async (id,data,token) => {
  const resp = await axios({
    method: 'delete',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {product: data},
  });
  const productsData = resp.data
  return productsData
}
