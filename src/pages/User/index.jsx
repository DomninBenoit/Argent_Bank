import Header from "../../components/Header";
import Host from "../../components/Host";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { postProfile } from "../../services/services";
import { useDispatch } from "react-redux";
import { setProfile } from "../../redux/actions";

const User = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      postProfile(token)
        .then((response) => {
          dispatch(setProfile(response.body));
        })
        .catch((error) => {
          alert(error);
        });
    }
  });
  return (
    <>
      <Header />
      <Host />
      <Footer />
    </>
  );
};

export default User;
