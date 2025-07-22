import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          FrontendIA
        </Link>
        
        <nav>
          <ul>
            {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/certificates">Certificados</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li>
                  <button onClick={logout} style={{ 
                    background: 'transparent', 
                    border: '1px solid white', 
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Sair
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Cadastro</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
