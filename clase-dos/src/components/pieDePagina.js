import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
class PieDePagina extends Component
{
  render (){
    return <div className="alert alert-danger text-end">
      {this.props.texto}
    </div>
  }
}

export default PieDePagina;