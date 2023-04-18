import './CartWidget.css'
import iconCart from '../../Images/iconCart.png'

const CartWidget = () => {
  return (
    <div>
      <img className='imgCart' src={iconCart} alt="Carrito" />
      <strong style={{ color: "white" }}>3</strong>
    </div>
  )
}

export default CartWidget