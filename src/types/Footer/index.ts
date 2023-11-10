export interface IFooter {
  logo: string;
  description: string;
  copyright: string;
  developedBy: IFooterDeveloped[];
}

export interface IFooterDeveloped {
  text: string;
  link: string;
}
