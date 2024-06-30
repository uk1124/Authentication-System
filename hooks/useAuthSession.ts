import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { useEffect } from 'react';
import { setUser, logout } from '../redux/auth/authSlice';
import axios from 'axios';

const useAuthSession = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get('/api/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch(setUser(response.data));
        } catch (error) {
          console.error(error);
          dispatch(logout());
        }
      }
    };

    fetchUser();
  }, [token, dispatch]);

  return { user };
};

export default useAuthSession;
