import Logo from "../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";
import { getUserName } from "../../redux/selectors";

const Header = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector(getUserName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token === "" ? (
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user.firstname}
          </Link>
          <button className="main-nav-item" onClick={loginOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
