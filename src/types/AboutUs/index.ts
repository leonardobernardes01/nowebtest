export interface IAboutUs {
  title: string;
  img: string;
  description: string;
  link: IAboutUsLink[];
}

export interface IAboutUsLink {
  link: string;
  text: string;
}
