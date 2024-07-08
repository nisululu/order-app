import { Link, useNavigate } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { getUser } from '../user/userSlice';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const { username } = useSelector(getUser);
  const { cart } = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cart = fakeCart;

  function handleClearCart() {
    dispatch(clearCart());
    navigate('/menu');
  }
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart,{username}</h2>

      <ul className="mt-3 divide-y divide-stone-500 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>

        <Button onClick={handleClearCart} type="secondary">
          Clear cart
        </Button>
        {/* <button>Clear cart</button> */}
      </div>
    </div>
  );
}

export default Cart;
