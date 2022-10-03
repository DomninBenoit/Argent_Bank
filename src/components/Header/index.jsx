import Logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./">
        <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      {window.location.pathname !== "/user" ? (
        <div>
          <Link class="main-nav-item" to="/sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link class="main-nav-item" to="/user">
            <i class="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link class="main-nav-item" to="/">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
