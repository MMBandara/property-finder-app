import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav 
            className="navbar navbar-expand-lg navbar-light" 
            style={{ backgroundColor: '#ff4000', borderBottom: '3px solid #feefdd' }}
        >
            <div className="container">
                <Link 
                    className="navbar-brand text-light fw-bold" 
                    to="/" 
                    style={{ fontSize: '1.5rem' }}
                >
                    Property Finder UK
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link 
                                className="nav-link text-light" 
                                to="/" 
                                style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link text-light" 
                                to="/favorites" 
                                style={{ fontWeight: 'bold', fontSize: '1.1rem' }}
                            >
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
