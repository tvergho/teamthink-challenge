import type { RootState } from 'types/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms, requestAccess, createRoom } from 'actions';
import Layout from 'components/Layout';
import { Header, Info, Slot } from 'components/Interview';
import styles from 'styles/page.module.scss';

const InterviewPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { rooms, loading, roomToken } = useSelector((state: RootState) => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  useEffect(() => {
    if (rooms.length > 0) {
      dispatch(requestAccess(rooms[0].id));
    }
  }, [rooms]);

  useEffect(() => {
    if (!loading && rooms.length === 0) {
      dispatch(createRoom());
    }
  }, [loading]);

  return (
    <Layout title="Interview" description="Enter your group interview here." className={styles.interview}>
      <Header />
      <Info />
      <Slot active={!!roomToken} />
    </Layout>
  );
};

export default InterviewPage;
