import { FullbannerSvg } from "../../assets/icons";
import AboutUsIcon from "../../assets/icons/AboutUsIcon";
import { MockShelf } from "../../mock/MockShelf";
import { IProducts, IShelf } from "../../types/Shelf";
import "./styles/shelf.scss";

function Shelf() {
  const formatPrice = (value: string) => {
    value = value.toString();
    const parts = value.split(",");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const valueFormatted = parts.join(",");

    return "R$ " + valueFormatted;
  };
  return (
    <section className="shelf" id="shelf">
      <div className="shelf_svgOne">
        <FullbannerSvg />
      </div>
      <div className="shelf_svgTwo">
        <AboutUsIcon />
      </div>
      <div className="shelf_content">
        {MockShelf.map((item: IShelf) => {
          const { title, products } = item;

          return (
            <>
              <h2 className="shelf_title">{title}</h2>
              <nav className="shelf_products">
                <ul className="shelf_products-list">
                  {products.map((item: IProducts) => {
                    const { flag, img, name, listPrice, price, installment } =
                      item;

                    const priceFormatted = price.toFixed(2).replace(".", ",");
                    const listPriceFormatted = listPrice
                      .toFixed(2)
                      .replace(".", ",");

                    return (
                      <li className="shelf_products-item">
                        <div className="shelf_products-image">
                          <p className="shelf_products-flag">{flag}</p>
                          <img src={img} />
                        </div>
                        <div className="shelf_products-info">
                          <p className="shelf_products-name">{name}</p>
                          <div className="shelf_products-prices">
                            <p className="shelf_products-listPrice">
                              {formatPrice(listPriceFormatted)}
                            </p>
                            <p className="shelf_products-price">
                              {formatPrice(priceFormatted)}
                            </p>
                          </div>
                          {installment ? (
                            <p className="shelf_products-installment">
                              ou em {installment} de R$
                              {(listPrice / installment)
                                .toFixed(2)
                                .replace(".", ",")}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Shelf;
