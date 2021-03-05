import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from 'actions';
import Layout from 'components/Layout';
import { Header, Info, Slot } from 'components/Interview';
import styles from 'styles/page.module.scss';

const InterviewPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  return (
    <Layout title="Interview" description="Enter your group interview here." className={styles.interview}>
      <Header />
      <Info />
      <Slot />
    </Layout>
  );
};

export default InterviewPage;
