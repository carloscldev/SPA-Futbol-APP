import React from "react";
import Ligas from "../componentes/Ligas";

export default class LigasPagina extends React.Component {
  render() {
    return (
      <>
        <section class="header-liga">
          <div class="container justify-content-center align-items-center">
            <div class="row justify-content-between">
              <div class="col-lg-3 d-flex flex-row justify-content-center align-items-center">
                <div class="header-left">
                  <p class="text">Ligas de Fútbol</p>
                </div>
              </div>
              <div class="col-lg-3 mx-5">
                <div class="header">
                  <p class="text"> Ligas Europeas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Ligas
          nombreLiga="Premier League Inglésa"
          img="./img/premier_league.png"
          descripcionLiga="La división de mayor nivel en Inglaterra. Fundada en 1992 (antes English Football League)."
        />
        <Ligas
          nombreLiga="La Liga Española"
          img="./img/la_liga.png"
          descripcionLiga="La liga de futból española. Fundada en 1929."
        />
        <Ligas
          nombreLiga="Serie A Italiana"
          img="./img/serie_a.jpg"
          descripcionLiga="La división de mayor nivel en Italia. Fundada en 1929."
        />
        <Ligas
          nombreLiga="Bundesliga Alemana"
          img="./img/bundesliga.png"
          descripcionLiga="La división de mayor nivel en Alemanía. Fundada en 1963."
        />
        <Ligas
          nombreLiga="Ligue 1 Francesa"
          img="./img/ligue_1.jpg"
          descripcionLiga="La división de mayor nivel en Francia. Fundada en 2002 (antes Division 1)."
        />
        <Ligas
          nombreLiga="Primeria Liga Portuguesa"
          img="./img/primeira_liga.jpg"
          descripcionLiga="La división de mayor nivel en Portugal. Fundada en 1934."
        />
        <Ligas
          nombreLiga="Scottish Premiership Escocesa"
          img="./img/Scottish_Premiership.png"
          descripcionLiga="La división de mayor nivel en Escocia. Fundada en 1890 (conocida como Scottish Championship)."
        />
        <Ligas
          nombreLiga="Ekstraklasa Polaca"
          img="./img/ekstraklasa.jpeg"
          descripcionLiga="La división de mayor nivel en Polonia. Fundada en 1927 (antes Polska Liga Piłki Nożnej)."
        />
        <Ligas
          nombreLiga="Super League Griega"
          img="./img/super_league.png"
          descripcionLiga="La división de mayor nivel en Grecia. Fundada en 1959 (antes A National)."
        />
        <Ligas
          nombreLiga="Süper Lig Turca"
          img="./img/superlig.png"
          descripcionLiga="La división de mayor nivel en Turquia. Fundada en 1959 (antes Milli Lig)."
        />
        <Ligas
          nombreLiga="Premjer-Liga Rusa"
          img="./img/russian_premier.png"
          descripcionLiga="La división de mayor nivel en Rusia. Fundada en 1992."
        />
        <Ligas
          nombreLiga="Raiffeisen Football League Suiza"
          img="./img/swiss_football_league.jpeg"
          descripcionLiga="La división de mayor nivel en Suiza. Fundada en 1898 (antes Swiss Serie A)."
        />
        <Ligas
          nombreLiga="Premier League Ucraniana"
          img="./img/ukrainian_premier_league.jpeg"
          descripcionLiga="La división de mayor nivel en Ucrania. Fundada en 2008 (antes Vyshcha Liha)."
        />
        <Ligas
          nombreLiga="Prva Liga Croata"
          img="./img/prva_liga.jpeg"
          descripcionLiga="La división de mayor nivel en Croacia. Fundada en 1991 tras el cierre de la Primera Liga Yugoslava. Se abrevia comúnmente como Prva HNL."
        />
        <Ligas
          nombreLiga="SuperLiga Serbia"
          img="./img/superliga_serbia.png"
          descripcionLiga="La división de mayor nivel en Serbia. Fundada en 2007."
        />
        <Ligas
          nombreLiga="Premijer Liga de Bosnia y Herzegovina"
          img="./img/Mtel_Premijer_Liga.png"
          descripcionLiga="La división de mayor nivel en Bosnia y Herzegovina. Fundada en 2000."
        />
      </>
    );
  }
}
