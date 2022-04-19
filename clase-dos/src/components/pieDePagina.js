import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

class PieDePagina extends Component
{
  render (){
    return <div className="alert alert-danger text-end">
      {this.props.texto}
    </div>
  }
}
//validaciones, para otros desarrollados, para que sepan que no falte alguna props.
PieDePagina.propTypes ={
  texto: PropTypes.string.isRequired
}

export default PieDePagina;