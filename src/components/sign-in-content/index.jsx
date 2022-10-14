import { postLogin } from "../../services/services";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const SignInContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postLogin(
      event.target["username"].value,
      event.target["password"].value
    );
    dispatch(SET_TOKEN(response.body.token));
    navigate("/user");
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            name="username"
            classname="input-wrapper"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            classname="input-wrapper"
          />
          <Input
            label="Remember me"
            type="checkbox"
            name="remember-me"
            classname="input-remember"
          />
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignInContent;
