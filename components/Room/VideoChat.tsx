import type { Room, Participant } from 'twilio-video';
import styles from './styles.module.scss';

type VideoChatProps = {
  participants: Participant[],
  room: Room
}

const VideoChat = ({ room, participants }: VideoChatProps): JSX.Element => {
  return (
    <div className={styles.video} />
  );
};

export default VideoChat;
