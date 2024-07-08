import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  function handleDeleteCart(id) {
    dispatch(deleteItem(id));
    console.log(id);
  }
  return (
    <Button type="small" onClick={() => handleDeleteCart(id)}>
      Delete
    </Button>
  );
};

export default DeleteButton;
