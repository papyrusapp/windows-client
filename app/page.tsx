"use client";

import Title from "./title/title";
import Note from "./note/note";
import Menu from "./menu/menu";
import { Main } from "./style";

const Home = () => {
  return (
    <>
      <Title />
      <Main>
        <Menu />
        <Note />
      </Main>
    </>
  );
}

export default Home;
