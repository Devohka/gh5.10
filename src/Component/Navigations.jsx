import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navigation = () => {
    const user = useSelector(state => state.user);

    return (
        <nav>

            <Link to="/gh5.10/login" className='page-link'>
                Login
            </Link>
            <Link to="/gh5.10/register" className='page-link'>
                Register
            </Link>
            {user.length > 0 && (
                <>
                <Link to="/gh5.10/tasks" className='page-link open-link'>
                    Tell
                </Link>
                <h2 className='user-name'>{user}</h2>
                </>
             )} 
        </nav>
    );
};