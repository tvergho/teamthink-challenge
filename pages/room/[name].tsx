import type { RootState } from 'types/state';
import { useEffect, useState, useCallback } from 'react';
import Video from 'twilio-video';
import Layout from 'components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { onRoomLoad, setError } from 'actions';
import { Message, VideoChat } from 'components/Room';
import styles from 'styles/page.module.scss';

const RoomPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { roomToken, loading, currentRoom } = useSelector((state: RootState) => state.rooms);
  const router = useRouter();
  const roomName = (router.query.name as string);

  const [twilioRoom, setTwilioRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    dispatch(onRoomLoad(roomName));
  }, [roomName]);

  const tryConnect = useCallback(async () => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) => prevParticipants.filter((p) => p !== participant));
    };

    if (roomToken && currentRoom && !twilioRoom) {
      try {
        console.log(roomToken);
        const newRoom = await Video.connect(roomToken, { name: currentRoom.name });
        newRoom.on('participantConnected', participantConnected);
        newRoom.on('participantDisconnected', participantDisconnected);
        newRoom.participants.forEach(participantConnected);
        setTwilioRoom(newRoom);
      } catch (e) {
        dispatch(setError(e, true));
      }
    }
  }, [roomToken, currentRoom, twilioRoom]);

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
  };

  useEffect(() => {
    if (roomToken && currentRoom) {
      tryConnect();
    }

    return () => {
      disconnect();
    };
  }, [tryConnect, roomToken, currentRoom]);

  return (
    <Layout title={`Room ${roomName}`} description={`Ongoing interview session with group ${roomName}.`} className={styles.room}>
      {loading && <Message message="Loading..." />}
      {!loading && roomToken && currentRoom && <VideoChat room={twilioRoom} participants={participants} />}
      {!loading && (!roomToken || !currentRoom) && <Message message="Your call has ended." />}
    </Layout>
  );
};

export default RoomPage;
