import "./App.css";
import BlogSection1 from "./Components/BlogSection1";
import CardContainer from "./Components/CardContainer";
import CircularBorderComponent from "./Components/CircularBorderComponent";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import NewsSlider from "./Components/NewsSlider";
import TabsComponent from "./Components/TabComponent";
import TabNavs from "./Components/TabNavs1";
import TextContent1 from "./Components/TextContent1";
import VideoHeader from "./Components/VideoHeader";
import VideoSection2 from "./Components/VideoSection2";
import { useEffect,useState } from "react";

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
      {/* <Header/> */}
      <VideoHeader/>
      <VideoSection2/>
      <TextContent1/>
      <TabsComponent/>
      <CardContainer/>
      
      {/* <TabNavs/> */}
      {/* <BlogSection1/> */}
      <NewsSlider/>
      {/* <CircularBorderComponent/> */}




    </>
    
  );
}

export default App;
