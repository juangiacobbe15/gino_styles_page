import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Logo
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/about"
                    >
                        Nosotros
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/login"
                    >
                        Ingresa
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                        juan
                    </span>

                    <button
                        className='nav-item nav-link btn'
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
}
