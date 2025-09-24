import "./App.css";
import Banner from "./assets/Component/Navbar/Banner/Banner";
import Footer from "./assets/Component/Navbar/Footer/Footer";
import Main_part from "./assets/Component/Navbar/Main_Part/Main_part";
import Navbar from "./assets/Component/Navbar/Navbar";

function App() {
  return (
    <>     
      <Navbar></Navbar>
      <Banner></Banner>
      <Main_part></Main_part>
      <Footer></Footer>
    </>
  );
}

export default App;
