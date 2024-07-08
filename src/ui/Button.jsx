import { Link } from 'react-router-dom';

const Button = ({ disabled, children, to, type, onClick }) => {
  const base =
    'inline-block rounded-md bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-100 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' p-2 md:px-6 md:py-4',
    small: base + ' py-2 px-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block rounded-md border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-100 hover:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed py-1.5 px-2 md:py-3.5 md:px-6',
    round:
      'inline-block rounded-full w-8 h-8 bg-yellow-500 font-semibold text-stone-800 transition-colors duration-100 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
