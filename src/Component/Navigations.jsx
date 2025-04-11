import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navigation = () => {
    const user = useSelector(state => state.user);

    return (
        <nav>
            <Link to="/gh5.10/">
                Home
            </Link>
            <Link to="/gh5.10/login">
                Login
            </Link>
            <Link to="/gh5.10/register">
                Register
            </Link>
            {user.length > 0 && (
                <>
                <Link to="/gh5.10/tasks">
                    Tell
                </Link>
                <h2>{user}</h2>
                </>
             )} 
        </nav>
    );
};