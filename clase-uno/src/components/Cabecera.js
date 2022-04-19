function Cabecera (props){
  return (
    <div className="alert alert-info text-center" style={{
      paddingTop: '2em',
      color: 'green'
    }}>
      <h1>
        {props.titulo}
      </h1>
    </div>
  );
}

export default Cabecera;