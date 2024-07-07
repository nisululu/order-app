import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  if (to === "-1")
    return <button onClick={() => navigate(-1)}>{children}</button>;

  return (
    <Link to={to} className="text-sky-600 hover:text-sky-700">
      {children}
    </Link>
  );
};

export default LinkButton;
