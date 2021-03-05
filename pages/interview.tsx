import type { RootState } from 'types/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from 'actions';
import Layout from 'components/Layout';
import { Header, Info, Slot } from 'components/Interview';
import styles from 'styles/page.module.scss';

const InterviewPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state: RootState) => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  useEffect(() => {
    console.log(rooms);
  }, [rooms]);

  return (
    <Layout title="Interview" description="Enter your group interview here." className={styles.interview}>
      <Header />
      <Info />
      <Slot />
    </Layout>
  );
};

export default InterviewPage;
