import React from "react";
import Inicio from "../componentes/Inicio";

export default class InicioPagina extends React.Component {
  render() {
    return (
      <>
        <section class="header-liga">
          <div class="container justify-content-center align-items-center">
            <div class="row justify-content-between">
              <div class="col-lg-3 d-flex flex-row justify-content-center align-items-center">
                <div class="header-left">
                  <p class="text"> Pagina SPA </p>
                </div>
              </div>
              <div class="col-lg-3 mx-5">
                <div class="header">
                  <p class="text"> Origen del Fútbol</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Inicio
          titulo="El Origen del Fútbol"
          img="./img/historia.jpeg"
          descripcion="El fútbol tiene una larga historia, surgió en Inglaterra a mediados del siglo XIX. Pero ya existían versiones alternativas del juego mucho antes y forman parte de la historia del fútbol. Los primeros ejemplos conocidos de un juego de equipo en el que se utilizaba una pelota, que estaba hecha de una roca, se produjeron en las antiguas culturas mesoamericanas hace más de 3.000 años. Los aztecas lo llamaban Tchatali, aunque varias versiones del juego se extendieron por grandes regiones. En algunas ocasiones rituales, la pelota simbolizaba el sol y el capitán del equipo perdedor era sacrificado a los dioses. Una característica única de las versiones del juego de pelota mesoamericano era una pelota que rebotaba hecha de caucho; ninguna otra cultura primitiva tenía acceso al caucho."
          parrafo="Desde la antigua Grecia se conocían otras variedades de juegos de pelota. La pelota se fabricaba con jirones de cuero rellenos de pelo (los primeros documentos de pelotas rellenas de aire son del siglo VII). Sin embargo, los juegos de pelota tenían un estatus bajo y no se incluían en los Juegos Panhelénicos. En la Antigua Roma, los juegos con pelotas no se incluían en el entretenimiento en las grandes arenas (anfiteatros), sino que se producían en ejercicios en el ejército con el nombre de Harpastum. Fue la cultura romana la que llevaría el fútbol a la isla británica (Britannica). Sin embargo, no se sabe con certeza en qué grado el pueblo británico se vio influenciado por esta variedad y en qué grado desarrolló sus propias variantes."
        />
      </>
    );
  }
}
