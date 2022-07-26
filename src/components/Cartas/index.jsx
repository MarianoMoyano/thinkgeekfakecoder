import "./ItemDetail.css"

export const PokeDetalle = ({ id, nombre, cost, sprite } ) => {

return (
<div className='carta'>
    <img src={sprite} alt="" className="sizeSprite"/>
    <h2>Nombre: {nombre}</h2>
    <h3>Costo: {cost}</h3>
</div>
)} 

export default PokeDetalle