import axios from 'axios';

const URL = 'http://localhost:3001/brands'

export const getAllBrands = async () => {
  const resp = await axios({
    method: 'get',
    url: `${URL}`,
  });
  const brandsData = resp.data
  return brandsData
}

export const getBrand = async (id) => {
  const resp = await axios({
    method: 'get',
    url: `${URL}/${id}`,
  });
  const brandsData = resp.data
  return brandsData
}

export const createBrands = async (brands,token) => {
  const resp = await axios({
    method: 'post',
    url: URL,
    data: {brand: brands},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const brandsData = resp.data
  return brandsData
}

export const updateBrand = async (id,data,token) => {
  const resp = await axios({
    method: 'put',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {brand: data},
  });
  const brandsData = resp.data
  return brandsData
}

export const deleteBrand = async (id,data,token) => {
  const resp = await axios({
    method: 'delete',
    url: `${URL}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {brand: data},
  });
  const brandsData = resp.data
  return brandsData
}
