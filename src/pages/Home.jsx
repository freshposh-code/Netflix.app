import React from "react";
import requests from "../Request";
import Footer from "../component/Footer";
import Main from "../component/Main";
import Row from "../component/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Now Playing" fetchURL={requests.requestMovie} />
      <Footer />
    </>
  );
};

export default Home;
