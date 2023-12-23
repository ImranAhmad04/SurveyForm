import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "./Advanced/Card";
import MyCarousel from "./Pages/MyCarousel";
import Blog from "./Advanced/css/Blog";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
    <Route></Route>
    </Routes></BrowserRouter>
    
      <MyCarousel ></MyCarousel>

      <div
        class="row justify-content-center align-items-center g-2 m-5"
        id="about-us"
      >
        <div class="col-md-4">
          <Card
            img="Imran1.png"
            title="card-title-1"
            cardText="this is a sample text for card this is a sample text for card this is a sample text for card "
            cardBtn="go anywhere"
          ></Card>{" "}
        </div>
        <div class="col-md-4">
          <Card
            img="Imran1.PNG"
            title="card-title-2"
            cardText="this is a sample text for card this is a sample text for card this is a sample text for card "
            cardBtn="go anywhere "
          ></Card>
        </div>
        <div class="col-md-4">
          <Card
            img="Imran1.png"
            title="card-title-3"
            cardText="this is a sample text for card this is a sample text for card this is a sample text for card "
            cardBtn="go live"
          ></Card>
        </div>
        

        .<div
          class="row justify-content-center align-items-center g-2 mt-5">
          <div class="col-md-4"> 
          <Blog
          img="webd.webp"
          title="what is front-end-development"
          cardText="front-end-developer and backend developer are not equal.front-end means ....."
          btn="learn more "
        ></Blog>
        </div>
          <div class="col-md-4"> 
          <Blog
          img="web.webp"
          title="what is front-end-development"
          cardText="front-end-developer and backend developer are not equal.front-end means ....."
          btn="learn more "
        ></Blog>
        </div>  
          <div class="col-md-4"> 
          <Blog
          img="webd.webp"
          title="what is front-end-development"
          cardText="front-end-developer and backend developer are not equal.front-end means ....."
          btn="learn more "
        ></Blog>
        </div>  
        </div>
        
      </div>
    </>
  );
}

export default App;
