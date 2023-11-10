export interface IFullbanner {
  banner: string;
  title: string;
  description: string;
  ourProducts: IFullbannerButtons[];
  aboutUs: IFullbannerButtons[];
}

export interface IFullbannerButtons {
  title: string;
  link: string;
}
