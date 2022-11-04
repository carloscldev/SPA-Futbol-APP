import React from "react";

import "./SidebarData.css";

export default class SidebarData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
  }

  showSidebar = () => this.setState({ sidebar: !this.state.sidebar });

  render() {
    return (
      <>
        <div>
          <div>
            <a href="javascript:void(0);" className="icon" onClick={this.showSidebar} >
              <img
                src="/img/football-logo.png"
                alt="Logo Futbolista"
                width="50"
                height="60"
              />
            </a>
          </div>

          <div
            id="mySidebar"
            className="sidebar"
            style={
              this.state.sidebar ? { display: "block" } : { display: "none" }
            }
          >
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={this.showSidebar}
            >
              <i class="bi bi-x-circle"></i>
            </a>
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
