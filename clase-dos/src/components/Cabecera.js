import "bootstrap/dist/css/bootstrap.css"
function Cabecera(props) {
  return <div className="alert alert-info text-center mb-0">
    <h1>
      {props.titulo}
    </h1>
  </div>
}

export default Cabecera;