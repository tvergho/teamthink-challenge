import type { Room, Participant as ParticipantType } from 'twilio-video';
import Participant from './Participant';
import styles from './styles.module.scss';

type VideoChatProps = {
  participants: ParticipantType[],
  room: Room
}

const VideoChat = ({ room, participants }: VideoChatProps): JSX.Element => {
  return (
    <div className={styles['video-container']}>
      <div className={styles['video-side']}>
        {participants.map((participant) => (
          <Participant key={participant.sid} participant={participant} width="100%" />
        ))}
      </div>
      <div className={styles['video-main']}>
        <Participant participant={room.localParticipant} width="100%" height="90vh" />
      </div>
    </div>
  );
};

export default VideoChat;
