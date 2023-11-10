import Fullbanner from "../components/Fullbanner";
import Shelf from "../components/Shelf";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <main className="home">
      <Fullbanner />
      <Shelf />
      <Categories />
      <AboutUs />
      <Newsletter />
    </main>
  );
}

export default Home;
