export interface IShelf {
  title: string;
  products: IProducts[];
}

export interface IProducts {
  flag: string;
  img: string;
  name: string;
  price: number;
  listPrice: number;
  installment?: number;
}
