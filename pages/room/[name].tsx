import type { RootState } from 'types/state';
import { useEffect, useState, useCallback } from 'react';
import Video from 'twilio-video';
import Layout from 'components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { onRoomLoad, setError } from 'actions';
import { Message, VideoChat } from 'components/Room';
import PrivateRoute from 'components/PrivateRoute';
import styles from 'styles/page.module.scss';

const RoomPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { roomToken, loading, currentRoom } = useSelector((state: RootState) => state.rooms);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const roomName = (router.query.name as string);

  const [twilioRoom, setTwilioRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [hasConnected, setHasConnected] = useState(false);
  const [connecting, setConnecting] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(onRoomLoad(roomName));
    }
  }, [roomName, isAuthenticated]);

  const disconnect = () => {
    setTwilioRoom((currentRoom) => {
      if (currentRoom && currentRoom.localParticipant.state === 'connected') {
        currentRoom.localParticipant.tracks.forEach((trackPublication) => {
          trackPublication.track.stop();
        });
        currentRoom.disconnect();
        return null;
      } else {
        return currentRoom;
      }
    });
    setConnecting(false);
    setHasConnected(false);
  };

  const tryConnect = useCallback(async () => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) => prevParticipants.filter((p) => p !== participant));
    };

    if (roomToken && currentRoom && !twilioRoom && !hasConnected) {
      try {
        setHasConnected(true);

        const newRoom = await Video.connect(roomToken, { name: currentRoom.name });
        newRoom.on('participantConnected', participantConnected);
        newRoom.on('participantDisconnected', participantDisconnected);
        newRoom.participants.forEach(participantConnected);
        setTwilioRoom(newRoom);
      } catch (e) {
        disconnect();
        dispatch(setError(e, true));
      }
    }
  }, [roomToken, currentRoom, twilioRoom, hasConnected]);

  useEffect(() => {
    tryConnect();
  }, [tryConnect]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return (
    <Layout title={`Room ${roomName}`} description={`Ongoing interview session with group ${roomName}.`} className={styles.room}>
      <PrivateRoute>
        {(loading || (!twilioRoom && hasConnected)) && <Message message="Loading..." />}
        {!loading && roomToken && currentRoom && twilioRoom && <VideoChat room={twilioRoom} participants={participants} />}
        {!loading && (!roomToken || !currentRoom) && !connecting && <Message message="Your call has ended." />}
      </PrivateRoute>
    </Layout>
  );
};

export default RoomPage;
