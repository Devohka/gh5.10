import { useDispatch } from "react-redux";
import { AddUser } from "../redux/actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function submitUser(e) {
    e.preventDefault();
    if (e.target.elements.uname.value === user && e.target.elements.uname.value.length > 3) {
      dispatch(AddUser(e.target.elements.uname.value));

      alert("Ви успішно війшли в акаунт");
    } else {
      alert("Вибачте неправильне ім'я");
    }
  }
  return (
    <>
      <Link to="/gh5.10/" className="page-link">
        Home
      </Link>
      <form onSubmit={submitUser} className="form-user">
        <h2>Login</h2>
        <input placeholder="name" name="uname" className="input-user" />
        <button type="submit" className="button-user">
          Submit
        </button>
        <Link to="/gh5.10/register" className="page-user">
          Немає акаунту? Створи його
        </Link>
      </form>
    </>
  );
}

export default Login;
