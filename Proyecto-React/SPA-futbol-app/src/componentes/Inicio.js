import React from "react";
import "../styles.css";

export default class InicioPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={"row my-4"}>
          <div className="col-12 text-center">
            <div className="px-3">
              <h2>{this.props.titulo}</h2>
              <div className="py-2"></div>
              <img
                src={this.props.img}
                alt="Imagen Fútbol"
                className="imagen-inicio"
              />
              <div className="py-2"></div>
              <p>{this.props.descripcion}</p>
              <p>{this.props.parrafo}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
