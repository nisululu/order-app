import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const { username } = useSelector((state) => state.user);

  return (
    <div className="my-10 px-4 text-center">
      <h1 className="mb-8 text-center text-3xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username ? (
        <Button to="/menu" type="primary">
          Order Please, {username}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
