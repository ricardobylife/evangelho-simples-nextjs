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
    padding: 2rem 2rem 2rem 2rem;
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
    visibility: visible;
  }
  .typeI {
    margin-left: 1rem;
  }
`;

function Believes(props) {
  return (
    <>
      <Header />
      <Main>
        <section className="institutional">
          <div className="contempt textWork">
            <h2>O que cremos</h2>
            <ol>
              <li>
                A existência de um só e eterno Deus: Pai, Filho e Espírito
                Santo, um em essência e trino em pessoas.
                <ol className="typeI" type="I">
                  <li>
                    Deus Pai, eterno, criador e sustentador de todo o universo,
                    onipotente, onisciente e onipresente, santo, soberano sobre
                    tudo e todos, antes e agora, e para todo o sempre;
                  </li>
                  <li>
                    Deus Filho, eterno, criador, unigênito de Deus Pai,
                    encarnado, imaculado, Cordeiro de Deus, morto e ressurreto,
                    único mediador entre Deus e os homens;
                  </li>
                  <li>
                    Deus Espírito Santo, eterno, derramado sobre toda a
                    humanidade. Deus que habita a Igreja, consolador,
                    intercessor, que atua para convencer o homem de seu pecado,
                    da justiça em Cristo, e do juízo de Deus, que unge e
                    capacita a Igreja para a continuidade da missão de Jesus
                    Cristo no mundo.
                  </li>
                </ol>
              </li>
              <li>
                A inspiração divina, veracidade e integridade da Bíblia (66
                livros conforme Concílio de Trento, no século XVI), tal como foi
                revelada originalmente, e sua suprema autoridade em assuntos de
                fé e conduta.
              </li>
              <li>
                A criação do universo em perfeita harmonia, e do ser humano à
                imagem e semelhança de Deus.
              </li>
              <li>
                A pecaminosidade universal e a culpabilidade de todos os homens,
                desde a queda de Adão, e a conseqüente sujeição de todos os
                homens à ira da condenação de Deus, e à corrupção e degeneração
                de todo o universo criado.
              </li>
              <li>
                A redenção da culpabilidade, pena, domínio e corrupção do
                pecado, somente por meio do Senhor Jesus Cristo, o Cordeiro de
                Deus, nosso representante substituto, que através de sua morte
                expiatória – seu corpo partido e seu sangue derramado – satisfez
                a justiça de Deus e triunfou sobre a morte, o Diabo e seus anjos
                maus, libertando todos os seres humanos para toda a eternidade.
              </li>
              <li>
                A ressurreição corporal do Senhor Jesus Cristo e sua ascensão à
                direita de Deus Pai.
              </li>
              <li>
                A justificação do pecado somente pela graça de Deus, por meio da
                fé em Jesus Cristo, mediante ação do Espírito Santo.
              </li>
              <li>
                A única igreja santa e universal, que é o corpo de Cristo, sendo
                Ele mesmo seu edificador e Cabeça, e que, na terra, se manifesta
                através de comunidades cristãs locais, às quais pertencem todos
                os que crêem.
              </li>
              <li>
                O reino de Deus como domínio de Deus, de fato e de direito,
                sobre tudo e todos, inaugurado na história por meio de Jesus
                Cristo e manifesto por meio de sua Igreja, e que se consumará na
                eternidade para a glória de Deus Pai.
              </li>
              <li>
                A missão da Igreja como extensão da missão de Jesus Cristo, a
                saber, “levar o evangelho todo para o homem todo”, convocando
                todos os homens à participação no reino de Deus.
              </li>
              <li>
                A segurança da segunda vinda de Jesus Cristo em corpo
                glorificado; a ressurreição dos mortos e a consumação do eterno
                reino de Deus.
              </li>
            </ol>
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
}

export default Believes;
