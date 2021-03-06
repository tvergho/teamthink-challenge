import type { RootState } from 'types/state';
import { useRouter } from 'next/router';
import ClearButton from 'components/ClearButton';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

type SlotProps = {
  active?: boolean
}

const Slot = ({ active }: SlotProps): JSX.Element => {
  const room = useSelector((state: RootState) => state.rooms.currentRoom);
  const router = useRouter();

  const navigateToRoom = () => {
    if (room) {
      router.push(`/room/${room.name}`);
    }
  };

  return (
    <div className={styles.slot}>
      <ClearButton className={`${styles['action-button']} ${active ? styles.active : styles.inactive}`} disabled={!active} onClick={navigateToRoom}>
        {active ? 'Enter Interview Room' : 'Please Wait For Your Interview Slot'}
      </ClearButton>

      <div className={styles['slot-text']}>Interview Slot: Wednesday, March 3 at 3:30 PM</div>
    </div>
  );
};

export default Slot;
