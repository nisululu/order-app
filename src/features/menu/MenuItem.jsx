/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantity } from '../cart/cartSlice';
import DeleteButton from '../cart/DeleteButton';
import UpdateQuantityButton from '../cart/UpdateQuantityButton';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantity(id));

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-400">
              Sold out
            </p>
          )}

          <div className="space-x-2">
            {!soldOut && !currentQuantity && (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            )}
            {currentQuantity > 0 && (
              <div className="flex items-center gap-1 md:gap-3">
                <UpdateQuantityButton id={id} />
                <DeleteButton id={id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
