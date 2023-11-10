import CategoriesSvg from "../../assets/icons/CategoriesSvg";
import { MockCategories } from "../../mock/MockCategories";
import { ICategories, ICategoriesItems } from "../../types/Categories";
import "./styles/categories.scss";

function Categories() {
  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories_svg">
          <CategoriesSvg />
        </div>
        {MockCategories.map((item: ICategories) => {
          const { items, title } = item;
          return (
            <>
              <h2 className="categories_title">{title}</h2>
              <nav className="categories_nav">
                <ul className="categories_list">
                  {items.map((item: ICategoriesItems) => {
                    const { img, title } = item;

                    return (
                      <li className="categories_item">
                        <p className="categories_item-title">{title}</p>
                        <div className="categories_item-imageBlock">
                          <img
                            src={img}
                            alt={title}
                            className="categories_item-image"
                          />
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

export default Categories;
