import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import data from '../data.json'

function Home() {
  const navigate = useNavigate()
  const {cart} = useSelector(state => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          {data.Items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="shopping-cart" onClick={() => navigate('/cart')}>
        <ShoppingCart id="cartIcon" />
        <p>{getTotalQuantity() || 0}</p>
      </div>
    </div>
  )
}

export default Home
