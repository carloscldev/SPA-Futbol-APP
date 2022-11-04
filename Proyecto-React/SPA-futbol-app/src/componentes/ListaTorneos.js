import React from "react";
import Torneos from "./ListaTorneos";

export default class TorneosPagina extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.torneos.map((torneos) => (
          <Torneos nombre={torneos.nombre} />
        ))}
      </>
    );
  }
}
