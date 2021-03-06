import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { siteName } from 'lib/constants';
import ErrorNotification from 'components/ErrorNotification';
import { useDispatch } from 'react-redux';
import { initialLoad } from 'actions';
import styles from './styles.module.scss';

type LayoutProps = {
  children?: React.ReactNode,
  title: string,
  description: string,
  className?: string
}

const Layout = ({
  children, title, description, className = '',
}: LayoutProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialLoad());
  }, []);

  return (
    <>
      <NextSeo title={`${title} | ${siteName}`} description={description} />
      <main className={`${styles.container} ${className}`}>
        {children}
      </main>
      <ErrorNotification />
    </>
  );
};

export default Layout;
