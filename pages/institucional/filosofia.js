import React from 'react';
import Header from '../../src/components/Header';
import styled from 'styled-components';
import InstitutionalFooter from '../../src/components/Footer/institutionalFooter';

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
    margin-top: 25vh;
    margin-bottom: 25vh;
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

function Philosofy(props) {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt">
            <h2>Filosofia de Ministério</h2>
            <p className="textWork">
              Amar a Deus servindo gente.
              <strong>
                {' '}
                Ensinando, envolvendo, encantando e engajando;
              </strong>{' '}
              para que o Reino seja estabelecido no homem todo, em nós, através
              de nós e apesar de nós; com linguagem simples e vida íntegra, sem
              discriminação; priorizando as relações.
            </p>
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
}

export default Philosofy;
