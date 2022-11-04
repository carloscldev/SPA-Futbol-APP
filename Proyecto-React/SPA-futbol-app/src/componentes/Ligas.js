import React from "react";
import "../styles.css";

export default class LigasPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={"row my-4"}>
          <div className={"col-12 d-flex align-items-center"}>
            <img
              src={this.props.img}
              alt={this.props.nombreLiga}
              className="club-thumb"
            />
            <div className="px-3 py-2">
              <h2>{this.props.nombreLiga}</h2>
              <p>{this.props.descripcionLiga}</p>
              <p>{this.props.parrafo}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
