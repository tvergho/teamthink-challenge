import type { RootState } from 'types/state';
import { useEffect } from 'react';
import Layout from 'components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setRoomLoading, onRoomLoad } from 'actions';
import { Loading, Message } from 'components/Room';

const RoomPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { roomToken, loading } = useSelector((state: RootState) => state.rooms);
  const router = useRouter();
  const roomName = (router.query.name as string);

  useEffect(() => {
    dispatch(onRoomLoad(roomName));
  }, [roomName]);

  useEffect(() => {
    if (roomToken) {
      dispatch(setRoomLoading(false));
    }
  }, [roomToken]);

  return (
    <Layout title={`Room ${roomName}`} description={`Ongoing interview session with group ${roomName}.`}>
      {loading && <Loading />}
      {!loading && !roomToken && <Message message="Your call has ended." />}
    </Layout>
  );
};

export default RoomPage;
