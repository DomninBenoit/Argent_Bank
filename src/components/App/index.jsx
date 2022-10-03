import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../css/style.css";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import User from "../../pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
