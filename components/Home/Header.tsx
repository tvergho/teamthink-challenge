import Image from 'next/image';
import styles from './styles.module.scss';

type HeaderProps = {
  displayAdmin: boolean
}

const Header = ({ displayAdmin }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.header}>
      <Image src="/logo-white.svg" width={400} height={95} />
    </div>
  );
};

export default Header;
