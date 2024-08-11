import Banner from "./component/Banner";
import Header from "./component/Header";
import './index.css';
import Export from "./component/Export";
import Newsletter from "./component/Newsletter";
import Plan from "./component/Plan";
import Footer from"./component/Footer";
import Cards from "./component/Cards";
import Hero from "./component/Hero";
function App() {
  return (
    <>
  
      <Header />
      <Banner/>
      <Export/>
      <Hero/>
      <Newsletter/>
      <Plan/>
      <Cards/>
      <Footer/>
    </>
  );
}
export default App;
