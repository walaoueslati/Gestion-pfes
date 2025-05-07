import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAuthData } from '../features/auth/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      await axios.post('http://localhost:8000/api/logout/', {
        refresh_token: refreshToken,
      });
    } finally {
      dispatch(clearAuthData());
      navigate('/');
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;