
import { useDispatch } from 'react-redux';
import { AddUser } from '../redux/actions';
import { Link } from 'react-router-dom';

function Register() {
    const dispatch = useDispatch();
    function submitUser(e) {
        e.preventDefault();
        dispatch(AddUser(e.target.elements.uname.value));
        alert("Ви успішно зареєсторовані");
    };
    return (
        <form onSubmit={submitUser}>
            <input placeholder='name' name='uname'/>
            <button type='submit'>Submit</button>
            <Link to="/gh5.10/">Home</Link>
        </form>
    )
}

export default Register;