import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../css/style.css";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User";
import { Provider } from "react-redux";
import { store } from "../../redux/reducer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
