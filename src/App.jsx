// import "./App.css";
import CardContainer from "./Components/CardContainer";
import ChatApp from "./Components/ChatApp";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import NewsSlider from "./Components/NewsSlider";
import TabsComponent from "./Components/TabComponent";
import TabNavs from "./Components/TabNavs1";
import TextContent1 from "./Components/TextContent1";
import VideoHeader from "./Components/VideoHeader";
import CardGrid from "./Components/Sahil/CardGrid";
import { useEffect,useState } from "react";
import TextContent from "./Components/Sahil/TextContent";
import AccordionsComponent from "./Components/AccordionsComponent";
import Footer from "./Components/Footer";
import EventGrid from "./Components/EventGrid";
import ImageGrid from "./Components/ImageGrid";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

 
  return (
    <>

    {/* Loading screen */}
    {loading && <Loading loading = {loading} />}
      <Navbar/>
      <VideoHeader/>
      {/* <Header/> */}

      <TextContent/>
      <EventGrid/>
      <TabsComponent/>
      <CardGrid/>
      <TextContent1/>
      <ChatApp/>
      {/* <CardContainer/> */}
      <ImageGrid/>



      <NewsSlider/>


      

      <AccordionsComponent/>
      <Footer/>


    </>
    
  );
}

export default App;
