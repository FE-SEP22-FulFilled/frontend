import { DataFromApi } from '../types/DataFromApi';
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
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url;

  return wait(300)
    .then(() => fetch(fullURL))
    .then((response) => {
      if (!response.ok) {
        // eslint-disable-next-line max-len
        throw new Error('Data can not be loaded from server');
      }

      const data = response.json();

      // // eslint-disable-next-line no-console
      // console.log(data);

      return data;
    });
}

export const getPhones = () => get<DataFromApi>('/products');
// export const getTablets = () => get<Tablet[]>('/tablets');
// export const getAccesories = () => get<Accessory[]>('/accesories');
