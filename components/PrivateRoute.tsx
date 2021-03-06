import type { RootState } from 'types/state';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';

const Loading = (): JSX.Element => {
  return (
    <div className="loading">
      <CircularProgress color="primary" />
    </div>
  );
};

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { isAuthenticated, isAppLoaded } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isAppLoaded && !isAuthenticated) {
      router.push('/');
    }
  }, [isAppLoaded, isAuthenticated]);

  if (!isAuthenticated || !isAppLoaded) return <Loading />;

  return (
    <>
      {children}
    </>
  );
};

export default PrivateRoute;
