import { IHeader } from "../types/Header";

export const MockHeader: IHeader[] = [
  {
    logo: "/src/assets/images/logo.png",
    menu: [
      {
        title: "Home",
      },
      {
        title: "Categorias",
        submenu: [
          {
            title: "Lâmpadas",
            img: "/src/assets/images/lamp.png",
          },
          {
            title: "Lutres",
            img: "/src/assets/images/chandeliers.png",
          },
          {
            title: "Luminárias",
            img: "/src/assets/images/lamps.png",
          },
          {
            title: "Decorações",
            img: "/src/assets/images/decorations.png",
          },
          {
            title: "Acessórios",
            img: "/src/assets/images/accessories.png",
          },
          {
            title: "Ferramentas",
            img: "/src/assets/images/tools.png",
          },
          {
            title: "Utensílios Domésticos",
            img: "/src/assets/images/utensils.png",
          },
          {
            title: "Cabos",
            img: "/src/assets/images/cables.png",
          },
        ],
      },
      {
        title: "Sobre",
      },
      {
        title: "Localização",
      },
      {
        title: "Contato",
      },
    ],
  },
];
