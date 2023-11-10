import FullbannerSvg from "../../assets/icons/FullbannerSvg";
import { TagIcon, Ratings } from "../../assets/icons";
import { MockFullbanner } from "../../mock/MockFullbanner";
import { IFullbanner, IFullbannerButtons } from "../../types/Fullbanner";
import "./styles/fullbanner.scss";

function Fullbanner() {
  const scrollToSection = () => {
    const pointToScroll = document.getElementById("shelf");
    let position;

    if (pointToScroll) {
      position = pointToScroll.offsetTop;
    }

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };
  return (
    <section className="fullbanner">
      <div className="fullbanner_content">
        {MockFullbanner.map((item: IFullbanner) => {
          const { banner, title, description, ourProducts, aboutUs } = item;
          return (
            <>
              <div className="fullbanner_imgBlock">
                <img src={banner} alt={title} className="fullbanner_img" />
              </div>
              <div className="fullbanner_infos">
                <h2 className="fullbanner_infos-title">{title}</h2>
                <p className="fullbanner_infos-description">{description}</p>
                {ourProducts.map((item: IFullbannerButtons) => {
                  const { title, link } = item;
                  return (
                    <a href={link} className="fullbanner_infos-buttonProducts">
                      {title}
                    </a>
                  );
                })}
                {aboutUs.map((item: IFullbannerButtons) => {
                  const { title, link } = item;
                  return (
                    <a href={link} className="fullbanner_infos-buttonAbout">
                      {title}
                    </a>
                  );
                })}
                <button
                  className="fullbanner_infos-scroll"
                  onClick={() => scrollToSection()}
                >
                  <svg
                    className="fullbanner_infos-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5 5.19531C18.4061 5.19531 19.1406 5.92985 19.1406 6.83594V24.2032L26.1837 17.1602C26.8244 16.5195 27.8631 16.5195 28.5038 17.1602C29.1446 17.8009 29.1446 18.8397 28.5038 19.4804L18.6601 29.3242C18.0194 29.9649 16.9806 29.9649 16.3399 29.3242L6.49615 19.4804C5.85544 18.8397 5.85544 17.8009 6.49615 17.1602C7.13685 16.5195 8.17564 16.5195 8.81634 17.1602L15.8594 24.2032V6.83594C15.8594 5.92985 16.5939 5.19531 17.5 5.19531Z"
                      fill="white"
                    />
                  </svg>{" "}
                  Role para ver mais
                </button>
              </div>
            </>
          );
        })}
        <div className="fullbanner_image">
          <img
            src="/src/assets/images/womanBanner.png"
            alt=""
            className="fullbanner_person"
          />
          <div className="fullbanner_product">
            <div className="fullbanner_product-tag">
              <TagIcon />
            </div>
            <img
              src="/src/assets/images/lampBanner.png"
              alt=""
              className="fullbanner_product-image"
            />
          </div>
          <div className="fullbanner_ratings">
            <Ratings />
          </div>
          <div className="fullbanner_svgOne">
            <FullbannerSvg />
          </div>
          <div className="fullbanner_svgTwo">
            <FullbannerSvg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fullbanner;
