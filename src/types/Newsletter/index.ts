export interface INewsletter {
  background: string;
  banner: string;
  link: INewsletterLink[];
}

export interface INewsletterLink {
  link: string;
  text: string;
}
