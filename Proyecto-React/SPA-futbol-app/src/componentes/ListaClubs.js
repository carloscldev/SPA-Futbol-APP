import React from "react";
import Clubs from "./Clubs";

export default class ListaClubs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.clubs.map((clubs) => (
          <Clubs
            nombre={clubs.nombre}
            img={clubs.img}
            descripcion={clubs.descripcion}
          />
        ))}
      </>
    );
  }
}
