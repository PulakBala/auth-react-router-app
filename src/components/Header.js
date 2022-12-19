import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {

    const {user , logOut} = useContext(AuthContext);
    console.log('context', user);

    const handleLogOut = () =>{
        logOut()
          .then( () => {})
          .catch( error => console.log(error))
    }
    
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Authenctication</Link>

                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

                {
                    user?.email && <span>Welcome, {user.email}</span>
                }

                <button onClick={handleLogOut}  className="btn btn-sm">Log Out</button>
            </div>
        </div>
    );
};

export default Header;