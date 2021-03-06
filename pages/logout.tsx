import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from 'actions';

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(logout());
    router.push('/');
  }, []);

  return (
    <div />
  );
};

export default Logout;
