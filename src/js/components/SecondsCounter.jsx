
export const SecondsCounter = ({primerDigito,segundoDigito,tercerDigito,cuartoDigito}) => {
 return (
    <div className="contenedor">
        <div className="calendar"><i className="fa-solid fa-clock"></i></div>
        <div className="cuarto">{cuartoDigito % 10}</div>
        <div className="tercero">{tercerDigito % 10}</div>
        <div className="segundo">{segundoDigito % 10}</div>
        <div className="primero">{primerDigito % 10}</div>
    </div>
 )
}