import { Phone } from '../types/Phone';
// import { Tablet } from '../types/Tablet';
// import { Accessory } from '../types/Accessory';

const BASE_URL = 'https://';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url + '.json';

  return wait(300)
    .then(() => fetch(fullURL))
    .then((response) => {
      if (!response.ok) {
        // eslint-disable-next-line max-len
        throw new Error('Data can not be loaded from server. We are fixing it');
      }

      return response.json();
    });
}

export const getPhones = () => get<Phone[]>('/phones');
// export const getTablets = () => get<Tablet[]>('/tablets');
// export const getAccesories = () => get<Accessory[]>('/accesories');
