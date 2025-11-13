import Proptypes from 'prop-types';

export const SecondsCounter = ({counter}) => {

const cuarto = Math.floor(counter/1000);
const tercero = Math.floor(counter/100);
const segundo = Math.floor(counter/10);
const primero = Math.floor(counter/1);
 return (
    <div className="contenedor">
        <div className="calendar"><i className="fa-solid fa-clock"></i></div>
        <div className="cuarto">{cuarto % 10}</div>
        <div className="tercero">{tercero % 10}</div>
        <div className="segundo">{segundo % 10}</div>
        <div className="primero">{primero % 10}</div>
    </div>
 )
}
