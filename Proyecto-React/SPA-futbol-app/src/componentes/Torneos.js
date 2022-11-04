import React from "react";
import "../styles.css";

export default class TorneosPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={"row my-4"}>
          <div className={"col-12 d-flex align-items-center"}>
            <div class="card border-success mb-3">
              <div class="card-header border-success">
                {this.props.nombreTorneo}
              </div>
              <div class="card-body text-success">
                <img
                  src={this.props.img}
                  alt={this.props.nombreTorneo}
                  className="torneos-thumb"
                />
                <p class="card-text"></p>
              </div>
              <div class="card-footer border-success ">
                {this.props.descripcionTorneo}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
