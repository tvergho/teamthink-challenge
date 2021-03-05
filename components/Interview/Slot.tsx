import ClearButton from 'components/ClearButton';
import styles from './styles.module.scss';

type SlotProps = {
  active?: boolean
}

const Slot = ({ active }: SlotProps): JSX.Element => {
  return (
    <div className={styles.slot}>
      <ClearButton className={`${styles['action-button']} ${active ? styles.active : styles.inactive}`} disabled={!active}>
        {active ? 'Enter Interview Room' : 'Please Wait For Your Interview Slot'}
      </ClearButton>
    </div>
  );
};

export default Slot;
