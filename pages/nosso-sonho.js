import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import styled from 'styled-components';

const Main = styled.div`
  .institutional {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contempt {
    max-height: fit-content;
    padding: 2em;
    text-align: justify;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    max-width: 850px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    font-family: 'Poppins', sans-serif;
    height: fit-content;
    margin-top: 3em;
    margin-bottom: 3em;
  }
  h2 {
    padding-bottom: 1em;
  }
  .textWork {
    position: relative;
    text-indent: 1em;
    visibility: visible;
  }
`;

function Dream(props) {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            <h2>Nosso Sonho</h2>
            <p className="textWork">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel dolor hic commodi, doloremque cumque voluptatibus
              fugiat, pariatur, ea quis ullam nostrum placeat ratione est veniam
              vero adipisci officiis officia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vero quidem eaque accusantium
              sapiente possimus autem magnam nisi? Esse quidem id nulla sit non.
              Cumque, delectus non. Et porro fugit est. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Minus animi harum iste ad,
              amet, a corrupti quis eum et, corporis pariatur repellat!
              Consequuntur velit maxime repudiandae et sunt sit aliquid? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
              assumenda repellendus, repudiandae, dolore voluptates inventore
              impedit, fuga ut nesciunt natus molestias minus. Quod pariatur
              eligendi quam nihil labore distinctio? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quisquam debitis impedit dignissimos
              dolore harum id distinctio repellat, maxime veritatis sint aliquid
              natus delectus odit labore ex quo, sit possimus voluptates? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Possimus Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel
              dolor hic commodi, doloremque cumque voluptatibus fugiat,
              pariatur,.
            </p>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Dream;
