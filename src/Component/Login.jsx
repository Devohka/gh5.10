
import { useDispatch } from 'react-redux';
import { AddUser } from '../redux/actions';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    function submitUser(e) {
        e.preventDefault();
        if(e.target.elements.uname.value === user) {
            dispatch(AddUser(e.target.elements.uname.value));
            alert("Ви успішно війшли в акаунт");
        } else {
            alert("Вибачте неправильне ім'я");
        }
        
    };
    return (
        <form onSubmit={submitUser}>
            <input placeholder='name' name='uname'/>
            <button type='submit'>Submit</button>
            <Link to="/gh5.10/">Home</Link>
        </form>
    )
}

export default Login;