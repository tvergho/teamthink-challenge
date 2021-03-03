import Image from 'next/image';
import ClearButton from 'components/ClearButton';
import styles from './styles.module.scss';

type HeaderProps = {
  displayAdmin?: boolean
}

const Header = ({ displayAdmin }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.header}>
      {displayAdmin && <ClearButton className={styles.admin}>Admin Login</ClearButton>}
      <Image src="/logo-white.svg" width={400} height={95} />
    </div>
  );
};

export default Header;
