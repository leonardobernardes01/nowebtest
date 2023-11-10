import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  FooterSvg,
  NowebIcon,
} from "../../../assets/icons";
import "./styles/footer.scss";

import { MockFooter } from "../../../mock/MockFooter";
import { IFooter, IFooterDeveloped } from "../../../types/Footer";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_svg">
        <FooterSvg />
      </div>
      <div className="footer_container">
        {MockFooter.map((item: IFooter) => {
          const { logo, description, copyright, developedBy } = item;
          return (
            <>
              <div className="footer_firstRow">
                <div className="footer_infos">
                  <img
                    src={logo}
                    alt="Elétrica J.Santos"
                    className="footer_logo"
                  />
                  <p className="footer_description">{description}</p>
                </div>
                <div className="footer_social">
                  <p className="footer_social-text">nos siga nas redes</p>
                  <nav className="footer_social-nav">
                    <ul className="footer_social-list">
                      <li className="footer_social-item">
                        <WhatsappIcon />
                      </li>
                      <li className="footer_social-item">
                        <InstagramIcon />
                      </li>
                      <li className="footer_social-item">
                        <FacebookIcon />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="footer_secondRow">
                <p className="footer_copyright">{copyright}</p>
                {developedBy.map((item: IFooterDeveloped) => {
                  const { link, text } = item;
                  return (
                    <a href={link} target="_blank" className="footer_link">
                      {text}
                      <NowebIcon />
                    </a>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
