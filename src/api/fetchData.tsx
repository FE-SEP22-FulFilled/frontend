import { Phone } from '../types/Phone';
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

      if (!Array.isArray(data)) {
        const phones = data.then((res) => res.results);

        return phones;
      }

      return data;
    });
}

export const getPhones = () => get<Phone[]>('/products');
export const getPhoneById = (id: string) => get<Phone>(`/products/${id}`);

// export const getTablets = () => get<Tablet[]>('/tablets');
// export const getAccesories = () => get<Accessory[]>('/accesories');
