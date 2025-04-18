import { useDispatch } from "react-redux";
import { AddUser } from "../redux/actions";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  function submitUser(e) {
    e.preventDefault();
    if (e.target.elements.uname.value.length > 3) {
      dispatch(AddUser(e.target.elements.uname.value));
      alert("Ви успішно зареєсторовані");
    } else {
        alert("Ви вели занадко коротке ім'я");
    }
  }
  return (
    <>
      <Link to="/gh5.10/" className="page-link">
        Home
      </Link>

      <form onSubmit={submitUser} className="form-user">
        <h2>Register</h2>
        <input placeholder="name" name="uname" className="input-user" />
        <button type="submit" className="button-user">
          Submit
        </button>
        <Link to="/gh5.10/login" className="page-user">
          Є акаунт? Зайди в нього
        </Link>
      </form>
    </>
  );
}

export default Register;
