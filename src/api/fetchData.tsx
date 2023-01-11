import { Phone } from '../types/Phone';
import { ProductInfo } from '../types/ProductInfo';
// import { Tablet } from '../types/Tablet';
// import { Accessory } from '../types/Accessory';

// eslint-disable-next-line max-len
const BASE_URL
  = 'https:////soft-halva-33cecb.netlify.app/.netlify/functions/server';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  return wait(300)
    .then(() => fetch(fullURL))
    .then((response) => {
      if (!response.ok) {
        throw new Error('Data can not be loaded from server');
      }

      const data = response.json();

      const phones = data.then((res) => res.results);

      if (phones !== undefined) {
        return phones;
      }

      return data;
    });
}

function getOne<T>(url: string): Promise<T> {
  const fullURL = BASE_URL + url;

  return wait(300)
    .then(() => fetch(fullURL))
    .then((response) => {
      if (!response.ok) {
        throw new Error('Data can not be loaded from server');
      }

      const data = response.json();

      return data;
    });
}

export const getPhones = () => get<Phone[]>('/products');
export const getPhoneById = (id: string) => getOne<Phone>(`/products/${id}`);
export const getFullInfoById = (id: string) => getOne<ProductInfo>(`/products/${id}`);

export const getRecommended = (id: string) => getOne<Phone[]>(`/products/${id}/recomended`);

export const getPhonesByQuery = (page: number, limit = '8', sortBy = 'all') => get<Phone[]>(`/products?page=${page}&limit=${limit}&sortBy=${sortBy}`);

// export const getTablets = () => get<Tablet[]>('/tablets');
// export const getAccesories = () => get<Accessory[]>('/accesories');
