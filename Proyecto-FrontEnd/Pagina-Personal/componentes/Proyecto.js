class Proyecto extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> <a href="#none" class="d-block link-dark text-decoration-none"><img
                src={"../images/" + this.props.imagen} class="img-fluid mb-4 rounded-1 shadow-sm w-100"
                alt="Proyecto" />
                <h4 class="fw-bold h5 mb-1 px-2 py-1">{this.props.titulo}</h4>
                <p class="mb-0 px-2 py-1">{this.props.descripcion}</p>
            </a>
            </div>
        )
    }

}

ReactDOM.render(
    <Proyecto imagen="proyecto1.jpeg" titulo="Proyecto 1" descripcion="Diseño y desarrollo de servicios para todo tipo de clientes,
                    especializándome en la creación de sitios
                    web
                    elegantes y modernos, servicios SEO y tiendas online"/>,
    document.getElementById("proyecto1")
);
ReactDOM.render(
    <Proyecto imagen="proyecto2.png" titulo="Proyecto 2" descripcion="Diseño y desarrollo de servicios para todo tipo de clientes,
                    especializándome en la creación de sitios
                    web
                    elegantes y modernos, servicios SEO y tiendas online"/>,
    document.getElementById("proyecto2")
);
ReactDOM.render(
    <Proyecto imagen="proyecto3.png" titulo="Proyecto 3" descripcion="Diseño y desarrollo de servicios para todo tipo de clientes,
                    especializándome en la creación de sitios
                    web
                    elegantes y modernos, servicios SEO y tiendas online"/>,
    document.getElementById("proyecto3")
);
ReactDOM.render(
    <Proyecto imagen="proyecto4.jpeg" titulo="Proyecto 4" descripcion="Diseño y desarrollo de servicios para todo tipo de clientes,
                    especializándome en la creación de sitios
                    web
                    elegantes y modernos, servicios SEO y tiendas online"/>,
    document.getElementById("proyecto4")
);