import Carouselle from "../../components/carouselle/Carouselle";
import About from "./about/About";
import MyCustomNavbar from "../../components/navbar/Navbar";
import "./home.css";
import Products from "./products/Products";
import Contacts from "./contact/Contacts";
import Footer from "../../components/footer/Footer";
import useAboutData from "../../hooks/useAboutData";
import useProductData from "../../hooks/useProductData";
import useCarouselleData from "../../hooks/useCarouselledata";
import FlowerAnimation from "../../animations/FlowerAnimation";
import useContactInfo from "../../hooks/useFetchContactinformation";
import Newsletter from "./newsletter/Newsletter";

const Homepage = () => {
  const { data, loading } = useAboutData();
  const { products, isProductLoading } = useProductData();
  const { carouselleSlides, isCarouselleLoading } = useCarouselleData();
  const { data: contactinfo, loading: contactinfoLoading } = useContactInfo();

  const showLoadingAnimation =
    loading || isCarouselleLoading || isProductLoading || contactinfoLoading;

  return (
    <div className="homepage">
      {showLoadingAnimation ? (
        <div className="animation__container">
          <FlowerAnimation />
        </div>
      ) : (
        <>
          <MyCustomNavbar />
          <Carouselle carouselleSlides={carouselleSlides} />
          <About data={data} />
          <Products products={products} />
          <Newsletter />
          <Contacts data={contactinfo} />
          <Footer data={contactinfo} />
        </>
      )}
    </div>
  );
};

export default Homepage;
