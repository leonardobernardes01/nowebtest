import AboutUsIcon from "../../assets/icons/AboutUsIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import { MockAboutUs } from "../../mock/MockAboutUs";
import { IAboutUs, IAboutUsLink } from "../../types/AboutUs";
import "./styles/aboutus.scss";

function AboutUs() {
  return (
    <section className="aboutus">
      {MockAboutUs.map((item: IAboutUs) => {
        const { title, description, img, link } = item;

        const descriptionFormatted = description
          .split("\n")
          .map((paragraph, index) => (
            <p className="aboutus_description" key={index}>
              {paragraph}
            </p>
          ));

        return (
          <>
            <div className="aboutus_svg">
              <AboutUsIcon />
            </div>
            <h2 className="aboutus_title">{title}</h2>
            <div className="aboutus_content">
              <div className="aboutus_banner">
                <img src={img} className="aboutus_image" />
                <div className="aboutus_banner-svg">
                  <LikeIcon />
                </div>
              </div>
              <div className="aboutus_info">
                <div className="aboutus_descriptionBlock">
                  {descriptionFormatted}
                </div>
                {link.map((item: IAboutUsLink) => {
                  const { link, text } = item;
                  return (
                    <a href={link} className="aboutus_link">
                      {text}
                    </a>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default AboutUs;
