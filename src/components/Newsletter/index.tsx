import { FullbannerSvg } from "../../assets/icons";
import { MockNewsletter } from "../../mock/MockNewsletter";
import { INewsletter, INewsletterLink } from "../../types/Newsletter";
import "./styles/newsletter.scss";

function Newsletter() {
  return (
    <section className="newsletter">
      {MockNewsletter.map((item: INewsletter) => {
        const { background, banner, link } = item;

        return (
          <>
            <div className="newsletter_backgroundBlock">
              <img
                src={background}
                alt="Acione nosso televendas"
                className="newsletter_background"
              />
            </div>
            <div className="newsletter_content">
              <div className="newsletter_banners">
                <img src={banner} className="newsletter_banners-img" />
                <div className="newsletter_banners-svg">
                  <FullbannerSvg />
                </div>
              </div>
              {link.map((item: INewsletterLink) => {
                const { link, text } = item;
                return (
                  <a href={link} className="newsletter_link">
                    {text}
                  </a>
                );
              })}
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Newsletter;
