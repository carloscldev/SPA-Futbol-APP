import React from "react";

export default class ContactoPagina extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      email: "",
      mensaje: "",
    };

    this.submitted = this.submitted.bind(this);
    this.changed = this.changed.bind(this);
  }

  submitted(event) {
    alert(
      "Formulario enviado por " +
        this.state.nombre +
        " con el email " +
        this.state.email +
        " y el mensaje " +
        this.state.mensaje
    );
    event.preventDefault();
  }

  changed(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <section class="header-liga">
          <div class="container justify-content-center align-items-center">
            <div class="row justify-content-between">
              <div class="col-lg-3 d-flex flex-row justify-content-center align-items-center">
                <div class="header-left">
                  <p class="text"> Página de Contacto </p>
                </div>
              </div>
              <div class="col-lg-3 mx-5">
                <div class="header">
                  <p class="text"> Resolvemos tus dudas </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2 className="my-3">Pagina de Contacto</h2>

        <form onSubmit={this.submitted}>
          <div className="form-group my-3">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Nombre"
              onChange={this.changed}
            />
          </div>
          <div className="form-group my-3">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={this.changed}
            />
          </div>
          <div className="form-group my-3">
            <label for="mensaje">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="3"
              onChange={this.changed}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </>
    );
  }
}
