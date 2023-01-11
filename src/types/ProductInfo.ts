export type Description = {
  title: string;
  text: string[];
};

export type Color =
  | 'spacegray'
  | 'midnight'
  | 'midnightgreen'
  | 'rosegold'
  | 'black'
  | 'silver'
  | 'gold'
  | 'coral'
  | 'yellow'
  | 'white'
  | 'red'
  | 'green'
  | 'purple';

export interface ProductInfo {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: Color[];
  color: Color;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: number;
  zoom: string;
  cell: string[];
}
