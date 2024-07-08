import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  getCurrentQuantity,
  increaseItemQuantity,
} from './cartSlice';

const UpdateQuantityButton = ({ id }) => {
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="md:sm text-xs font-semibold">
        {currentQuantity > 9 ? currentQuantity : '0' + currentQuantity}
      </span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateQuantityButton;
