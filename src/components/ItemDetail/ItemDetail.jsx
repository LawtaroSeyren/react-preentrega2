import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, desc }) => {
  return (
    <>
      <div class="container">
        <div className='itemContainer'>
          <h2>{nombre} </h2>
          <h3>U$S{precio} </h3>
          <h4> ID: {id} </h4>
          <p>{desc}</p>
          <img src={img} alt={nombre} className="miniImg"/>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
