import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import styled from 'styled-components';
import Link from 'next/link';
import InstitutionalFooter from '../src/components/Footer/institutionalFooter';

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
  div.embeded {
    overflow: hidden;
    margin: 0px -20px 30px -20px;
    padding: 0;
    position: relative;
    padding-bottom: 50%;
    width: clamp(200px, 80vw, 600px);
    height: clamp(150px, 30vh, 500px);
  }
  div.embeded > iframe {
    position: absolute;

    width: 100%;
    height: 100%;

    border: 1px solid black;
    border-radius: 5px;
  }
  div.embeded > p {
    position: relative;
    bottom: 0;
  }
`;

function Podcasts() {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            <div>
              <h2>Podcasts 2022</h2>
            </div>
            <div className="embeded">
              <iframe src="https://www.youtube.com/embed/videoseries?list=PLuCaaySadmfairnrOPQdMUzxWnOzVmSQ6"></iframe>
            </div>
            <div>
              <h2>Podcasts 2021</h2>
            </div>
            <div className="embeded">
              <iframe src="https://www.youtube.com/embed/videoseries?list=PLuCaaySadmfbqLxO6Yn7shobzN90sswr7"></iframe>
            </div>
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
}

export default Podcasts;
