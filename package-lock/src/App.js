import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Homepage";
import LoginForm from "./component/loginform";
import RegisterForm from "./component/Registerform";
import About from "./component/About";
import Collections from "./component/Collections";
import Slider from "./component/Slider";
import Service from "./component/Service";

import Teamspot1 from "./component/c1";
import Teamspot2 from "./component/c2";
import Teamspot3 from "./component/c3";
import Teamspot5 from "./component/c5";
import Teamspot from "./component/cards1";
import MovieCard from "./component/moviedetails";
import MovieDetails from "./component/moviedetails";
import TextToSpeech from "./component/textspeech";
import Dictaphone from "./component/speechtotext";
import MovieCardspeech from "./component/textspeech";
import Pricing from "./component/Supscription";
import Details from "./component/Details";
import Payment from "./component/Payments";
import OMDb from "./component/omdb";
import Genres from "./component/genrebased";
import { CarouselSpacing } from "./component/Carousel";
import FavoritesPage from "./component/FavoritesPage";
import VideoPage from "./component/VideoPage";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/videopage/:id" element={<VideoPage/>} />
    <Route path="/Details" element={<Details/>} />
    <Route path="/searchresults" element={<OMDb/>} />
    <Route path="/movie/:id" element={<MovieDetails/>} />
      <Route path="/" element={<MovieCard/>} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/Register" element={<RegisterForm />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/explore" element={<Teamspot/>}/>
      <Route path="/About" element={<About />} />
      <Route path="/Subscription" element={<Pricing/>} />
      <Route path="/Collections" element={<Collections />} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/Slider" element={<Slider />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/card1" element={<Teamspot1/>} />
      <Route path="/card2" element={<Teamspot2/>} />
      <Route path="/card3" element={<Teamspot3/>} />
      <Route path="/card5" element={<Teamspot5/>}/>
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
        </>
  );
}