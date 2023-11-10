import { HeaderSvg } from "../../../assets/icons";
import { MockHeader } from "../../../mock/MockHeader";
import { IHeader, IHeaderMenu, IHeaderSubmenu } from "../../../types/Header";
import "./styles/header.scss";

function Header() {
  return (
    <header className="header">
      <HeaderSvg />
      {MockHeader.map((item: IHeader) => {
        const { logo, menu } = item;
        return (
          <div className="header_content">
            <img src={logo} alt="Elétrica J.Santos" className="header_logo" />
            <nav className="header_menu">
              <ul className="header_menu-list">
                {menu.map((item: IHeaderMenu) => {
                  const { title, submenu } = item;

                  return (
                    <li className="header_menu-item">
                      <p className="header_menu-title">{title}</p>
                      {submenu ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z"
                              fill="black"
                            />
                          </svg>
                          <div className="header_submenu">
                            <nav className="header_submenu-nav">
                              <ul className="header_submenu-list">
                                {submenu?.map((item: IHeaderSubmenu) => {
                                  const { title, img } = item;
                                  return (
                                    <li className="header_submenu-item">
                                      <div className="header_submenu-imageBlock">
                                        <img
                                          src={img}
                                          alt={title}
                                          className="header_submenu-image"
                                        />
                                      </div>
                                      <p className="header_submenu-title">
                                        {title}
                                      </p>
                                    </li>
                                  );
                                })}
                              </ul>
                            </nav>
                          </div>
                        </>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        );
      })}
    </header>
  );
}

export default Header;
