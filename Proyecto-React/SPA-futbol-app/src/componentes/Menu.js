import React from "react";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";

export default class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="row bg-light fixed-top px-5 py-2">
          <div className="col-12 d-flex align-items-center ms-2">
            <SidebarData />
            <div className="ms-auto">
              <Link to="/" className="mx-3 nounderline">
                {" "}
                Inicio{" "}
              </Link>
              <Link to="/Torneos" className="mx-3 nounderline">
                {" "}
                Torneos{" "}
              </Link>
              <Link to="/Ligas" className="mx-3 nounderline">
                {" "}
                Ligas{" "}
              </Link>
              <Link to="/RealMadrid" className="mx-3 nounderline">
                {" "}
                Partidos Real Madrid{" "}
              </Link>
              <Link to="/MundialQatar" className="mx-3 nounderline">
                {" "}
                Mundial De Qatar{" "}
              </Link>
              <Link to="/Contacto" className="mx-3 nounderline">
                {" "}
                Contacto{" "}
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
