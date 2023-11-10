export interface IHeader {
  logo: string;
  menu: IHeaderMenu[];
}

export interface IHeaderMenu {
  title: string;
  submenu?: IHeaderSubmenu[];
}

export interface IHeaderSubmenu {
  title: string;
  img: string;
}
