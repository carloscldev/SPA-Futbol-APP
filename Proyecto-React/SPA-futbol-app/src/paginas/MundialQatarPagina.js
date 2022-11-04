import React from "react";

export default class MundialQatarPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mundial: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.football-data.org/v2/competitions/WC/matches?status=SCHEDULED",
      {
        method: "GET",
        headers: {
          "X-Auth-Token": "130849e0ce064febb45c9991f11c78a6",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Mundial: data.matches,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <section class="header-liga">
                <div class="container justify-content-center align-items-center">
                  <div class="row justify-content-between">
                    <div class="col-lg-3 d-flex flex-row justify-content-center align-items-center">
                      <div class="header-left">
                        <p class="text"> Próximos partidos </p>
                      </div>
                    </div>
                    <div class="col-lg-3 mx-5">
                      <div class="header">
                        <p class="text"> Mundial de Qatar 2022 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Local</th>
                    <th scope="col">Visitante</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Mundial.map((partido) => (
                    <tr>
                      <td>{partido.utcDate}</td>
                      <td>{partido.homeTeam.name}</td>
                      <td>{partido.awayTeam.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
