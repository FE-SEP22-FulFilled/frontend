import { Phone } from './Phone';

export interface DataFromApi {
  next: {
    page: number,
    limit: string,
  }
  prev?: {
    page: number,
    limit: string,
  }

  results: Phone[],
}
