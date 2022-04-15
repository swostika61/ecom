interface IProducts {
  id?: number | string;
  description?: number;
  image?: string;
  title?: string;
  price?: number;
  category?: string;
  rating?: {
    count: number;
    rate: number;
  };
}
