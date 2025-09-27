import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./assets/Component/Navbar/Banner/Banner";
import Footer from "./assets/Component/Navbar/Footer/Footer";
import Main_part from "./assets/Component/Navbar/Main_Part/Main_part";
import Navbar from "./assets/Component/Navbar/Navbar";




function App() {

  const [Count , setCount] =useState(0)
  const [customerSupport, setCustomerSupport] = useState([]);
  const [complateCount , setComplateCount]= useState(0)

 

  useEffect(() => {
    fetch("/Service.json")
      .then((res) => res.json())
      .then((data) => setCustomerSupport(data));
  }, []);


  return (
    <>
      <Navbar></Navbar>

      <Banner Count={Count} complateCount={complateCount} ></Banner>

      <Main_part customerSupports={customerSupport} setCount={setCount} setComplateCount={setComplateCount} setCustomerSupport={setCustomerSupport}  ></Main_part>
      <Footer></Footer>

      
      
    </>
  );
}

export default App;
