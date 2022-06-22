import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import styled from 'styled-components';
import Link from 'next/link';

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
    position: relative;
  }
  h2 {
    padding-bottom: 1em;
  }
  .textWork {
    position: relative;
    text-indent: 1em;
    visibility: visible;
  }
  div.map {
    overflow: hidden;
    margin: 0px -20px 30px -20px;
    padding: 0;
    position: relative;
    padding-bottom: 50%;
  }
  div.map > iframe {
    position: absolute;

    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: 5px;
  }
  div.map > p {
    position: relative;
    bottom: 0;
  }
`;

function Map() {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            <div>
              <h2>Localização</h2>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4461381280894!2d-45.55884394906372!3d-23.00738584717959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf94967763ba3%3A0x9f232850f4726d5f!2sComunidade%20do%20Evangelho%20Simples!5e0!3m2!1spt-BR!2sbr!4v1655917991997!5m2!1spt-BR!2sbr"></iframe>
            </div>
            <div>
              <a href="https://goo.gl/maps/KSi8PmwziqSMk7NU7" target="blank">
                <p>
                  Rua Dona Déa Ciambrone Girardi, 30 - São Jorge, Taubaté - SP,
                  12060-721
                </p>
              </a>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Map;
