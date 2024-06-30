import LoginForm from '../components/LoginForm';
import useAuthSession from '../hooks/useAuthSession';

const Home = () => {
  const { user } = useAuthSession();

  return (
    <div className="container">
      {user ? (
        <p>Welcome, {user.username}</p>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Home;
