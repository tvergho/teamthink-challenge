import type { RootState } from 'types/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRooms, requestAccess, createRoom, setCurrentRoom,
} from 'actions';
import Layout from 'components/Layout';
import { Header, Info, Slot } from 'components/Interview';
import PrivateRoute from 'components/PrivateRoute';
import generateRandomId from 'utils/generateRandomId';
import styles from 'styles/page.module.scss';

const InterviewPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    rooms, loading, roomToken, currentRoom,
  } = useSelector((state: RootState) => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  useEffect(() => {
    if (rooms.length > 0) {
      const room = rooms[0];
      dispatch(requestAccess(room));
      dispatch(setCurrentRoom(room));
    }
  }, [rooms]);

  useEffect(() => {
    if (!loading && rooms.length === 0) {
      dispatch(createRoom(generateRandomId(6)));
    }
  }, [loading]);

  return (
    <Layout title="Interview" description="Enter your group interview here." className={styles.interview}>
      <PrivateRoute>
        <Header />
        <Info />
        <Slot active={!!roomToken && !!currentRoom} />
      </PrivateRoute>
    </Layout>
  );
};

export default InterviewPage;
