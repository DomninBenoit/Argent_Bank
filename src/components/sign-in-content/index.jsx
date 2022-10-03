import { Link } from "react-router-dom";
import Input from "../Input";

const SignInContent = () => {
  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
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
          <Link to="../user" class="sign-in-button">
            Sign In
          </Link>
        </form>
      </section>
    </main>
  );
};

export default SignInContent;
