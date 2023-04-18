import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='productCard'>
        <p id="parrafoId">ID: {id} </p>
        <strong>{nombre} </strong>
        <p id="precio">U$S {precio} </p>
        <img className='productImg' src={img} alt={nombre} />
        <Link to={`/item/${id}`} className="buttonLink"> Detalles </Link>
        
    </div>
  )
}

export default Item