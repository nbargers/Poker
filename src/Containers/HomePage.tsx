import React from "react";
import  Header  from '../components/Header'
import Game from '../Containers/Game';

const HomePage = (): JSX.Element => {

  return (
    <>
      <Header />
      <Game />
    </>
  );
};

export default HomePage;
