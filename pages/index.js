import Head from 'next/head';
import Image from 'next/image';
import Header from '../src/components/Header';
import MainNav from '../src/components/MainNav';
import Logo from '../src/components/Logo';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Evangelho Simples</title>
        <meta name="description" content="Comunidade do Evangelho Simples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="headerLogoNav">
        <Header />
      </header>

      <main className="contContainer">
        <section className="container" id="mainNav">
          <div id="mainList">
            <MainNav />
          </div>
          <div id="mainLogo">
            <Logo />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
