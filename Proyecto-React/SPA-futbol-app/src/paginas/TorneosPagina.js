import React from "react";
import Torneos from "../componentes/Torneos";
import "../styles.css";

export default class TorneosPagina extends React.Component {
  render() {
    return (
      <>
        <section class="header-liga">
          <div class="container justify-content-center align-items-center">
            <div class="row justify-content-between">
              <div class="col-lg-3 d-flex flex-row justify-content-center align-items-center">
                <div class="header-left">
                  <p class="text"> Torneos de Fútbol </p>
                </div>
              </div>
              <div class="col-lg-3 mx-5">
                <div class="header">
                  <p class="text"> Los torneos más importantes </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container py-3">
          <p class="text-center">
            He aquí un resumen de los torneos de fútbol más importantes,
            divididos en torneos de selecciones nacionales y torneos de clubes.
          </p>

          <div class="row py-3">
            <div class="col-auto text-center m-auto">
              <div>
                <h4>Torneos internacionales</h4>
                <Torneos
                  nombreTorneo="FIFA World Cup"
                  img="./img/fifa_world_cup.jpeg"
                  descripcionTorneo="El torneo de fútbol más prestigioso del mundo que se celebra cada cuatro años desde 1930 (con la excepción de una pausa durante la Segunda Guerra Mundial)."
                />
              </div>

              <Torneos
                nombreTorneo="UEFA European Championship"
                img="./img/uefa_european_cup.jpeg"
                descripcionTorneo="El torneo de fútbol de selecciones más prestigioso de Europa, que se celebra cada cuatro años desde 1960 y se ha ampliado de 4 a 24 equipos."
              />

              <Torneos
                nombreTorneo="Copa América"
                img="./img/copa_America.png"
                descripcionTorneo="Este campeonato de fútbol sudamericano se organiza desde 1916, convirtiendola en la competición de selecciones nacionales más antigua del mundo. Incluye a los diez países de la Conmebol, y desde 1990 se invita a equipos de toda América y Asia para completar el torneo de 12 equipos."
              />

              <Torneos
                nombreTorneo="AFC Asian Cup"
                img="./img/AFC_asian_cup.png"
                descripcionTorneo="La Copa Asiática es un campeonato de fútbol continental que se organiza desde 1956 y en el que participan todos los equipos de la confederación asiática."
              />
            </div>

            <div class="col-auto text-center m-auto">
              <div>
                <h4>Torneos de Clubes Europeos</h4>
                <Torneos
                  nombreTorneo="UEFA Champions League"
                  img="./img/champions_league.jpeg"
                  descripcionTorneo="El torneo más prestigioso para los clubes de fútbol europeos. Existe desde la temporada 1992-1993 (desde la temporada 1955-1956 si se cuenta su predecesora, la Copa de Europa)."
                />
              </div>

              <Torneos
                nombreTorneo="UEFA Europa League"
                img="./img/uefa_europa_league.png"
                descripcionTorneo="LUn torneo europeo de clubes que existe desde la temporada 2009-2010 (desde la temporada 1971-1972 si se cuenta su predecesora la Copa de la UEFA)."
              />

              <Torneos
                nombreTorneo="European Cup"
                img="./img/european_cup.png"
                descripcionTorneo="La competición, también conocida como Copa de Europa de Clubes Campeones, existió desde la temporada 1955-1956 hasta la temporada 1991-1992. Pasó a llamarse Liga de Campeones de la UEFA en 1992."
              />

              <Torneos
                nombreTorneo="UEFA Cup"
                img="./img/UEFA_cup.png"
                descripcionTorneo="Existió desde la temporada 1971-72 hasta la temporada 2008-2009. Pasó a llamarse UEFA Europa League en 2008."
              />
            </div>

            <div class="col-auto text-center m-auto">
              <div>
                <h4>Torneos Locales</h4>
                <Torneos
                  nombreTorneo="Emirates FA Cup"
                  img="./img/FA_Cup.png"
                  descripcionTorneo="La FA Cup, o Football Association Challenge Cup, es una competición anual entre clubes de fútbol ingleses que se disputó por primera vez en 1871-1872. Se conoce como el torneo más antiguo del fútbol."
                />
              </div>

              <Torneos
                nombreTorneo="Coppa Italia"
                img="./img/coppa_italia.png"
                descripcionTorneo="Un torneo nacional de fútbol italiano que se jugó por primera vez en 1922."
              />

              <Torneos
                nombreTorneo="Copa del Rey"
                img="./img/copa_del_rey.png"
                descripcionTorneo="La competición española más antigua, fundada en 1903. En la actualidad, el ganador se clasifica para la Europa League de la UEFA y también jugará contra el ganador de la Liga en la Supercopa de España."
              />

              <Torneos
                nombreTorneo="Taça de Portugal"
                img="./img/copa_del_rey.png"
                descripcionTorneo="Torneo de Portugal fundado en 1938. Precedido por el Campeonato de Portugal."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
